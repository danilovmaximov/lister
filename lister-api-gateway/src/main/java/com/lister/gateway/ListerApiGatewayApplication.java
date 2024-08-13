package com.lister.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ListerApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ListerApiGatewayApplication.class, args);
	}

}
