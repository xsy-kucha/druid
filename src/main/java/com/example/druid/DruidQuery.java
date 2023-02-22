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
                    System.out.println("成功获取锁！！");
                    dataSources.add(dataSource);
                    dataSourceParams.add(tmpParams);
                }catch(Exception e){
                    return -1;
                }finally{
                    System.out.println("成功解锁！");
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
        //判断该dataSource是否已经创建过
        DruidParams tmpParams=new DruidParams(paramlist.get("username"),paramlist.get("password"),paramlist.get("url"));
        int index= 0;
        try {
            index = judgeCreate(tmpParams);
            if(index == -1){
                List<HashMap<String, Object>> err = new ArrayList<>();
                HashMap<String, Object> tmap = new HashMap<>();
                tmap.put("code","500");
                tmap.put("message","添加dataSource、dataSourceParams列表错误");
                err.add(tmap);
                return err;
            }
        } catch (Exception e) {
            List<HashMap<String, Object>> err = new ArrayList<>();
            HashMap<String, Object> tmap = new HashMap<>();
            tmap.put("code","500");
            tmap.put("message","判断参数judgeCreate方法错误");
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
            tmap.put("message","从dataSource中获取连接错误");
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
            //执行sql，返回rst
            rst = pst.executeQuery();
            //元数据
            ResultSetMetaData metaData=rst.getMetaData();
            //列数
            int colsnum = metaData.getColumnCount();
            while (rst.next()) {
                HashMap<String, Object> tmp = new HashMap<>();
                for(int i =0;i<colsnum;i++){
                    //取得结果集中的列名
                    String colsname = metaData.getColumnLabel(i+1);
                    //根据列来取出当前列的值
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
            tmap.put("message","执行sql查询，结果集处理中错误");
            err.add(tmap);
            return err;
        }finally {
            if(connection!=null){
                try {
                    //不是真的断开连接，只是将连接归还给连接池
                    connection.close();
//                    System.out.println("连接关闭！！！！！！！！！！！");
                    connection=null;
                } catch (SQLException e) {
                    List<HashMap<String, Object>> err = new ArrayList<>();
                    HashMap<String, Object> tmap = new HashMap<>();
                    tmap.put("code","500");
                    tmap.put("message","connection关闭错误");
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
                    tmap.put("message","PreparedStatement关闭错误");
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
                    tmap.put("message","ResultSet关闭错误");
                    err.add(tmap);
                    return err;
                }
            }
        }
    }

}

