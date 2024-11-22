
const gradeForm = document.getElementById('gradeForm');
const gradesTableBody = document.querySelector('#gradesTable tbody');


let grades = JSON.parse(localStorage.getItem('grades')) || [];


function renderGrades() {
    gradesTableBody.innerHTML = '';

    grades.forEach((grade, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${grade.subject}</td>
            <td>${grade.grade}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editGrade(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteGrade(${index})">Delete</button>
            </td>
        `;
        gradesTableBody.appendChild(row);
    });
}


function addOrUpdateGrade(e) {
    e.preventDefault();

    const subject = document.getElementById('subject').value.trim();
    const grade = document.getElementById('grade').value.trim();

    if (!subject || !grade) return alert('Please fill out all fields.');

    
    const existingIndex = grades.findIndex(item => item.subject === subject);
    if (existingIndex !== -1) {
        grades[existingIndex].grade = grade; 
    } else {
        grades.push({ subject, grade }); 
    }

    
    localStorage.setItem('grades', JSON.stringify(grades));
    renderGrades();

    
    gradeForm.reset();
}


function deleteGrade(index) {
    grades.splice(index, 1);
    localStorage.setItem('grades', JSON.stringify(grades));
    renderGrades();
}


function editGrade(index) {
    const grade = grades[index];
    document.getElementById('subject').value = grade.subject;
    document.getElementById('grade').value = grade.grade;
}


gradeForm.addEventListener('submit', addOrUpdateGrade);


renderGrades();
