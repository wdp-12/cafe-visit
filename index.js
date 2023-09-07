let nama = prompt("nama: ")
let age = 30
let uang = 800000
let anggur = 300000
let juice = 50000

 let sisaanggur= anggur - uang;
 let sisajuice = uang - juice;
 let kembaliananggur = uang - anggur;
 let kembalianjuice = uang - juice;
 
if (nama != "ansori") {
    console.log("anda tidak boleh masuk");
}else{
    if (age < 17) {
        console.log("anda hanya boleh memesan juice denan harga Rp.50000");
        if (uang < juice ) {
            console.log("Uang anda sisa Rp."+kembalianjuice);
        }else{
            console.log("uang anda tidak mencukupi "+"uang anda kurang Rp."+ sisajuice);

        }
    }else{
        console.log("anda boleh memesan anggur dengan harga Rp.300000");
        if (uang > anggur) {
            console.log("uang anda sisa Rp."+ kembaliananggur);  
        }else{
            console.log("uang anda tidak mencukupi "+"uang anda kurang Rp."+ sisaanggur );  
        }
    }
}





// // membuat bintang
// let N = 5;
// let star = "";
// for ( let i = 0; i <= N; i++){
//     for (let j = 0; j <= i; j++) {
//         star += "*";
//     }
//     star +="\n";
// }
// console.log(star);