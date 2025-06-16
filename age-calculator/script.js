document.getElementById('age-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10) - 1;
    const year = parseInt(document.getElementById('year').value, 10);

    const birthDate = new Date(year, month, day);
    const today = new Date();
    
    if (isNaN(birthDate.getTime()) || birthDate > today) {
        alert("Please enter a valid past date.");
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate(); 
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
});
