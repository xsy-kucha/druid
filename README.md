### 简介

本项目是基于java、druid来实现的连接池后端。

### 启动方式

1、使用默认端口（8080）启动服务

`java -jar druid.jar`

2、指定端口启动服务

`java jar druid.jar --server.port=指定的端口号`

### 使用介绍

查询请求的接口地址为：服务器ip:8080/Query。其中请求Body为JSON格式的数据，见下图

![image-20230220231523931](C:\Users\22790\AppData\Roaming\Typora\typora-user-images\image-20230220231523931.png)

注：sql参数需为完整的sql语句，不支持带参数的sql查询！ 
