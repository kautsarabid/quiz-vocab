// const tombol = document.querySelector('.sidebar');
// const dropDown = document.querySelector('.dropdown');

// tombol.addEventListener('click', (e) => {
//   if (e.target.className == 'judul-level') {
//     e.target.nextElementSibling.style.display = 'block';
//     e.preventDefault();
//   } else if (e.target.className != 'judul-level') {
//     e.target.nextSibling.style.display = 'none';
//     e.preventDefault();
//   }
// });

const btnDropDown = document.querySelectorAll('.judul-level');
const menuDropDown = document.querySelector('.dropdown');
window.onload = () => {
  btnDropDown.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.target.nextElementSibling.classList.toggle('muncul');
    });
  });
};

const buttonSubmit = document.querySelectorAll('button.submit');
const v1 = document.querySelectorAll('#v1');
const v2 = document.querySelectorAll('#v2');
const v3 = document.querySelectorAll('#v3');
const ving = document.querySelectorAll('#ving');
const correct = document.querySelectorAll('span .correct');
const incorrect = document.querySelectorAll('span .incorrect');

for (let i = 0; i < buttonSubmit.length; i++) {
  for (let i = 0; i < correct.length; i++) {
    for (let i = 0; i < incorrect.length; i++) {
      //SOAL PERTAMA(1) CH2
      buttonSubmit[0].addEventListener('click', function () {
        for (let j = 0; j < v1.length; j++) {
          if (v1[0].value == 'regret' || v1[0].value == 'Regret' || v1[0].value == 'REGRET') {
            correct[0].style.display = 'inline';
            incorrect[0].style.display = 'none';
            v1[0].style.backgroundColor = '#44CB6A';
            v1[0].style.border = 'none';
          } else {
            incorrect[0].style.display = 'inline';
            correct[0].style.display = 'none';
            v1[0].style.backgroundColor = '#CB4444';
            v1[0].style.border = 'none';
          }
          for (let j = 0; j < v2.length; j++) {
            if (v2[0].value == 'regretted' || v2[0].value == 'Regretted' || v2[0].value == 'REGRETTED') {
              correct[1].style.display = 'inline';
              incorrect[1].style.display = 'none';
              v2[0].style.backgroundColor = '#44CB6A';
              v2[0].style.border = 'none';
            } else {
              incorrect[1].style.display = 'inline';
              correct[1].style.display = 'none';
              v2[0].style.backgroundColor = '#CB4444';
              v2[0].style.border = 'none';
            }
          }

          for (let j = 0; j < v3.length; j++) {
            if (v3[0].value == 'regretted' || v3[0].value == 'Regretted' || v3[0].value == 'REGRETTED') {
              correct[2].style.display = 'inline';
              incorrect[2].style.display = 'none';
              v3[0].style.backgroundColor = '#44CB6A';
              v3[0].style.border = 'none';
            } else {
              incorrect[2].style.display = 'inline';
              correct[2].style.display = 'none';
              v3[0].style.backgroundColor = '#CB4444';
              v3[0].style.border = 'none';
            }
          }

          for (let j = 0; j < ving.length; j++) {
            if (ving[0].value == 'regretting' || ving[0].value == 'Regretting' || ving[0].value == 'REGRETTING') {
              correct[3].style.display = 'inline';
              incorrect[3].style.display = 'none';
              ving[0].style.backgroundColor = '#44CB6A';
              ving[0].style.border = 'none';
            } else {
              incorrect[3].style.display = 'inline';
              correct[3].style.display = 'none';
              ving[0].style.backgroundColor = '#CB4444';
              ving[0].style.border = 'none';
            }
          }
        }
      });
      //SOAL KEDUA(2) CH2
      buttonSubmit[1].addEventListener('click', function () {
        for (let j = 0; j < v1.length; j++) {
          if (v1[1].value == 'mingle' || v1[1].value == 'Mingle' || v1[1].value == 'MINGLE') {
            correct[4].style.display = 'inline';
            incorrect[4].style.display = 'none';
            v1[1].style.backgroundColor = '#44CB6A';
            v1[1].style.border = 'none';
          } else {
            incorrect[4].style.display = 'inline';
            correct[4].style.display = 'none';
            v1[1].style.backgroundColor = '#CB4444';
            v1[1].style.border = 'none';
          }
          for (let j = 0; j < v2.length; j++) {
            if (v2[1].value == 'mingled' || v2[1].value == 'Mingled' || v2[1].value == 'MINGLED') {
              correct[5].style.display = 'inline';
              incorrect[5].style.display = 'none';
              v2[1].style.backgroundColor = '#44CB6A';
              v2[1].style.border = 'none';
            } else {
              incorrect[5].style.display = 'inline';
              correct[5].style.display = 'none';
              v2[1].style.backgroundColor = '#CB4444';
              v2[1].style.border = 'none';
            }
          }
          for (let j = 0; j < v3.length; j++) {
            if (v3[1].value == 'mingled' || v3[1].value == 'Mingled' || v3[1].value == 'MINGLED') {
              correct[6].style.display = 'inline';
              incorrect[6].style.display = 'none';
              v3[1].style.backgroundColor = '#44CB6A';
              v3[1].style.border = 'none';
            } else {
              incorrect[6].style.display = 'inline';
              correct[6].style.display = 'none';
              v3[1].style.backgroundColor = '#CB4444';
              v3[1].style.border = 'none';
            }
          }
          for (let j = 0; j < ving.length; j++) {
            if (ving[1].value == 'mingling' || ving[1].value == 'Mingling' || ving[1].value == 'MINGLING') {
              correct[7].style.display = 'inline';
              incorrect[7].style.display = 'none';
              ving[1].style.backgroundColor = '#44CB6A';
              ving[1].style.border = 'none';
            } else {
              incorrect[7].style.display = 'inline';
              correct[7].style.display = 'none';
              ving[1].style.backgroundColor = '#CB4444';
              ving[1].style.border = 'none';
            }
          }
        }
      });
      //SOAL KETIGA(3) CH2
      buttonSubmit[2].addEventListener('click', function () {
        for (let j = 0; j < v1.length; j++) {
          if (v1[2].value == 'intimidate' || v1[2].value == 'Intimidate' || v1[2].value == 'INTIMIDATE') {
            correct[8].style.display = 'inline';
            incorrect[8].style.display = 'none';
            v1[2].style.backgroundColor = '#44CB6A';
            v1[2].style.border = 'none';
          } else {
            incorrect[8].style.display = 'inline';
            correct[8].style.display = 'none';
            v1[2].style.backgroundColor = '#CB4444';
            v1[2].style.border = 'none';
          }
          for (let j = 0; j < v2.length; j++) {
            if (v2[2].value == 'intimidated' || v2[2].value == 'Intimidated' || v2[2].value == 'INTIMIDATED') {
              correct[9].style.display = 'inline';
              incorrect[9].style.display = 'none';
              v2[2].style.backgroundColor = '#44CB6A';
              v2[2].style.border = 'none';
            } else {
              incorrect[9].style.display = 'inline';
              correct[9].style.display = 'none';
              v2[2].style.backgroundColor = '#CB4444';
              v2[2].style.border = 'none';
            }
          }
          for (let j = 0; j < v3.length; j++) {
            if (v3[2].value == 'intimidated' || v3[2].value == 'Intimidated' || v3[2].value == 'INTIMIDATED') {
              correct[10].style.display = 'inline';
              incorrect[10].style.display = 'none';
              v3[2].style.backgroundColor = '#44CB6A';
              v3[2].style.border = 'none';
            } else {
              incorrect[10].style.display = 'inline';
              correct[10].style.display = 'none';
              v3[2].style.backgroundColor = '#CB4444';
              v3[2].style.border = 'none';
            }
          }
          for (let j = 0; j < ving.length; j++) {
            if (ving[2].value == 'intimidating' || ving[2].value == 'Intimidating' || ving[2].value == 'INTIMIDATING') {
              correct[11].style.display = 'inline';
              incorrect[11].style.display = 'none';
              ving[2].style.backgroundColor = '#44CB6A';
              ving[2].style.border = 'none';
            } else {
              incorrect[11].style.display = 'inline';
              correct[11].style.display = 'none';
              ving[2].style.backgroundColor = '#CB4444';
              ving[2].style.border = 'none';
            }
          }
        }
      });
      // SOAL KEEMPAT(4) CH2
      buttonSubmit[3].addEventListener('click', function () {
        for (let j = 0; j < v1.length; j++) {
          if (v1[3].value == 'oversleep' || v1[3].value == 'Oversleep' || v1[3].value == 'OVERSLEEP') {
            correct[12].style.display = 'inline';
            incorrect[12].style.display = 'none';
            v1[3].style.backgroundColor = '#44CB6A';
            v1[3].style.border = 'none';
          } else {
            incorrect[12].style.display = 'inline';
            correct[12].style.display = 'none';
            v1[3].style.backgroundColor = '#CB4444';
            v1[3].style.border = 'none';
          }
          for (let j = 0; j < v2.length; j++) {
            if (v2[3].value == 'overslept' || v2[3].value == 'Overslept' || v2[3].value == 'OVERSLEPT') {
              correct[13].style.display = 'inline';
              incorrect[13].style.display = 'none';
              v2[3].style.backgroundColor = '#44CB6A';
              v2[3].style.border = 'none';
            } else {
              incorrect[13].style.display = 'inline';
              correct[13].style.display = 'none';
              v2[3].style.backgroundColor = '#CB4444';
              v2[3].style.border = 'none';
            }
          }
          for (let j = 0; j < v3.length; j++) {
            if (v3[3].value == 'overslept' || v3[3].value == 'Overslept' || v3[3].value == 'OVERSLEPT') {
              correct[14].style.display = 'inline';
              incorrect[14].style.display = 'none';
              v3[3].style.backgroundColor = '#44CB6A';
              v3[3].style.border = 'none';
            } else {
              incorrect[14].style.display = 'inline';
              correct[14].style.display = 'none';
              v3[3].style.backgroundColor = '#CB4444';
              v3[3].style.border = 'none';
            }
          }
          for (let j = 0; j < ving.length; j++) {
            if (ving[3].value == 'oversleeping' || ving[3].value == 'Oversleeping' || ving[3].value == 'OVERSLEEPING') {
              correct[15].style.display = 'inline';
              incorrect[15].style.display = 'none';
              ving[3].style.backgroundColor = '#44CB6A';
              ving[3].style.border = 'none';
            } else {
              incorrect[15].style.display = 'inline';
              correct[15].style.display = 'none';
              ving[3].style.backgroundColor = '#CB4444';
              ving[3].style.border = 'none';
            }
          }
        }
      });
      //SOAL KELIMA(5) CH2
      buttonSubmit[4].addEventListener('click', function () {
        for (let j = 0; j < v1.length; j++) {
          if (v1[4].value == 'repeat' || v1[4].value == 'Repeat' || v1[4].value == 'REPEAT') {
            correct[16].style.display = 'inline';
            incorrect[16].style.display = 'none';
            v1[4].style.backgroundColor = '#44CB6A';
            v1[4].style.border = 'none';
          } else {
            incorrect[16].style.display = 'inline';
            correct[16].style.display = 'none';
            v1[4].style.backgroundColor = '#CB4444';
            v1[4].style.border = 'none';
          }
          for (let j = 0; j < v2.length; j++) {
            if (v2[4].value == 'repeated' || v2[4].value == 'Repeated' || v2[4].value == 'REPEATED') {
              correct[17].style.display = 'inline';
              incorrect[17].style.display = 'none';
              v2[4].style.backgroundColor = '#44CB6A';
              v2[4].style.border = 'none';
            } else {
              incorrect[17].style.display = 'inline';
              correct[17].style.display = 'none';
              v2[4].style.backgroundColor = '#CB4444';
              v2[4].style.border = 'none';
            }
          }
          for (let j = 0; j < v3.length; j++) {
            if (v3[4].value == 'repeated' || v3[4].value == 'Repeated' || v3[4].value == 'REPEATED') {
              correct[18].style.display = 'inline';
              incorrect[18].style.display = 'none';
              v3[4].style.backgroundColor = '#44CB6A';
              v3[4].style.border = 'none';
            } else {
              incorrect[18].style.display = 'inline';
              correct[18].style.display = 'none';
              v3[4].style.backgroundColor = '#CB4444';
              v3[4].style.border = 'none';
            }
          }
          for (let j = 0; j < ving.length; j++) {
            if (ving[4].value == 'repeating' || ving[4].value == 'Repeating' || ving[4].value == 'REPEATING') {
              correct[19].style.display = 'inline';
              incorrect[19].style.display = 'none';
              ving[4].style.backgroundColor = '#44CB6A';
              ving[4].style.border = 'none';
            } else {
              incorrect[19].style.display = 'inline';
              correct[19].style.display = 'none';
              ving[4].style.backgroundColor = '#CB4444';
              ving[4].style.border = 'none';
            }
          }
        }
      });
    }
  }
}

