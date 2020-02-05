package com.cogito.service;

import javax.mail.MessagingException;

public interface ISendMail {
	
	public void sendEmail(String email , String subject, String message);
	public void sendEmailWithAttachment(String email , String subject, String html) throws MessagingException;
	}
