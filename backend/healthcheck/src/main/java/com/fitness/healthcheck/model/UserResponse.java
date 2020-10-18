package com.fitness.healthcheck.model;

import java.util.List;
import java.util.Optional;

public class UserResponse {
	
	public Optional<User> user;
	public User userobj;
	public List<Excercise> excerciselist;
	public List<Calories> calorielist;
	public String responseCode;
	public List<Weight> weightlist;
	public List<Running> runlist;
	public Optional<User> getUser() {
		return user;
	}
	public void setUser(Optional<User> user) {
		this.user = user;
	}
	public List<Excercise> getExcerciselist() {
		return excerciselist;
	}
	public void setExcerciselist(List<Excercise> excerciselist) {
		this.excerciselist = excerciselist;
	}
	public List<Calories> getCalorielist() {
		return calorielist;
	}
	public void setCalorielist(List<Calories> calorielist) {
		this.calorielist = calorielist;
	}
	public String getResponseCode() {
		return responseCode;
	}
	public void setResponseCode(String responseCode) {
		this.responseCode = responseCode;
	}
	public List<Weight> getWeightlist() {
		return weightlist;
	}
	public void setWeightlist(List<Weight> weightlist) {
		this.weightlist = weightlist;
	}
	public List<Running> getRunlist() {
		return runlist;
	}
	public void setRunlist(List<Running> runlist) {
		this.runlist = runlist;
	}
	public User getUserobj() {
		return userobj;
	}
	public void setUserobj(User userobj) {
		this.userobj = userobj;
	}
	
	
	

}
