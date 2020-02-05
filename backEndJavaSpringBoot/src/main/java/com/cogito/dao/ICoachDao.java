package com.cogito.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cogito.entities.Coach;
@CrossOrigin(origins = "http://localhost:4200/")
public interface ICoachDao extends CrudRepository<Coach, Integer> {

}
