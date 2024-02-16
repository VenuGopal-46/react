package employee.java.com;

public class emploDTO {
	
	private int emploid;
	private String employeename;
	private String dateofjoin;
	private int basicsalary;
	
	
	public emploDTO(String employeename, String dateofjoin, int  basicsalary ) {
		super();
		 this.employeename=employeename;
		 this.dateofjoin=dateofjoin;
		 this.basicsalary=basicsalary;
	}
	
	public int getEmploid() {
		return emploid;
	}
	
	public void setEmploid(int emploid) {
		this.emploid = emploid;
	}
	
	public emploDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getEmployeename() {
		return employeename;
	}
	
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	
	public String getDateofjoin() {
		return dateofjoin;
	}
	
	public void setDateofjoin(String dateofjoin) {
		this.dateofjoin = dateofjoin;
	}
	
	public int getBasicsalary() {
		return basicsalary;
	}
	
	public void setBasicsalary(int basicsalary) {
		this.basicsalary = basicsalary;
	}
	
}
