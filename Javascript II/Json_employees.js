const data = [
    {
        "id": 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "department": "Development"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "position": "Project Manager",
        "department": "Management"
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "position": "UX Designer",
        "department": "Design"
    }
];

function getNames(data) {
    let employees;
    if (typeof data === 'string') {
        employees = JSON.parse(data);
    } else {
        employees = data;
    }

    const names = [];
    for (let i = 0; i < employees.length; i++) {
        names.push(employees[i].name);
    }

    return names;
}

console.log(getNames(data));  
