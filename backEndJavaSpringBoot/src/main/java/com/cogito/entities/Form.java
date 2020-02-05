package com.cogito.entities;


public class Form {
	private Object Survey;

	public Object getSurvey() {
		return Survey;
	}

	public void setSurvey(Object survey) {
		Survey = survey;
	}

	@Override
	public String toString() {
		return "Form [Survey=" + Survey + "]";
	}
}
