package com.cogito;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
public class CogitoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CogitoApplication.class, args);
	}
	
	   @Bean
	   public RestTemplate getRestTemplate() {
	      return new RestTemplate();
	   }

}
