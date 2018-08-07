function balikKata(txt){
    var bantu = '';
    for(var i = txt.length-1; i>=0; i--){
        bantu += txt[i];
    }
    return bantu;
}

console.log(balikKata("hello wordl!"));

//input "hello world!"
//output
//"!dlrow olleh"