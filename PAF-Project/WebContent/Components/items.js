$(document).ready(function() 
{ 
if ($("#alertSuccess").text().trim() == "") 
 { 
 $("#alertSuccess").hide(); 
 } 
 $("#alertError").hide(); 
}); 
// SAVE 
function onItemSaveComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 } 
 
 $("#hidItemIDSave").val(""); 
 $("#formItem")[0].reset(); 
}

$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateItemForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "CustomerAPI", 
 type : type, 
 data : $("#formItem").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onItemSaveComplete(response.responseText, status); 
 } 
 }); 
}); 
// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
 $("#hidItemIDSave").val($(this).data("itemid")); 

 $("#cusAccount").val($(this).closest("tr").find('td:eq(0)').text()); 
 $("#cusName").val($(this).closest("tr").find('td:eq(1)').text()); 
 $("#cusEmail").val($(this).closest("tr").find('td:eq(2)').text()); 
 $("#cusAddress").val($(this).closest("tr").find('td:eq(3)').text()); 
 $("#cusCity").val($(this).closest("tr").find('td:eq(4)').text()); 
 $("#cusMobile").val($(this).closest("tr").find('td:eq(5)').text()); 
 $("#regDate").val($(this).closest("tr").find('td:eq(6)').text()); 
}); 

$(document).on("click", ".btnRemove", function(event) 
{ 
 $.ajax( 
 { 
 url : "CustomerAPI", 
 type : "DELETE", 
 data : "cusID=" + $(this).data("itemid"),
 dataType : "text", 
 complete : function(response, status) 
 { 
 onItemDeleteComplete(response.responseText, status); 
 } 
 }); 
});
function onItemDeleteComplete(response, status) 
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divItemsGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validateItemForm() 
{ 
//cusAccount
if ($("#cusAccount").val().trim() == "") 
 { 
 return "Insert Customer Account."; 
 } 
// Total Hours
if ($("#cusName").val().trim() == "") 
 { 
 return "Insert customer Name."; 
 } 
 
// From Time
if ($("#cusEmail").val().trim() == "") 
 { 
 return "Insert Customer Email."; 
 } 
 
// To Time
if ($("#cusAddress").val().trim() == "") 
 { 
 return "Insert Customer Address."; 
 } 
if ($("#cusCity").val().trim() == "") 
 { 
 return "Insert Customer City."; 
 } 
// Sub-Staions
if ($("#cusMobile").val().trim() == "") 
 { 
 return "Insert Customer Mobile."; 
 } 
 
// Province
if ($("#regDate").val().trim() == "") 
 { 
 return "Insert reg Date."; 
 } 
 
return true; 
}