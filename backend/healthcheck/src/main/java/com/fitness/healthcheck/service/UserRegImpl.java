package com.fitness.healthcheck.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.healthcheck.model.User;
import com.fitness.healthcheck.repository.UserRepository;


@Service
public class UserRegImpl {
	@Autowired
	private UserRepository userrepo;
	
	public List<User> displayUsers()
	{
		List<User> userlist=new ArrayList<User>();
		userlist=userrepo.findAll();
		return userlist;
		
		
	}
	
	public User saveUsers(User user) {
		
		User userobj=userrepo.save(user);
		return userobj;
		
	}

}
