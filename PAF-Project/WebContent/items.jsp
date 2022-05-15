<%@ page import="model.Customer" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.js"></script>
<script src="Components/items.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1>Electro_Grid Customer Details </h1>
<form id="formItem" name="formItem">
 Customer Account Number : 
 <input id="cusAccount" name="cusAccount" type="text" 
 class="form-control form-control-sm">
 <br> Customer Name: 
 <input id="cusName" name="cusName" type="text" 
 class="form-control form-control-sm">
 <br> Customer Email: 
 <input id="cusEmail" name="cusEmail" type="text" 
 class="form-control form-control-sm">
 <br> Customer Address: 
 <input id="cusAddress" name="cusAddress" type="text" 
 class="form-control form-control-sm">
 <br> Customer City: 
 <input id="cusCity" name="cusCity" type="text" 
 class="form-control form-control-sm">
 <br> Customer Mobile: 
 <input id="cusMobile" name="cusMobile" type="text" 
 class="form-control form-control-sm">
<br> Registered Date: 
 <input id="regDate" name="regDate" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidItemIDSave" 
 name="hidItemIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divItemsGrid">
 <%
 Customer scheduleObj = new Customer(); 
	 out.print(scheduleObj.readCustomer()); 
 %>
</div>
</div> </div> </div> 
</body>
</html>