// NEXT AND PREV BUTTON
const prev = document.querySelector('.ganti #prev');
const next = document.querySelector('.ganti #next');
const soal = document.querySelectorAll('.soal');
const noSoal = document.querySelector('.info-soal .noSoal');
const jumlahSoal = document.querySelector('.info-soal .jmlhSoal');
currentSoal = 0;

function munculSoal(e) {
  soal.forEach(function (el) {
    el.classList.remove('show');
  });
  //MEMUNCULKAN SOAL PERTAMA
  noSoal.textContent = currentSoal + 1;
  jumlahSoal.textContent = soal.length;
  soal[e].classList.add('show');
}
munculSoal(currentSoal);

// Menjalankan ke soal selanjutnya secara manual
function nextSoal() {
  currentSoal++;
  if (currentSoal < soal.length - 1) {
    munculSoal(currentSoal);
    prev.style.display = 'flex';
  } else if (currentSoal >= soal.length - 1) {
    next.style.display = 'none';
    munculSoal(currentSoal);
  }
}
next.addEventListener('click', nextSoal);

function prevSoal() {
  currentSoal--;
  if (currentSoal == 0) {
    prev.style.display = 'none';
    munculSoal(currentSoal);
  } else {
    next.style.display = 'flex';
    munculSoal(currentSoal);
  }
}
prev.addEventListener('click', prevSoal);

if (currentSoal == 0) {
  prev.style.display = 'none';
}
