package com.fitness.healthcheck.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.fitness.healthcheck.model.Calories;

public interface CalorieRepository extends MongoRepository<Calories,String> {
	
	@Query("{$and :[{_id : ?0},{date :?1}]}")
	public List<Calories> showCalories(String id,String date);

}
