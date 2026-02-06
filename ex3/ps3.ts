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
    courses = courses.filter((c) => c.ccode !== courseCode);
    console.log(`Dropped course: ${courseCode}`);
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

