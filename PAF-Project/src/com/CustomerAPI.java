package com;
import model.Customer;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/CustomerAPI")
public class CustomerAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	 Customer CustomerObj = new Customer(); 

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String output = CustomerObj.insertCustomer(request.getParameter("cusAccount"), 
				 request.getParameter("cusName"), 
				request.getParameter("cusEmail"), 
				request.getParameter("cusAddress"),
		        request.getParameter("cusCity"),
		        request.getParameter("cusMobile"),
		        request.getParameter("regDate")); 
				response.getWriter().write(output); 
	}

	// Convert request parameters to a Map
	private static Map<String, String> getParasMap(HttpServletRequest request) 
	{ 
	 Map<String, String> map = new HashMap<String, String>(); 
	try
	 { 
	 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
	 String queryString = scanner.hasNext() ? 
	 scanner.useDelimiter("\\A").next() : ""; 
	 scanner.close(); 
	 String[] params = queryString.split("&"); 
	 for (String param : params) 
	 { 

	 String[] p = param.split("="); 
	 map.put(p[0], p[1]); 
	 } 
	 } 
	catch (Exception e) 
	 { 
	 } 
	return map; 
	}
	
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request); 
		 String output = CustomerObj.updateCustomer(paras.get("hidItemIDSave").toString(), 
		 paras.get("cusAccount").toString(), 
		paras.get("cusName").toString(), 
		paras.get("cusEmail").toString(), 
		paras.get("cusAddress").toString(),
		paras.get("cusCity").toString(),
		paras.get("cusMobile").toString(),
		paras.get("regDate").toString()); 
		response.getWriter().write(output); 
	}


	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<?, ?> paras = getParasMap(request); 
		 String output = CustomerObj.deleteCustomer(paras.get("cusID").toString()); 
		response.getWriter().write(output); 
	}

}
