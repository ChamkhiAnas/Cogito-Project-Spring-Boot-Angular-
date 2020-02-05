package com.cogito.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogito.entities.Role;
@CrossOrigin(origins = "http://localhost:4200/")
public interface IRoleDao extends CrudRepository<Role, Integer> {
	 Role findByLabel(@Param("label") String label);
}
