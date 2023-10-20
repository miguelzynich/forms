function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById('myForm');

  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  const checkbox = form.checkbox.checked ? 'Selecionado' : 'Não selecionado';
  const radio = form.querySelector('input[name="jornada"]:checked') ? form.querySelector('input[name="jornada"]:checked').value : 'Nenhum selecionado';
  const select = form.select.value;

  const table = document.getElementById('responses');
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const ageCell = row.insertCell(2);
  const checkboxCell = row.insertCell(3);
  const radioCell = row.insertCell(4);
  const selectCell = row.insertCell(5);

  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  ageCell.innerHTML = age;
  checkboxCell.innerHTML = checkbox;
  radioCell.innerHTML = radio;
  selectCell.innerHTML = select;

  showLoading();
}

function showLoading() {
  const loading = document.getElementById('loading');
  loading.style.display = 'block';
  setTimeout(hideLoading, 2000); // Tempo de espera simulado de 2 segundos
}

function hideLoading() {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
}
