package com.fitness.healthcheck.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
@Document(collection="caloriescalc")
public class Calories {
	
	@Id
	public String id;
	public String userid;
	
	public String description;
	public String calories;
	public Date date;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCalories() {
		return calories;
	}
	public void setCalories(String calories) {
		this.calories = calories;
	}
	
	
	
	

}
