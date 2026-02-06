interface Course {
  ccode: string;
  cname: string;
}

interface Student {
  roll_no: number;
  name: string;
  enrolledCourse: Course[];
}

function enroll(student: Student) {
  let courses = student.enrolledCourse;
  const register = (course: Course): void => {
    let newCourse = course;
    courses.push(newCourse);
    console.log("Registred Course : " , newCourse.cname)
  };

  function dropCourse(courseCode: string): void {
  const index = courses.findIndex(c => c.ccode === courseCode);

  if (index !== -1) {
    courses.splice(index, 1); 
    console.log(`Dropped course: ${courseCode}`);
  }
}


  return {
    register,
    dropCourse
  }
}


const course = {
    ccode : "AA101",
    cname : "TS"
}

const encourse = course as Course;

const student = {
    roll_no : 123,
    name : "Joe",
    enrolledCourse : []
}

const en = enroll(student);

en.register(encourse)
console.log(student.enrolledCourse);

en.dropCourse("AA101")
console.log("After Delete : " , student);


