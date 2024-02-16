package employee.java.com;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class emploDAO {
	
	
	
	public emploDTO getDetails(int id) {
		emploDTO user=new emploDTO();
		try {
		
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/demo","root","root");
			String str="select * from Employee where emplid=" +id ;
			PreparedStatement ps=con.prepareStatement(str);
			ResultSet rs=ps.executeQuery();
			if(rs.next()){
				user.setEmploid(rs.getInt(1));
				user.setEmployeename(rs.getString(2));
				user.setDateofjoin(rs.getString(3));
				user.setBasicsalary(rs.getInt(4));
			}
			
				
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return user;
		
	}
	
	public int insertemplodetials(emploDTO user) {
		int Result=0;
		try { 
				Class.forName("com.mysql.jdbc.Driver");
				Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/demo","root","root");
				String str="INSERT INTO employee(EmpName,dateofjoin,BasicSal)VALUES(?,?,?)";
				PreparedStatement ps=con.prepareStatement(str);
				ps.setString(1, user.getEmployeename());
				ps.setString(2, user.getDateofjoin());
				ps.setInt(3, user.getBasicsalary());
				Result=ps.executeUpdate();
				
		
	}catch(Exception ex) {
		ex.printStackTrace();
	}
		return Result;

}
}
