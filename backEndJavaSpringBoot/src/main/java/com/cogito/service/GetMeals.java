package com.cogito.service;

import java.io.IOException;
import java.util.ArrayList;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
@Service
public class GetMeals implements IGetMeals {
	
	public static void main(String[] args) throws IOException {
		GetMeals gt = new GetMeals();
		String resp = gt.getMealsFromApi("Breakfast", 0, 3, "low-fat");
		System.out.println(resp);
		System.out.println(gt.makeTemplateFromJson(resp));
	}
	
	public String getMealsFromApi(String q , int from , int to ,String health) throws IOException {
		String url = "https://edamam-recipe-search.p.rapidapi.com/search?q=" + q +"&from=" + from + "&to=" + to +"&Health="+ health;
		OkHttpClient client = new OkHttpClient().newBuilder()
				  .build();
				Request request = new Request.Builder()
				  .url(url)
				  .method("GET", null)
				  .addHeader("Content-Type", "application/json")
				  .addHeader("x-rapidapi-host", "edamam-recipe-search.p.rapidapi.com")
				  .addHeader("x-rapidapi-key", "826a43f837msh3181969a9e6013fp120185jsn5740669e85e3")
				  .build();
				Response response = client.newCall(request).execute();
				return response.body().string();
	}

	public ArrayList<Object> makeTemplateFromJson(String jsonData){
		ArrayList<Object> ldata = new ArrayList<Object>();
		JSONObject obj = new JSONObject(jsonData);
		for(int i = 0 ; i<=2;i++) {
			Object image = obj.getJSONArray("hits").getJSONObject(i).getJSONObject("recipe").get("image");
			ldata.add(image);
		}
		for(int i = 0 ; i<=2;i++) {
			Object image = obj.getJSONArray("hits").getJSONObject(i).getJSONObject("recipe").get("healthLabels");
			ldata.add(image);
		}
		for(int i = 0 ; i<=2;i++) {
			Object image = obj.getJSONArray("hits").getJSONObject(i).getJSONObject("recipe").get("ingredientLines");
			ldata.add(image);
		}
		for(int i = 0 ; i<=2;i++) {
			Object image = obj.getJSONArray("hits").getJSONObject(i).getJSONObject("recipe").get("calories");
			ldata.add(image);
		}
		for(int i = 0 ; i<=2;i++) {
			Object image = obj.getJSONArray("hits").getJSONObject(i).getJSONObject("recipe").getJSONObject("totalDaily").get("ENERC_KCAL");
			ldata.add(image);
		}
		for(int i = 0 ; i<=2;i++) {
			Object image = obj.getJSONArray("hits").getJSONObject(i).getJSONObject("recipe").getJSONObject("totalDaily").get("FAT");
			ldata.add(image);
		}
		//Object images = obj2.getJSONObject("recipe");
		return ldata;
	}


}
