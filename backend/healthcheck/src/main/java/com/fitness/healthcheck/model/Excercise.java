package com.fitness.healthcheck.model;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class Excercise {
	@Id
	public String id;
	public String userid;
	public String hours;
	public Date date;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getHours() {
		return hours;
	}
	public void setHours(String hours) {
		this.hours = hours;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	

}
