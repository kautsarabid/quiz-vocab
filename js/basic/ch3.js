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
          if (v1[0].value == 'stand' || v1[0].value == 'Stand' || v1[0].value == 'STAND') {
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
            if (v2[0].value == 'stood' || v2[0].value == 'Stood' || v2[0].value == 'STOOD') {
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
            if (v3[0].value == 'stood' || v3[0].value == 'Stood' || v3[0].value == 'STOOD') {
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
            if (ving[0].value == 'standing' || ving[0].value == 'Standing' || ving[0].value == 'STANDING') {
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
          if (v1[1].value == 'happen' || v1[1].value == 'Happen' || v1[1].value == 'HAPPEN') {
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
            if (v2[1].value == 'happened' || v2[1].value == 'Happened' || v2[1].value == 'HAPPENED') {
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
            if (v3[1].value == 'happened' || v3[1].value == 'Happened' || v3[1].value == 'HAPPENED') {
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
            if (ving[1].value == 'happening' || ving[1].value == 'Happening' || ving[1].value == 'HAPPENING') {
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
          if (v1[2].value == 'run' || v1[2].value == 'Run' || v1[2].value == 'RUN') {
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
            if (v2[2].value == 'ran' || v2[2].value == 'Ran' || v2[2].value == 'RAN') {
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
            if (v3[2].value == 'run' || v3[2].value == 'Run' || v3[2].value == 'RUN') {
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
            if (ving[2].value == 'running' || ving[2].value == 'Running' || ving[2].value == 'RUNNING') {
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
          if (v1[3].value == 'sit' || v1[3].value == 'Sit' || v1[3].value == 'SIT') {
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
            if (v2[3].value == 'sat' || v2[3].value == 'Sat' || v2[3].value == 'SAT') {
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
            if (v3[3].value == 'sat' || v3[3].value == 'Sat' || v3[3].value == 'SAT') {
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
            if (ving[3].value == 'sitting' || ving[3].value == 'Sitting' || ving[3].value == 'SITTING') {
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
          if (v1[4].value == 'bring' || v1[4].value == 'Bring' || v1[4].value == 'BRING') {
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
            if (v2[4].value == 'brought' || v2[4].value == 'Brought' || v2[4].value == 'BROUGHT') {
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
            if (v3[4].value == 'brought' || v3[4].value == 'Brought' || v3[4].value == 'BROUGHT') {
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
            if (ving[4].value == 'bringing' || ving[4].value == 'Bringing' || ving[4].value == 'BRINGING') {
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

console.log(currentSoal);
// soal.forEach(function (el, i) {
//   el.classList.remove('show');
//   next.addEventListener('click', () => {
//     el[i].classList.add('show');
//     currentSoal++;
//   });
// });

// close.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });
