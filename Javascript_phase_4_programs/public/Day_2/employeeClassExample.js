class Employee {
	constructor (empname, age, gender, deptname, designation) {
		this.empname = empname;
		this.age = age;
		this.gender = gender;
		this.deptname = deptname;
		this.designation = designation;
	}
	
	get employeeEmpname() {
		return this.empname;
	}
	
	set employeeEmpname(x) {
		this.empname = x;
	}
	
	get employeeAge() {
		return this.age;
	}
	
	set employeeAge(x) {
		this.age = x;
	}
	
	get employeeGender() {
		return this.gender;
	}
	
	set employeeGender(x) {
		this.gender = x;
	}
	
	get employeeDeptname() {
		return this.deptname;
	}
	
	set employeeDeptname(x) {
		this.deptname = x;
	}
	
	get employeeDesignation() {
		return this.designation;
	}
	
	set employeeDesignation(x) {
		this.designation = x;
	}
	
	printDetails() {
		console.log(`Employee name: ${this.empname}, age: ${this.age}, gender: ${this.gender}, deptname: ${this.deptname}, designation: ${this.designation}`);
	}
	
	static printDesignationAndName(employees) {
		for (var employee of employees) {
			console.log(`Employee name: ${employee.empname}, designation: ${employee.designation}`);
		}
	}
	
}

const emp1 = new Employee("Raghav", 22, "Male", "IT", "Developer");
const emp2 = new Employee("Kerry", 20, "Female", "HR", "Director");

emp1.printDetails();
emp2.printDetails();

/*console.log(emp1.empname);
console.log(emp1.age);

emp1.employeeEmpname = 'Ross';
emp1.employeeAge = 21;

console.log(emp1.empname);
console.log(emp1.age);*/

Employee.printDesignationAndName([emp1, emp2]);



