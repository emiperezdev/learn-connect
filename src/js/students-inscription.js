const inscriptionForm = document.getElementById('inscriptionForm');
const inscriptionsTable = document.getElementById('inscriptionsTable');
const studentSelect = document.getElementById('student');
const subjectSelect = document.getElementById('subject');

let inscriptions = JSON.parse(localStorage.getItem('inscriptions')) || [];
const students = JSON.parse(localStorage.getItem('alumnos')) || [];
const subjects = JSON.parse(localStorage.getItem('materias')) || [];

function populateSelectOptions() {
  studentSelect.innerHTML = students
    .map(student => `<option value="${student.id}">${student.nombre}</option>`)
    .join('');

  subjectSelect.innerHTML = subjects
    .map(subject => `<option value="${subject.id}">${subject.materia}</option>`)
    .join('');
}

function renderInscriptions() {
  inscriptionsTable.innerHTML = inscriptions
    .map((inscription, index) => {
      const student = students.find(s => s.id == inscription.studentId);
      const subject = subjects.find(s => s.id == inscription.subjectId);

      return `
        <tr>
          <td>${student ? student.nombre : 'Alumno no encontrado'}</td>
          <td>${subject ? subject.materia : 'Materia no encontrada'}</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="removeInscription(${index})">Eliminar</button>
          </td>
        </tr>
      `;
    })
    .join('');
}

function addInscription(e) {
  e.preventDefault();

  const studentId = studentSelect.value;
  const subjectId = subjectSelect.value;

  if (!inscriptions.some(i => i.studentId == studentId && i.subjectId == subjectId)) {
    inscriptions.push({ studentId, subjectId });
    localStorage.setItem('inscriptions', JSON.stringify(inscriptions));
    renderInscriptions();
  } else {
    alert('El alumno ya está inscrito en esta materia.');
  }
}

function removeInscription(index) {
  inscriptions.splice(index, 1);
  localStorage.setItem('inscriptions', JSON.stringify(inscriptions));
  renderInscriptions();
}

inscriptionForm.addEventListener('submit', addInscription);
document.addEventListener('DOMContentLoaded', () => {
  populateSelectOptions();
  renderInscriptions();
});
