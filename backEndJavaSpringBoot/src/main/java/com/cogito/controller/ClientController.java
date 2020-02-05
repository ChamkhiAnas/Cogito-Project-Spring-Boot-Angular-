package com.cogito.controller;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogito.entities.Client;
import com.cogito.entities.EmailTemp;
import com.cogito.service.ISClient;
import com.cogito.service.ISendMail;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ClientController {

	@Autowired
	ISClient Isc;
	@Autowired
	ISendMail Ism;
	  @GetMapping(value = "/SelectClientByUserName/{username}") 
	  public Client deletePerson(@PathVariable String usename) { 
		  return Isc.findByUserName(usename); 
	  }
	  
	  @PostMapping(value = "/sendMail")
	  private EmailTemp sendMail(@RequestBody EmailTemp email) throws MessagingException {
		  //Ism.sendEmail(email.getEmail(), email.getSubj(), email.getMsg());
		  Ism.sendEmailWithAttachment(email.getEmail(), email.getSubj(), email.getMsg());
		  return email;
	}
	  
	@PostMapping(value = "/pForm")
	private Object postForm(@RequestBody Object obj) {
		System.out.println(obj);
		return obj;
	}
	 

}
