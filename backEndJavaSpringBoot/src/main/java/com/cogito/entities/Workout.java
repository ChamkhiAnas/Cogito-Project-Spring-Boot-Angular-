package com.cogito.entities;

public class Workout {
	
	public Workout() {
		super();
	}
	private int id;
	private String mTitle; // movement Title
	private int mNumber; // movement number
	private String mDescr; // movement Description
	private String img;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getmTitle() {
		return mTitle;
	}
	public void setmTitle(String mTitle) {
		this.mTitle = mTitle;
	}
	public int getmNumber() {
		return mNumber;
	}
	public void setmNumber(int mNumber) {
		this.mNumber = mNumber;
	}
	public String getmDescr() {
		return mDescr;
	}
	public void setmDescr(String mDescr) {
		this.mDescr = mDescr;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	
}
