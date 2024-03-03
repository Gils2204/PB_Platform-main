function showOptions() {
  const quantity = document.getElementById('quantity').value;
  const optionsSection = document.getElementById('optionsSection');

  optionsSection.innerHTML = ''; // Clear previous content

  for (let i = 1; i <= quantity; i++) {
      const label = document.createElement('label');
      label.innerHTML = `Pilihan ${i} :`;

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = `Teks Pilihan ${i}`;

      optionsSection.appendChild(label);
      optionsSection.appendChild(input);
  }

  optionsSection.style.display = 'block';
}

function showSelection() {
  const selectionSection = document.getElementById('selectionSection');
  const optionsSection = document.getElementById('optionsSection');
  const quantity = document.getElementById('quantity').value;

  // Clear previous content
  selectionSection.innerHTML = '';

  for (let i = 1; i <= quantity; i++) {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'option';
      radio.value = `Teks Pilihan ${i}`;

      const label = document.createElement('label');
      label.innerHTML = `⊙ ${radio.value}`;

      selectionSection.appendChild(radio);
      selectionSection.appendChild(label);
      selectionSection.appendChild(document.createElement('br'));
  }

  optionsSection.style.display = 'none';
  selectionSection.style.display = 'block';
}

function showResult() {
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;
  const selection = document.querySelector('input[name="option"]:checked').value;

  alert(`Hallo, nama saya ${name}, saya mempunyai sejumlah ${quantity} pilihan yaitu ${getOptionsText()}, dan saya memilih ${selection}`);
}

function getOptionsText() {
  const quantity = document.getElementById('quantity').value;
  let optionsText = '';

  for (let i = 1; i <= quantity; i++) {
      const option = document.querySelector(`#optionsSection input:nth-child(${i * 2})`).value;
      optionsText += `${option}, `;
  }

  return optionsText.slice(0, -2); // Remove the trailing comma and space
}
