package com.cogito.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class ApiSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	UserDetailsService userDetailService;

	@Autowired
	private RequestFilter jwtrequestfilter;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.userDetailsService(userDetailService);
	}
	
	
	
	@Bean public PasswordEncoder passwordEncoder() { 
		return new BCryptPasswordEncoder(); 
	}
	 
	
	@Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class)
		.csrf().disable().cors().disable()
		.authorizeRequests().antMatchers(HttpMethod.POST,"/authenticate","/signUp","/sendMail","/pForm").permitAll()
		
		.anyRequest().authenticated()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().addFilterBefore(jwtrequestfilter, UsernamePasswordAuthenticationFilter.class);
		
		
	}
	
	
}
