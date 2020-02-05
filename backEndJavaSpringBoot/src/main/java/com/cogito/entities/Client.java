package com.cogito.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="clients")
public class Client extends Person{
	
	private int age;
	private String lastSeen;
	private boolean status;
	private String gender;
	private int weight;
	private int height;
	private int bodyFat;
	private int dWeight; // Desired Weight
	@ManyToOne()
	@JoinColumn(name="coachs_id")
	private Coach coach;
	
	
	public Client() {
		super();
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getdWeight() {
		return dWeight;
	}

	public void setdWeight(int dWeight) {
		this.dWeight = dWeight;
	}

	public int getBodyFat() {
		return bodyFat;
	}

	public void setBodyFat(int bodyFat) {
		this.bodyFat = bodyFat;
	}

	public Coach getCoach() {
		return coach;
	}

	public void setCoach(Coach coach) {
		this.coach = coach;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getLastSeen() {
		return lastSeen;
	}

	public void setLastSeen(String lastSeen) {
		this.lastSeen = lastSeen;
	}
	
	
}
