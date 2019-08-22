function meleeRangedGrouping (str) {
  //your code here
  var result = [];
  if (str.length == 0) {
    return result;
  }
  var arr = str.split(',');

  result.push([], []);
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split('-');
    if (temp[1] == 'Ranged') {
      result[0].push(temp[0]);
    } else if (temp[1] == 'Melee') {
      result[1].push(temp[0]);
    }
    
  }
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []