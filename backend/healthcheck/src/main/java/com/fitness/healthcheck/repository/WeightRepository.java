package com.fitness.healthcheck.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.fitness.healthcheck.model.Weight;

public interface WeightRepository extends MongoRepository<Weight,String> {

}
