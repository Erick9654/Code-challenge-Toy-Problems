// Create a function to take in marks and output grade
function calculateGrade(marks) {
    let grade;
    // use conditional statement
    if (marks > 0 && marks < 100) {
        if (marks > 79) {
            grade = "A";
        } else if (marks > 59 && marks < 80) {
            grade = "B";
        } else if (marks > 49 && marks < 60) {
            grade = "C";
        } else if (marks > 39 && marks < 50) {
            grade = "D";
        } else {
            grade = "E";
        }
        console.log("Grade: " + grade);
    } else {
        console.log("Invalid input!");
    }
}

// Asks the user to input student marks
let marksInput = prompt("Enter student marks (between 0 and 100):");

// Converts the input to a number
let marks = parseFloat(marksInput);

// Tells the function to return grade
calculateGrade(marks);
