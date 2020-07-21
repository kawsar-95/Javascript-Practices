// JavaScript CheckGrade
var students = [['David', 80], ['james', 77], ['Larry', 88], ['green', 95], ['Thomas', 68]];

var averageMarks = 0;

for (var i=0; i < students.length; i++) {
        averageMarks += students[i][1];
        var avg = (averageMarks/students.length);
}

console.log("Average grade: " + (averageMarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}