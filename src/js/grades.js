const gradeForm = document.getElementById('gradeForm');
const gradesTableBody = document.querySelector('#gradesTable tbody');
const studentSelect = document.getElementById('student');
const subjectSelect = document.getElementById('subject');

// Load data from localStorage
const students = JSON.parse(localStorage.getItem('alumnos')) || [];
const subjects = JSON.parse(localStorage.getItem('materias')) || [];
let grades = JSON.parse(localStorage.getItem('grades')) || [];

// Populate dropdowns
function populateDropdowns() {
    // Populate students
    studentSelect.innerHTML = '<option value="" disabled selected>Select a student</option>';
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = `${student.nombre} (Grade: ${student.grado})`;
        studentSelect.appendChild(option);
    });

    // Populate subjects
    subjectSelect.innerHTML = '<option value="" disabled selected>Select a subject</option>';
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.id;
        option.textContent = `${subject.materia} (Code: ${subject.codigo})`;
        subjectSelect.appendChild(option);
    });
}

// Render grades table
function renderGrades() {
    gradesTableBody.innerHTML = '';

    grades.forEach((grade, index) => {
        const student = students.find(s => s.id === grade.studentId)?.nombre || 'Unknown';
        const subject = subjects.find(s => s.id === grade.subjectId)?.materia || 'Unknown';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student}</td>
            <td>${subject}</td>
            <td>${grade.grade}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editGrade(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteGrade(${index})">Delete</button>
            </td>
        `;
        gradesTableBody.appendChild(row);
    });
}

// Add or update grade
function addOrUpdateGrade(e) {
    e.preventDefault();

    const studentId = parseInt(studentSelect.value);
    const subjectId = parseInt(subjectSelect.value);
    const gradeValue = parseInt(document.getElementById('grade').value);

    if (!studentId || !subjectId || isNaN(gradeValue)) {
        return alert('Please fill out all fields.');
    }

    const existingIndex = grades.findIndex(g => g.studentId === studentId && g.subjectId === subjectId);
    if (existingIndex !== -1) {
        grades[existingIndex].grade = gradeValue;
    } else {
        grades.push({ studentId, subjectId, grade: gradeValue });
    }

    localStorage.setItem('grades', JSON.stringify(grades));
    renderGrades();
    gradeForm.reset();
}

// Delete grade
function deleteGrade(index) {
    grades.splice(index, 1);
    localStorage.setItem('grades', JSON.stringify(grades));
    renderGrades();
}

// Edit grade
function editGrade(index) {
    const grade = grades[index];
    studentSelect.value = grade.studentId;
    subjectSelect.value = grade.subjectId;
    document.getElementById('grade').value = grade.grade;
}

// Initialize
gradeForm.addEventListener('submit', addOrUpdateGrade);
populateDropdowns();
renderGrades();
