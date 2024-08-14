// declaring variables
const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];

// add patient function
function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if (name && gender && age && condition) {
        patients.push({name, gender: gender.value, age, condition });
        resetForm();
        generateRport();
    }
}

// generate report
function generateReport(){
    const numPatients = patients.length;
    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Thyroid: 0,
            "High Lood Pressure": 0
        },
        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
    };

    for (const patient of patients) {
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`
    report.innerHTML += `Conditions Breakdown: <br>`;
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}:${conditionsCount[condition]}<br>`
    }

    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
        report.innerHTML += `{gender}<br>`;
        for (const condition in genderConditionsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp; ${condition}:${genderConditionsCount[gender][condition]}`
        }
    }
}

// add event listener to addPatientButton
addPatientButton.addEventListener("click", addPatient);

// search condition function used to search for info on specific health condition
function searhCondition(){
    const input = document.getElementById('condtionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    fetch('health_analysis.json')
        .then(response => response.json())
        .then(data => {
            const condition = data.conditions.symptoms.join(',');
            if (conditon) {
                const prevention = data.condition.prevention.join(',');
                const treatment = condition.treatment;
    
                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc} alt="hjh">`
                
                resultDiv.innerHTML += `<p><strong>Symptoms: </strong>${symptoms}</p>`
                resultDiv.innerHTML += `<p><strong>Prevention</strong>${prevention}</p>`
                resultDiv.innerHTML += `<p><strong>Treatment: </strong>${treatment}</p>`
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.'
        });
}

btnSearch.addEventListener('click', searchCondition);

// resetForm 
function resetForm(){

}

