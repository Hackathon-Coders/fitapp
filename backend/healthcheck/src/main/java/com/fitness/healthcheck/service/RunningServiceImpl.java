package com.fitness.healthcheck.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.healthcheck.model.Running;
import com.fitness.healthcheck.repository.RunningRepository;

@Service
public class RunningServiceImpl {
	
	@Autowired
	private RunningRepository runrepo;
	
	public Running saveRunning(Running run)
	{
		Running running=runrepo.save(run);
		return running;
	}

}
