const employees = [
    {id: 1, name: 'John Doe', age: 30, department:'IT', salary: 50000, specialization: 'JavaScript'},
    {id: 2, name: 'Alice Smith', age: 28, department:'HR', salary: 45000, specialization: 'Python'},
    {id: 3, name: 'Bob Johnson', age: 35, department:'Finance', salary:60000, specialization: 'Java'},
    {id: 4, name: 'J Wong', age: 25, department:'UI', salary: 50000, spcialization: 'JavaScript'},
];

// function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

// function to calculate employee's total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((accum, employees) => accum + employees.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}   

// function to display employees details based on department such as the HR department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
}

// function to display employees' details based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeeDetails').innerHTML=`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} -  $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID.';
    }
}

// function to display employees' details based on specialization
function findBySpecJS() {
    const foundEmployee = employees.find(employee => employee.specialization === 'JavaScript');
    // const foundEmployeeDisplay = foundEmployee.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.specialization}</p>`).join('');
    if (foundEmployee) {
        // document.getElementById('employeeDetails').innerHTML = foundEmployeeDisplay;
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} -  $${foundEmployee.specialization}</p>`
    } else {
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this specialization';
    }
}

