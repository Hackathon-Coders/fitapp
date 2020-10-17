package com.fitness.healthcheck.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.fitness.healthcheck.model.User;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
	
	
	

}
