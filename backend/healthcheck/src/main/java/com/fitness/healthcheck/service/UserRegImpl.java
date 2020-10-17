package com.fitness.healthcheck.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.Query;
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

	public String checkUser(String username,String password)
	{
		String result=null;
		User user=userrepo.checkUser(username, password);
		
		if(user!=null)
			
			result= "success";
		else
			result= "failed";
		return result;
		
	}
	
	

}
