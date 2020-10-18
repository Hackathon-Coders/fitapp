package com.fitness.healthcheck.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.healthcheck.model.Calories;
import com.fitness.healthcheck.model.Weight;
import com.fitness.healthcheck.repository.WeightRepository;
@Service
public class WeightServiceImpl { 
	
	@Autowired
	private WeightRepository weightrepo;
	
	public Weight saveWeight(Weight weight)
	{
		Weight wgt=weightrepo.save(weight);
		return wgt;
	}

}
