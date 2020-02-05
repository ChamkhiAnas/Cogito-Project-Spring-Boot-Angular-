package com.cogito.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class SendMail implements ISendMail {

	    @Autowired
	    private JavaMailSender javaMailSender;

	    public void sendEmail(String email , String subject, String message) {

	        SimpleMailMessage msg = new SimpleMailMessage();
	        msg.setTo(email);

	        msg.setSubject(subject);
	        msg.setText(message);

	        javaMailSender.send(msg);

	    }

	    public void sendEmailWithAttachment(String email , String subject, String html) {

	        MimeMessage msg = javaMailSender.createMimeMessage();
	        MimeMessageHelper helper = null;
			try {
				helper = new MimeMessageHelper(msg, true);
			} catch (MessagingException e1) {
				e1.printStackTrace();
			}
	        try {
				helper.setTo(email);
			} catch (MessagingException e1) {
				e1.printStackTrace();
			}
	        try {
				helper.setSubject(subject);
			} catch (MessagingException e) {
				e.printStackTrace();
			}
	        try {
				helper.setText(html, true);
			} catch (MessagingException e) {
				e.printStackTrace();
			}
	        //helper.addAttachment("my_photo.png", new ClassPathResource("angular.png"));
	        javaMailSender.send(msg);

	    }
	}



