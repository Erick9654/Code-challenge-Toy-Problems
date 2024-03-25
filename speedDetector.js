// Create a function to take in speed and calculate points
function calculateDeductPoints(speed) {
//    Define constants
    const speedLimit = 70;
    const kmPerDeductPoint = 5;
    let deductPoints = 0;

    if (speed > speedLimit) {
        // Calculate deduction points
        deductPoints = Math.floor((speed - speedLimit) / kmPerDeductPoint);
    }

    // We Output the result here
    if (deductPoints === 0) {
        console.log("Ok");
    } else if (deductPoints <= 12) {
        console.log("Points: " + deductPoints);
    } else {
        console.log("License suspended");
    }
}

// asks the user to input the speed of the car and prints results
const speed = prompt("Enter the speed of the car:");
calculateDeductPoints(speed);
