// function selection(arr){
//     for(var i = 0; i < arr.length-1; i++){
//         var index = i;
//         for(var j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[index]) {
//                 index = j;
//             }
//         }
  
//         var smallest = arr[index];
//         arr[index] = arr[i];
//         arr[i] = smallest;
//     }
//     return arr;
//   }


function perkalianUnik(arr){
  var list = [];
  for (var i = 0; i < arr.length; i++){
    for( var j = 0; j < arr.length; j++){
      if(i !== j){
        if(arr[i] !== arr[j]){
          list.push(arr[i]);
        }
      }
    }
  }
  return list;
}

console.log(perkalianUnik([1,2,3,4]));