package com.fitness.healthcheck.model;



	

	import org.springframework.data.annotation.Id;
	import org.springframework.data.mongodb.core.mapping.Document;

	@Document(collection="fitnessdata")
	public class User {
		
		@Id
		public String id;
		public String username;
		public String password;
		public String age;
		public String height;
		public String fitnessgoals;
		public String targetweight;
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getAge() {
			return age;
		}
		public void setAge(String age) {
			this.age = age;
		}
		public String getHeight() {
			return height;
		}
		public void setHeight(String height) {
			this.height = height;
		}
		public String getFitnessgoals() {
			return fitnessgoals;
		}
		public void setFitnessgoals(String fitnessgoals) {
			this.fitnessgoals = fitnessgoals;
		}
		public String getTargetweight() {
			return targetweight;
		}
		public void setTargetweight(String targetweight) {
			this.targetweight = targetweight;
		}
		
		

	}


