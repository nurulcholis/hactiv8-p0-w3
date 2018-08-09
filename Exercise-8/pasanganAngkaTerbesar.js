function pasanganTerbesar(num){
    var str = String(num);
    var list = [];    
    for(var i = 0; i < str.length;i++){
        var temp = '';
        if(str[i+1] === undefined){
            break;
        }
        temp += str[i] + str[i+1];
        console.log(temp);
        list.push(temp);
        console.log(list);
    }
    var result = list.sort(function(a,b){
        return b-a;
    });
    //return parseInt(result);
}

//console.log(pasanganTerbesar(641573));
pasanganTerbesar(641573)