package com.example.druid;


import com.alibaba.druid.pool.DruidDataSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@Controller
@ResponseBody
public class DruidQuery {
    static CopyOnWriteArrayList<DruidDataSource> dataSources=new CopyOnWriteArrayList<>();
    static CopyOnWriteArrayList<DruidParams> dataSourceParams=new CopyOnWriteArrayList<>();


    private static Lock lock = new ReentrantLock();



    public int judgeCreate(DruidParams tmpParams){
        int index=-1;
        for(int i=0;i<dataSourceParams.size();i++){
            if(tmpParams.equals(dataSourceParams.get(i))){
                index=i;
                break;
            }
        }

        DruidDataSource dataSource=null;

        if(index==-1){
            dataSource=new DruidDataSource();
            dataSource.setUrl(tmpParams.getUrl());
            dataSource.setUsername(tmpParams.getUsername());
            dataSource.setPassword(tmpParams.getPassword());
            dataSource.setInitialSize(DruidConstant.INIT_SIZE);
            dataSource.setMaxActive(DruidConstant.MAX_ACTIVE);
            dataSource.setMaxWait(DruidConstant.MAX_WAIT);
            dataSource.setMinIdle(DruidConstant.MIN_IDLE);
            dataSource.setDriverClassName(DruidConstant.DRIVER);
            if(lock.tryLock()) {
                try{
                    System.out.println("�ɹ���ȡ������");
                    dataSources.add(dataSource);
                    dataSourceParams.add(tmpParams);
                }catch(Exception e){
                    return -1;
                }finally{
                    System.out.println("�ɹ�������");
                    lock.unlock();
                }
                return dataSources.size()-1;
            }else {
                while(!lock.tryLock()){}
                lock.unlock();
                return judgeCreate(tmpParams);
            }
        }
        else{
            return index;
        }
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/Query", method = RequestMethod.POST, produces="application/json;charset=UTF-8")
    @ResponseBody
    public List<HashMap<String, Object>> query(@RequestBody Map<String, String> paramlist, @RequestParam(required=false)Object... params) {
        //�жϸ�dataSource�Ƿ��Ѿ�������
        DruidParams tmpParams=new DruidParams(paramlist.get("username"),paramlist.get("password"),paramlist.get("url"));
        int index= 0;
        try {
            index = judgeCreate(tmpParams);
            if(index == -1){
                List<HashMap<String, Object>> err = new ArrayList<>();
                HashMap<String, Object> tmap = new HashMap<>();
                tmap.put("code","500");
                tmap.put("message","���dataSource��dataSourceParams�б����");
                err.add(tmap);
                return err;
            }
        } catch (Exception e) {
            List<HashMap<String, Object>> err = new ArrayList<>();
            HashMap<String, Object> tmap = new HashMap<>();
            tmap.put("code","500");
            tmap.put("message","�жϲ���judgeCreate��������");
            err.add(tmap);
            return err;
        }

        System.out.println(index);

        DruidDataSource dataSource = dataSources.get(index);

        Connection connection;
        PreparedStatement pst=null;
        ResultSet rst=null;

        try {
            connection=dataSource.getConnection();
        } catch (SQLException e) {
            List<HashMap<String, Object>> err = new ArrayList<>();
            HashMap<String, Object> tmap = new HashMap<>();
            tmap.put("code","500");
            tmap.put("message","��dataSource�л�ȡ���Ӵ���");
            err.add(tmap);
            return err;
        }
        System.out.println("===========================================================");
        System.out.println(connection);
        List<HashMap<String, Object>> res=new ArrayList<>();
        try {
            pst = connection.prepareStatement(paramlist.get("sql"));
            if (params !=null){
                for(int i=0;i<params.length;i++){
                    pst.setObject(i+1, (String) params[i]);
                }
            }
            //ִ��sql������rst
            rst = pst.executeQuery();
            //Ԫ����
            ResultSetMetaData metaData=rst.getMetaData();
            //����
            int colsnum = metaData.getColumnCount();
            while (rst.next()) {
                HashMap<String, Object> tmp = new HashMap<>();
                for(int i =0;i<colsnum;i++){
                    //ȡ�ý�����е�����
                    String colsname = metaData.getColumnLabel(i+1);
                    //��������ȡ����ǰ�е�ֵ
                    Object val= rst.getObject(colsname);
                    tmp.put(colsname, val);
                }
                res.add(tmp);
            }
            return res;
        } catch (Exception e) {
            List<HashMap<String, Object>> err = new ArrayList<>();
            HashMap<String, Object> tmap = new HashMap<>();
            tmap.put("code","500");
            tmap.put("message","ִ��sql��ѯ������������д���");
            err.add(tmap);
            return err;
        }finally {
            if(connection!=null){
                try {
                    //������ĶϿ����ӣ�ֻ�ǽ����ӹ黹�����ӳ�
                    connection.close();
//                    System.out.println("���ӹرգ���������������������");
                    connection=null;
                } catch (SQLException e) {
                    List<HashMap<String, Object>> err = new ArrayList<>();
                    HashMap<String, Object> tmap = new HashMap<>();
                    tmap.put("code","500");
                    tmap.put("message","connection�رմ���");
                    err.add(tmap);
                    return err;
                }
            }
            if(pst!=null){
                try {
                    pst.close();
                    pst=null;
                } catch (SQLException e) {
                    List<HashMap<String, Object>> err = new ArrayList<>();
                    HashMap<String, Object> tmap = new HashMap<>();
                    tmap.put("code","500");
                    tmap.put("message","PreparedStatement�رմ���");
                    err.add(tmap);
                    return err;
                }
            }
            if(rst!=null){
                try {
                    rst.close();
                    rst=null;
                } catch (SQLException e) {
                    List<HashMap<String, Object>> err = new ArrayList<>();
                    HashMap<String, Object> tmap = new HashMap<>();
                    tmap.put("code","500");
                    tmap.put("message","ResultSet�رմ���");
                    err.add(tmap);
                    return err;
                }
            }
        }
    }

}

