package com.cogito.service;

import com.cogito.entities.Client;

public interface ISClient{
	public Client findByUserName(String userName);
	public Client SignUp(Client client);
}
