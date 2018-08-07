/*
 * function for handling data (splice process)
 * return arrays
*/ 

function dataHandling2(arr){
    arr.splice(1,1,"Roman Alamsyah Elsharawy");
    arr.splice(2,1,"Provinsi Bandar Lampung");
    arr.splice(4,1,"Pria");
    arr.splice(5,0,"SMA Internasional Metro");
    
    return arr;
}

/*
 * function for for get month
 * return string month
*/ 

function getMonth(month){
    switch(month){
        case '01' :
          return 'Januari';
          break;
        case '02' : 
          return 'Februari';
          break;
        case '03' :
          return 'Maret';
          break;
        case '04' :
          return 'April';
          break;
        case '05' :
          return 'Mei';
          break;
        case '06' :
          return 'Juni';
          break;
        case '07' :
          return 'Juli';
          break;
        case '08' : 
          return 'Agustus';
          break;
        case '09' :
          return 'September';
          break;
        case '10' :
          return 'Oktober';
          break;
        case '11' :
          return 'November';
          break;
        case '12' :
          return 'Desember';
          break;
        default:
          return 0;
          break;
      }
}


// 1. Implement splice to data
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
var afterSplice = dataHandling2(input);
console.log(afterSplice);

// 2. This is date
afterSplice = afterSplice[3];

// 3. This is split process
var afterSplit = afterSplice.split('/')

// 4. This is month
var month = getMonth(afterSplit[1]);
console.log(month);

// 5. This is sorting date to descending
var afterSorting = afterSplit.sort(function(a,b){
  return b - a;
});
console.log(afterSorting);

// 6. This is join process 
afterSplit = afterSplice.split('/');
var afterJoin = afterSplit.join("-");
console.log(afterJoin);

/* 7. This is slice process
 * Will be get 15 characters
 * 
*/
var afterSlice = dataHandling2(input)[1];
afterSlice = afterSlice.slice(0,15);
console.log(afterSlice);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
