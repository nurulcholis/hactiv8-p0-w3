/*
 *  NOTE: 
 *  if(animals[i+1] === undefined){
 *    group = animals[i];
 *  }else{
 *    group = animals[i] + ' & ' + animals[i+1];
 *  } 
 * 
 */

var animals = ['ayam','bebek','bangau','kucing','anjing','kelinci','cicak'];
var submain = [];
var main = [];
// setelah diurutkan
animals.sort();
// loop sejumlah data
for(var i = 0; i < animals.length; i++){
  // buat variabel tampung nilai awal 'huruf'
  var temp = animals[i][0];
  // cek panjang dari array submain dan
  // cek index pd nilai awal
  // jika panjang 0 atau tdk ditemukan indeks
  if(submain.length === 0 || submain.indexOf(temp) === -1){
    // kirim data ke submain yg isinya nilai awal diatas
    submain.push(temp);
    // kirim data ke main yg isinya nilai dari index awal / 0
    main.push([animals[i]]);
  }else{
    // kondisi dimana nilai indeks 0 pd main sudah ada
    // mengisi nilai selanjutnya dari 1 s.d selesai
    var index = submain.indexOf(temp);
    main[index].push(animals[i]);
  }

}

console.log(main);


// for(var i = 0; i < animals.length; i++){
//   for(var j = 0; j < animals.length; j++){
//     if(i !== j){
//       if(animals[i]){
        
//       }
//     }
//   }
// }



//console.log(temp.length);

