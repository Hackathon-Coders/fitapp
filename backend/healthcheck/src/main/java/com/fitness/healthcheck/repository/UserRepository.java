package com.fitness.healthcheck.repository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.fitness.healthcheck.model.User;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
	
	@Query("{$and : [{username : ?0}, {password : ?1}]}")
	public User checkUser(String username,String password);
	
	
	

}
