import React, { useRef, useState } from 'react'

function Employee() {
    const employee = [
        { empId: 100, empName: "Luke", empDesg: "Developer", empSal: 50000 },
        { empId: 101, empName: "Viz", empDesg: "Tester", empSal: 40000 },
        { empId: 102, empName: "Elisa", empDesg: "HR", empSal: 45000 },
        { empId: 103, empName: "Liasha", empDesg: "Developer", empSal: 50000 },
    ]

    const [name, setName] = useState("")
    console.log(name);

    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);

    }
    return (
        <div>
            {/* Uncontrolled */}

            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder='Enter your username' ref={nameRef}/>
                <button type='submit'>Submit</button>
            </form>

            {/* Controlled */}
            <input type="text" placeholder='Enter your username' onChange={e => setName(e.target.value)} />

            {/* Conditional rendering */}
            {name ? <h1>Username: {name}</h1> : <p>Please provide username</p>}
            {
                employee.map(item => (
                    <div key={item.empId}>
                        <p>Employee Id: {item.empId}</p>
                        <p>Employee Name: {item.empName}</p>
                        <p>Employee Designation: {item.empDesg}</p>
                        <p>Employee Salary: {item.empSal}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Employee


