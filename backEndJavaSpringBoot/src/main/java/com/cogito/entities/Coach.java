package com.cogito.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="coachs")
public class Coach extends Person {
	
	private boolean status;
	private String lastSeen;
	private int exp;
	private String certif;
	private String gender;
	private int age ;
	@OneToMany(mappedBy = "coach")
	private List<Client> clients;
	
	public Coach() {
		super();
	}
	
	public boolean isStatus() {
		return status;
	}
	
	public void setStatus(boolean status) {
		this.status = status;
	}
	
	public int getExp() {
		return exp;
	}

	public void setExp(int exp) {
		this.exp = exp;
	}

	public String getCertif() {
		return certif;
	}

	public void setCertif(String certif) {
		this.certif = certif;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public List<Client> getClients() {
		return clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}

	public String getLastSeen() {
		return lastSeen;
	}

	public void setLastSeen(String lastSeen) {
		this.lastSeen = lastSeen;
	}
	
}
