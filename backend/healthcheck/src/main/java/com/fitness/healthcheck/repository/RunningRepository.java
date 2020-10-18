package com.fitness.healthcheck.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.fitness.healthcheck.model.Running;

public interface RunningRepository extends MongoRepository<Running,String> {

}
