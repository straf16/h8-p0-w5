function kaliTerusRekursif(angka) {
  // you can only write your code here!

  if (angka < 10) {
    return angka;
  }
  var lanjut = Math.floor(angka / 10);
  hasil = kaliTerusRekursif(lanjut) * (angka % 10);

  if (hasil < 10) {
    return hasil;  
  } else {
    return kaliTerusRekursif(hasil);
  } 
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6