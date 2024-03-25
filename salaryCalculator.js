// Create a function to calculate basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    // Tax calculation
    let tax;
    if (basicSalary <= 24000) {
        tax = basicSalary * 0.1;
    } else if (basicSalary <= 32000) {
        tax = 2400 + (basicSalary - 24000) * 0.25;
    } else if (basicSalary <= 400000) {
        tax = 5200 + (basicSalary - 32000) * 0.3;
    } else if (basicSalary <= 700000) {
        tax = 116200 + (basicSalary - 400000) * 0.325;
    } else {
        tax = 229200 + (basicSalary - 700000) * 0.35;
    }

    // NHIF Deduction calculation
    let nhifDeductions;
    if (basicSalary <= 6000) {
        nhifDeductions = 150;
    } else if (basicSalary <= 20000) {
        nhifDeductions = 700;
    } else if (basicSalary <= 70000) {
        nhifDeductions = 1200;
    } else {
        nhifDeductions = 1700;
    }

    // NSSF Deduction with 6% of basic salary)

    const nssfDeductions = basicSalary * 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Output results
    console.log("Gross Salary: " + grossSalary);
    console.log("Tax: " + tax);
    console.log("NHIF Deductions: " + nhifDeductions);
    console.log("NSSF Deductions: " + nssfDeductions);
    console.log("Net Salary: " + netSalary);
}

// propmts user to input basic salary and benefits
const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));
calculateNetSalary(basicSalary, benefits);
