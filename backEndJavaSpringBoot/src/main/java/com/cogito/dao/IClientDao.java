package com.cogito.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogito.entities.Client;
@RepositoryRestResource(exported = true)
@CrossOrigin(origins = "http://localhost:4200/")
public interface IClientDao extends JpaRepository<Client, Integer> {
	public Client findByUserName(String userName);
}
