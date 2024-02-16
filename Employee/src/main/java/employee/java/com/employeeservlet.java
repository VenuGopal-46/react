package employee.java.com;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;


public class employeeservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public employeeservlet() {
        super();
       
    }


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String employeename=request.getParameter("employeename");
		String dateofjoin=request.getParameter("dateofjoin");
		int basicsalary=Integer.parseInt(request.getParameter("basicsal"));
		
		emploDTO user=new emploDTO(employeename,dateofjoin,basicsalary);
		emploDAO emplodao=new emploDAO();
		int exmp=emplodao.insertemplodetials(user);
			if(exmp!=0) {
				
				response.sendRedirect("success.jsp");
			}else {
				response.sendRedirect("demoemployee.jsp");
			}

	}

}
