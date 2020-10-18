package com.fitness.healthcheck.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.healthcheck.model.Calories;
import com.fitness.healthcheck.model.User;
import com.fitness.healthcheck.repository.CalorieRepository;

@Service
public class CalorieServiceImpl {
	
	@Autowired
	CalorieRepository calrepo;
	
	
	
	public Calories enterCalories(Calories cal) {
		
		Calories calorie=calrepo.save(cal);
		return calorie;
	}
	
	public List<Calories> showCalories(String id,String date)
	{
		System.out.println("Date :"+date);
		List<Calories> callist=calrepo.showCalories(id, date);
		return callist;
	}

}
