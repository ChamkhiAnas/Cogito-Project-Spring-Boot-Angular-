package com.cogito.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cogito.config.AuthentificationRequest;
import com.cogito.config.AuthentificationResponse;
import com.cogito.config.JwtUtil;
import com.cogito.entities.Client;
import com.cogito.service.CostumUserDetailsService;
import com.cogito.service.ISClient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class JwtAuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtTokenUtil;
	@Autowired
	private CostumUserDetailsService userDetailsService;
	
	@Autowired
	PasswordEncoder encode;
	@Autowired
	ISClient Isc;

	
//	@Autowired
//	PasswordEncoder passwordencoder; 

	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthentificationRequest authenticationRequest) throws Exception {
		/*
		 * String enco=encode.encode("lolo"); System.out.println(enco);
		 */
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());	
	final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
	final String token = jwtTokenUtil.generateToken(userDetails);	
	return ResponseEntity.ok(new AuthentificationResponse(token));
	
	}	
	
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			
			throw new Exception("USER_DISABLED", e);
			
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	   @PostMapping(value = "/signUp")
	   public Client addPerson(@RequestBody Client client) {
		   String passwd = client.getPassword();
		   String enPsswd = encode.encode(passwd);
		   client.setPassword(enPsswd);
		   Isc.SignUp(client);
		   return client;
	   }
	
}
