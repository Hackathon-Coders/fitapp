package com.fitness.healthcheck.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fitness.healthcheck.model.Excercise;

public interface ExcerciseRepository extends MongoRepository<Excercise,String> {

}
