package com.fitness.healthcheck.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.xml.ws.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.tokens.Token.ID;

import com.fitness.healthcheck.model.User;
import com.fitness.healthcheck.model.UserResponse;
import com.fitness.healthcheck.repository.UserRepository;
import com.fitness.healthcheck.service.CalorieServiceImpl;
import com.fitness.healthcheck.service.UserRegImpl;

@RestController
@RequestMapping("/healthcheck")
public class UserController {
	
	
	@Autowired
	private UserRegImpl userservice;
	
	@Autowired
	private CalorieServiceImpl calservice;
	
	@Autowired
	UserResponse userresponse;
	
	//private UserRepository ur;
	
	@GetMapping("/users")
	public Optional<User> showUsers(String id)
	{
		
		
		Optional userlist=userservice.displayUsers(id);
		return userlist;
		
	}
	@PostMapping("/saveusers")
	public User saveUser(@RequestBody User user) {
		
		User userobj=userservice.saveUsers(user);
		return userobj;
		
		
	}
	
	@PostMapping("/login")
	public UserResponse validateLogin(@RequestBody User user)
	{
		
		String username=user.username;
		String password=user.password;
		
		Response response;
		//System.out.println(username);
		User userob=new User();
		String res=userservice.checkUser(username, password);
		Optional userlist=userservice.displayUsers(res);
		
		userresponse.setUser(userlist);
		userresponse.setCalorielist(calservice.showCalories(res));
		
			
			return userresponse;
		
		
		
	}
	

}
