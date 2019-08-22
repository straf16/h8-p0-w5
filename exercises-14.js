function changeVocals (str) {
  //code di sini
  var arr = str.split('');
  var vocals = /[aiueoAIUEO]/;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(vocals)) {
      var x = arr[i].charCodeAt() + 1;
      arr[i] = String.fromCharCode(x);
    }
  }
  return arr.join('');
}

function reverseWord (str) {
  //code di sini
  var reverse = '';
  for (var i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
  }
  return reverse;
}

function setLowerUpperCase (str) {
  //code di sini
  var result = str.split('');
  for (var i = 0; i < result.length; i++) {
    if (result[i] == result[i].toUpperCase()) {
      result[i] = result[i].toLowerCase();
    } else if (result[i] == result[i].toLowerCase()){
      result[i] = result[i].toUpperCase();
    }
  }
  return result.join('');
}

function removeSpaces (str) {
  //code di sini
  var result = str.split('');

  for (var i = 0; i < result.length; i++) {
    if (result[i] == ' ') {
      result.splice(i, 1);
    }
  }

  return result.join('');
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'