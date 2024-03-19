const config = require('./dbConfig');
const sql = require('mssql');
const xlsx = require('xlsx');
const Employee = require('./employee');

// Function to read Excel file and insert data into the database
const insertEmployeesFromExcel = async (filePath) => {
    try {
        // Load Excel file
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
        const sheet = workbook.Sheets[sheetName];
        
        // Parse Excel data
        const data = xlsx.utils.sheet_to_json(sheet);

        // Insert each row into the database
        for (const row of data) {
            const newEmp = new Employee(row.employee_name, row.department, row.salary);
            await insertEmployee(newEmp); // Assuming insertEmployee function is defined elsewhere
        }
        // console.log("Data inserted successfully!");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
};

//Display the list
const getEmployees = async () => {
    try {
        let pool = await sql.connect(config);
        let employee = pool.request().query("select * from Employee");
        console.log(employee); 
        return employee;
    } catch (error) {
        console.log(error);
    }
}

// //inserts the employee into the list
// const insertEmployee = async (Employee) => {
    
//     try {
//         let pool = await sql.connect(config);
//         let employee = await pool.request().query(`
//             INSERT INTO employees VALUES (${Employee.employee_id}, '${Employee.employee_name}', '${Employee.department}', ${Employee.salary})
//         `); 
//         return employee;
//     } catch (error) {
//         console.log(error);
//     }
// }

const insertEmployee = async (Employee) => {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
            .input('UserName', Employee.UserName)
            .input('LastName', Employee.LastName)
            .input('FirstName', Employee.FirstName)
            .input('MiddleName', Employee.MiddleName)
            .input('Email', Employee.Email)
            .input('Password', Employee.Password)
            .query(`
                INSERT INTO UserAccount ( LastName, FirstName, MiddleName, Email, Password, UserName)
                VALUES ( @LastName, @FirstName, @MiddleName, @Email, @Password, @UserName)
            `); 
        return employee;
    } catch (error) {
        console.log(error);
    }
}


//Update the employee 
const updatedEmp = async (Employee) => {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request().query(`
            UPDATE Employee 
            SET employee_name = '${Employee.employee_name}', 
                department = '${Employee.department}', 
                salary = ${Employee.salary} 
            WHERE employee_id = ${Employee.employee_id}
        `);
        return employee;
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    insertEmployeesFromExcel,
    updatedEmp,
    insertEmployee, 
    getEmployees 
};