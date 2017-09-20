/*
Welcome to Dead Walk! Permainan berbasis keberuntungan.
Dalam permainan ini kita diharuskan melewati jalan yang sudah ditanami ranjau.
Langkah yang diambil sesuai angka dari lemparan dadu.
Letak ranjau juga tidak diketahui.
Sejauh manakah kamu mampu berjalan?
Run console untuk melempar dadu.
*/


var arrDadu = [1, 2, 3, 4, 5, 6];

var lemparDadu = arrDadu[Math.floor(Math.random() * arrDadu.length)];
console.log('Maju ' + lemparDadu + ' langkah.');

var trap = arrDadu[Math.floor(Math.random() * arrDadu.length)];

function delay (){
  if (lemparDadu === trap){
    console.log('Mati terkena ranjau!');
  }
  else {
    console.log('Aman..');
  }
}

setTimeout(delay, 1250);
