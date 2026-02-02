// 1. Create two arrays of student objects
const group1 = [
    { name: 'Sokha', scores: [85, 90, 78] },
    { name: 'Dara', scores: [92, 88, 95] },
    { name: 'Vanna', scores: [78, 82, 80] }
];

const group2 = [
    { name: 'Pisey', scores: [88, 91, 87] },
    { name: 'Kunthea', scores: [95, 93, 98] },
    { name: 'Rithy', scores: [70, 75, 72] }
];

// 2. Use spread operator to combine both groups into one array called allStudents

const allStudents = [...group1, ...group2]
console.log(allStudents)
    

// 3. Use destructuring to extract the first two students into variables 
//    named firstStudent and secondStudent, and put the rest into remainingStudents

const [firstStudent, secondStudent, ...remainingStudents] = allStudents;


// 4. Use map() to create a new array that calculates the average score for each student
//    The result should be an array of objects with format: 
//    { name: 'StudentName', average: averageScore }

const studentsAverage = allStudents.map(student =>{
    const sum = student.scores.reduce((a,b) => a + b, 0);
    const average = sum / student.scores.length;
    
    return{
        name: student.name,
        average :average
    };
});


// 5. Use map() to create a new array that adds a 'grade' property to each student
//    Based on their average:
//    A: >= 90, B: >= 80, C: >= 70, D: >= 60, F: < 60
//    Format: { name: 'StudentName', average: score, grade: 'A' }

const studentsWithGrade = studentsAverage.map(student => {
    let grade;
    if (student.average >= 90) grade ='A';
    else if (student.average >= 80) grade ='B';
    else if (student.average >= 70) grade ='C';
    else if (student.average >= 60) grade ='D';
    else grade ='F';

    return {
        name: student.name,
        average: student.average,
        grade: grade
    };
});


// 6. Explore and use other Higher Order Function beside map(), filter(), and reduce()

const topStudent = studentsWithGrade.find(s => s.grade === 'A');
const hasFailedStudent = studentsWithGrade.some(s=> s.grade === 'F');
