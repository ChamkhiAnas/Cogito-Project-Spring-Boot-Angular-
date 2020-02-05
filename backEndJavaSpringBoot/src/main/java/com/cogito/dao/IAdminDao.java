package com.cogito.dao;

import org.springframework.data.repository.CrudRepository;

import com.cogito.entities.Admin;

public interface IAdminDao extends CrudRepository<Admin, Integer> {

}
