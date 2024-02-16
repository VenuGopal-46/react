<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>home page</title>
</head>
<body>
<form action="http://localhost:8082/Employee/employee" method="post">
<table>
<tr><td> <label> Employee name:</label><input type="text" name="employeename" ></td></tr>
<tr><td> <label>date of join:</label><input type="date" name="dateofjoin"></td></tr>
<tr><td> <label>Basic Salary:</label><input type="text" name="basicsal"></td></tr>
</table>
<button type="submit">submit</button>
</form>
</body>
</html>