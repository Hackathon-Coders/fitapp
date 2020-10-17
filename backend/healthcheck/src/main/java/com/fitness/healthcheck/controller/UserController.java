package com.fitness.healthcheck.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitness.healthcheck.model.User;
import com.fitness.healthcheck.repository.UserRepository;
import com.fitness.healthcheck.service.UserRegImpl;

@RestController
@RequestMapping("/healthcheck")
public class UserController {
	
	
	@Autowired
	private UserRegImpl userservice;
	
	//private UserRepository ur;
	
	@GetMapping("/users")
	public List<User> showUsers()
	{
		System.out.println("into controller");
		List<User> userlist=new ArrayList<User>();
		
		userlist=userservice.displayUsers();
		return userlist;
		
	}
	@PostMapping("/saveusers")
	public User saveUser(@RequestBody User user) {
		
		User userobj=userservice.saveUsers(user);
		return userobj;
		
	}
	

}
