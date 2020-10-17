package com.fitness.healthcheck;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.fitness.healthcheck")
public class HealthcheckApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthcheckApplication.class, args);
	}

}
