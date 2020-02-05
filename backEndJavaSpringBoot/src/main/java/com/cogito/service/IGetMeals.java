package com.cogito.service;

import java.io.IOException;
import java.util.ArrayList;

public interface IGetMeals {
	public String getMealsFromApi(String q , int from , int to ,String health) throws IOException;
	public ArrayList<Object> makeTemplateFromJson(String jsonData);
}
