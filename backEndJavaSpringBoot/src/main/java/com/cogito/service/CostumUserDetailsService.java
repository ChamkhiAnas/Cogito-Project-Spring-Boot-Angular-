package com.cogito.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cogito.entities.Client;
import com.cogito.entities.Role;


@Service
public class CostumUserDetailsService implements UserDetailsService{

	@Autowired
	ISClient userService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Client user = userService.findByUserName(username);
		System.out.println(new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), getGrantedAuthorities(user)));
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), getGrantedAuthorities(user));
	}
	
	private List<GrantedAuthority> getGrantedAuthorities(Client user){
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		Role role = user.getRole();
		authorities.add(new SimpleGrantedAuthority(role.getLabel()));
		
		return authorities;
	}
}
