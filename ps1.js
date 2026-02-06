const student = {
    name:"Joe",
    roll_no : 2025179019,
    marks: 90
}

const result = (name , roll_no , mark)=>{
    if(mark > 40){
        console.log("Name :" , name );
        console.log("Roll no :" , roll_no);
        console.log("Student is pass");
    }else{
        console.log("Name :" , name );
        console.log("Roll no :" , roll_no);
        console.log("Student is fail");
    }
}

result(student.name , student.roll_no , student.marks);

