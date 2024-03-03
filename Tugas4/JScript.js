// Java script.js
document.getElementById('submitBtn').addEventListener('click', function() {
  var nama = document.getElementById('nama').value;
  var jumlah = parseInt(document.getElementById('jumlah').value);

  if (nama.trim() === '') {
      alert('Nama tidak boleh kosong!');
      return;
  }

  if (isNaN(jumlah) || jumlah <= 0) {
      alert('Jumlah Pilihan harus angka dan lebih dari 0!');
      return;
  }

  var inputPilihanHtml = '';
  for (var i = 1; i <= jumlah; i++) {
      inputPilihanHtml += '<label for="pilihan' + i + '">Pilihan ' + i + ':</label>';
      inputPilihanHtml += '<input type="text" id="pilihan' + i + '" required><br>';
  }
  inputPilihanHtml += '<button type="button" id="submitPilihanBtn">OK</button>'; // Menambahkan tombol OK di akhir
  document.getElementById('inputPilihan').innerHTML = inputPilihanHtml;
  document.getElementById('inputPilihan').style.display = 'block';

  document.getElementById('submitPilihanBtn').addEventListener('click', function() { // Menambahkan event listener untuk tombol OK baru
      var radioPilihanHtml = '';
      for (var i = 1; i <= jumlah; i++) {
          var teksPilihan = document.getElementById('pilihan' + i).value;
          radioPilihanHtml += '<div class="radio-item">';
          radioPilihanHtml += '<input type="radio" id="pilihanRadio' + i + '" name="pilihanRadio" value="' + teksPilihan + '">';
          radioPilihanHtml += '<label for="pilihanRadio' + i + '">' + teksPilihan + '</label>';
          radioPilihanHtml += '</div>';
      }
      radioPilihanHtml += '<button type="button" id="submitRadioBtn">OK</button>';
      document.getElementById('radioPilihan').innerHTML = radioPilihanHtml;
      document.getElementById('radioPilihan').style.display = 'block';

      document.getElementById('submitRadioBtn').addEventListener('click', function() { // Menambahkan event listener untuk tombol OK baru
          var pilihanRadio = document.querySelector('input[name="pilihanRadio"]:checked');
          if (pilihanRadio) {
              var nama = document.getElementById('nama').value;
              var jumlah = document.getElementById('jumlah').value;
              var teksPilihan = pilihanRadio.value;
              var hasil = 'Hallo, nama saya ' + nama + ', saya mempunyai sejumlah ' + jumlah + ' pilihan yaitu ';
              var pilihanLabels = document.querySelectorAll('input[name="pilihanRadio"]');
              for (var i = 0; i < pilihanLabels.length; i++) {
                  hasil += pilihanLabels[i].value;
                  if (i < pilihanLabels.length - 1) {
                      hasil += ', ';
                  }
              }
              hasil += ', dan saya memilih ' + teksPilihan;
              document.getElementById('hasil').innerText = hasil;
              document.getElementById('hasil').style.display = 'block';
          } else {
              alert('Silakan pilih salah satu pilihan!');
          }
      });
  });
});