package com.lister.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class ListerEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ListerEurekaApplication.class, args);
	}

}
