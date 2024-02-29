function gameLab(jumlah){
    let output = "";

    for (let i = 1; i <= jumlah; i++) {
       if(i%15 == 0){
        output = output + " gameLab Indonesia"
       } else if (i%5 == 0){
        output = output + " gameLab"
       } else if (i%3 == 0)
       {
         output = output + " game"
       }
        
    }

    return output.trim();
}

console.log("Hasil uji pertama adalah");
console.log(gameLab(11));
console.log("Hasil uji Kedua adalah");
console.log(gameLab(25));
console.log("Hasil uji Ketiga adalah");
console.log(gameLab(35));

