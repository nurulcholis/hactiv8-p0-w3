function palindrome(txt){
    var balik = '';
    for(var i=txt.length-1;i>=0;i--){
        balik += txt[i];
    }
    if(balik == txt){
        return true;
    }
    return false;
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false