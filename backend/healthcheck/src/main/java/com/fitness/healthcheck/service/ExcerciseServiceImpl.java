package com.fitness.healthcheck.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.healthcheck.model.Excercise;
import com.fitness.healthcheck.repository.ExcerciseRepository;
@Service
public class ExcerciseServiceImpl { 
	
	@Autowired 
	private ExcerciseRepository excrepo;
	
	public Excercise saveExcercise(Excercise exc)
	{
		Excercise exercise=excrepo.save(exc);
		return exercise;
	}

}
