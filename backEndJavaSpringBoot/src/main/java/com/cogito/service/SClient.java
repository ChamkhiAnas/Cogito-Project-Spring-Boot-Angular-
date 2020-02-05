package com.cogito.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cogito.dao.IClientDao;
import com.cogito.entities.Client;
@Service
public class SClient implements ISClient{
	
	@Autowired
	IClientDao Ic;
	
	
	
	 public Client findByUserName(String userName) { 
		 return Ic.findByUserName(userName); 
		 
	 }
	 
	 
	 public Client SignUp(Client client) {
		 Ic.save(client);
		 return client;
	 }
	 
}
