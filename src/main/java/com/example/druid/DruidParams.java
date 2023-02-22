package com.example.druid;

import org.springframework.web.bind.annotation.RequestParam;

import java.util.Objects;

public class DruidParams {
    String username;
    String password;
    String url;

    public String getUsername(){return username;}

    public void setUsername(String username){
        this.username=username;
    }

    public String getPassword(){return password;}

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUrl() {return url;}

    public void setUrl(String url) {
        this.url = url;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DruidParams that = (DruidParams) o;
        return Objects.equals(username, that.username) && Objects.equals(password, that.password) && Objects.equals(url, that.url);
    }


    public DruidParams(String username, String password, String url){
        this.username=username;
        this.password=password;
        this.url=url;
    }
}
