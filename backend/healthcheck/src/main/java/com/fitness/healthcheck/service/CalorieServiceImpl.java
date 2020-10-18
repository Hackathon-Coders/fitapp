package com.fitness.healthcheck.service;

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
	
	@Autowired
	User user;
	
	public void enterCalories(Calories cal,String id) {
		cal.setId(id);
		calrepo.save(cal);
	}
	
	public List<Calories> showCalories(String id)
	{
		List<Calories> callist=calrepo.showCalories(id);
		return callist;
	}

}
