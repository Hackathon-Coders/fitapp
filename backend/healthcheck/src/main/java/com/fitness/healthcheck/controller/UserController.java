package com.fitness.healthcheck.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
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

import com.fitness.healthcheck.model.Calories;
import com.fitness.healthcheck.model.User;
import com.fitness.healthcheck.model.UserResponse;
import com.fitness.healthcheck.model.Weight;
import com.fitness.healthcheck.repository.UserRepository;
import com.fitness.healthcheck.service.CalorieServiceImpl;
import com.fitness.healthcheck.service.ExcerciseServiceImpl;
import com.fitness.healthcheck.service.RunningServiceImpl;
import com.fitness.healthcheck.service.UserRegImpl;
import com.fitness.healthcheck.service.WeightServiceImpl;

@RestController
@RequestMapping("/healthcheck")
public class UserController {
	
	
	@Autowired
	private UserRegImpl userservice;
	
	@Autowired
	private CalorieServiceImpl calservice;
	
	@Autowired
	private WeightServiceImpl weightservice;
	
	@Autowired
	private RunningServiceImpl runningservice;
	
	@Autowired
	private ExcerciseServiceImpl excercisservice;
	
	private UserResponse userresponse=new UserResponse();
	
	//private UserRepository ur;
	
	@GetMapping("/users")
	public Optional<User> showUsers(String id)
	{
		
		
		Optional userlist=userservice.displayUsers(id);
		return userlist;
		
	}
	@PostMapping("/register")
	public UserResponse saveUser(@RequestBody User user) {
		
		User userobj=userservice.saveUsers(user);
		
		if(userobj!=null)
			userresponse.setResponseCode("200");
		else
			userresponse.setResponseCode("300");
		
		return userresponse;
		
		
	}
	
	@PostMapping("/calories")
	public UserResponse saveCalories(@RequestBody Calories calorie)
	{
		//System.out.println(calorie.getDate());
		Calories cal=calservice.enterCalories(calorie);
		
		if(cal!=null)
			userresponse.setResponseCode("200");
		else
			userresponse.setResponseCode("300");
		
		return userresponse;
		
	}
	@PostMapping("/weight")
	public UserResponse saveWeight(@RequestBody Weight weight)
	{
		Weight wt=weightservice.saveWeight(weight);
		
		if(wt!=null)
			userresponse.setResponseCode("200");
			else
				userresponse.setResponseCode("300");
			
			return userresponse;
		
	}
	
	@PostMapping("/login")
	public UserResponse validateLogin(@RequestBody User user) throws ParseException
	{
		
		String username=user.username;
		String password=user.password;
		
		Response response;
		//System.out.println(username);
		User userob=new User();
		String res=userservice.checkUser(username, password);
		
		Optional userlist=userservice.displayUsers(res);
		
		userresponse.setUser(userlist);
		System.out.println(new Date());
		

SimpleDateFormat sdf = new SimpleDateFormat("ISODate(yyyy-MM-dd)");
String dateWithoutTime = sdf.format(new Date());
		
	

System.out.println("without time :"+dateWithoutTime);
		userresponse.setCalorielist(calservice.showCalories(res,dateWithoutTime));
		
			
			return userresponse;
		
		
		
	}
	

}
