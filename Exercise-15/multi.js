function buying(name) {
    var users = [
        ['Adi', 20, 'male'],
        ['Budi', 19, 'male'],
        ['Cici', 20, 'female'],
        ['Dodo', 21, 'male']
    ];
  
    var product = [
      ['zarra clothes', 500000],
      ['Levi jeans', 1000000],
      ['Adidas Shoes', 1000000]
    ];
  
    var trans = [
      [0,0],
      [0,2],
      [1,1],
      [2,0],
      [3,2]
    ];

    var id_user;
    var id_product = [];
    var output = [];


    // nyari id_user dijadikan index
    for(var i = 0 ; i < users.length; i++){
        if(users[i][0] === name){
            id_user = i;
        }
    }

    // nyari barang yg di beli id_user di transaksi
    for(var i = 0; i < trans.length; i++){
        if(trans[i][0] === id_user){
          id_product.push(trans[i][1]);
        }
    }
   
    // cek productnya apa
    for(var i = 0; i < id_product.length; i++){
       //console.log(i)
       var tempIndex = id_product[i]
       console.log(tempIndex);
       output.push(product[tempIndex][0]);
    }
    return output;
  }
  

  console.log(buying('Adi')); // ['zarra clothes', 'Adidas Shoes'