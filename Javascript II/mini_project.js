let students = [
    { name: "Amanuel Zelalem", age: 20, id: "UGR/2723/15", year: 2, department: "Med", college: "Sefere Selam", cgpa: 3.4 },
    { name: "Marta Tesfaye", age: 21, id: "UGR/2771/15", year: 3, department: "Computer Science", college: "4kilo", cgpa: 3.6 },
    { name: "Kaleab Kassa", age: 22, id: "UGR/2772/15", year: 4, department: "Civil Engineering", college: "AAiT", cgpa: 3.2 },
    { name: "Lidia Alemu", age: 23, id: "UGR/2773/15", year: 1, department: "Mechanical Engineering", college: "AAiT", cgpa: 3.8 },
    { name: "Bereket Berhanu", age: 24, id: "UGR/2774/15", year: 2, department: "COTM", college: "EiABC", cgpa: 3.5 },
    { name: "Hana Gebre", age: 20, id: "UGR/2775/15", year: 3, department: "Economics", college: "Commerce", cgpa: 3.7 },
    { name: "Elias Alemayehu", age: 21, id: "UGR/2776/15", year: 4, department: "Law", college: "6 kilo", cgpa: 3.1 },
    { name: "Netsanet Hailu", age: 22, id: "UGR/2777/15", year: 1, department: "Math", college: "4 kilo", cgpa: 3.9 },
    { name: "Yohannes Desta", age: 23, id: "UGR/2778/15", year: 2, department: "Architecture", college: "EiABC", cgpa: 3.3 },
    { name: "Melat Mulugeta", age: 24, id: "UGR/2779/15", year: 3, department: "Computer Science", college: "4 kilo", cgpa: 3.6 },
    { name: "Samuel Gebre", age: 20, id: "UGR/2780/15", year: 4, department: "Music", college: "Yared", cgpa: 3.2 },
    { name: "Hirut Bekele", age: 21, id: "UGR/2781/15", year: 1, department: "Painting", college: "Art", cgpa: 3.8 },
    { name: "Tamrat Abebe", age: 22, id: "UGR/2782/15", year: 2, department: "Architecture", college: "EiABC", cgpa: 3.5 },
    { name: "Rahel Assefa", age: 23, id: "UGR/2783/15", year: 3, department: "Electrical Engineering", college: "AAiT", cgpa: 3.7 },
    { name: "Yared Bekele", age: 24, id: "UGR/2784/15", year: 4, department: "Chemical Engineering", college: "AAiT", cgpa: 3.1 },
  ];
  
  function addStudent(name, age, id, year, department, college, cgpa) {
    students.push({ name, age, id, year, department, college, cgpa });
  }
  
  function listStudents() {
    return students;
  }
  
  function findStudent(id) {
    return students.find(student => student.id === id);
  }
  
  function updateStudent(id, newName, newAge, newYear, newDepartment, newCollege, newCgpa) {
    const student = findStudent(id);
    if (student) {
      student.name = newName || student.name;
      student.age = newAge || student.age;
      student.year = newYear || student.year;
      student.department = newDepartment || student.department;
      student.college = newCollege || student.college;
      student.cgpa = newCgpa || student.cgpa;
      return true;
    }
    return false;
  }
  
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
      return true;
    }
    return false;
  }
  
//   addStudent("Abebe Kebede", 20, "UGR/2765/15", 1, "Electrical", "AAiT", 3.5);
//   console.log(listStudents());
//   console.log(findStudent("UGR/2771/15"));
//   updateStudent("UGR/2785/15", "Updated Student", 20, 2, "IT", "AAIT", 3.7);
//   console.log(listStudents());
//   deleteStudent("UGR/2723/15");
//   console.log(listStudents());
  