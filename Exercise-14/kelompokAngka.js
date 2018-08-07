function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var arr2 = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = 0 ; j < arr.length; j++){
            if(arr[i] % 2 == 0){
                arr2.push(arr[i][j]);
              }else{
                arr2.push(arr[i][j]);
              }
      
        }
    }
    return arr2;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]