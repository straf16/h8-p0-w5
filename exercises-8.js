function cariPelaku(str) {
  // you can only write your code here!
  var arr = str.match(/abc/g);
  
  if (arr == null) {
    return 0;
  } else {
    return arr.length;
  }
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2