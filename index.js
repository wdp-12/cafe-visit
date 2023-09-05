//Deklarasi variabel name dengan nilai "rangga"
//Deklarasi variabel age dengan nilai 20
//Deklarasi variabel money dengan nilai 5000000
//Deklarasi variabel sisauang dengan nilai money - 3000000

//Jika name sama dengan "rangga" maka:
  //  Cetak "boleh masuk"
    //Jika age lebih besar dari 17 maka:
      //  Cetak "Boleh Minum Anggur"
        //Jika money lebih besar dari 3000000 maka:
          //  Cetak "Anda boleh minum, sisa uang anda : " + sisauang
        //Selain itu:
        //    Cetak "Uang Anda Tidak Cukup"
   // Jika age kurang dari 17 maka:
     //   Cetak "Boleh Minum Jus"
//Selain itu:
  //  Cetak "Anda Tidak Boleh Masuk"
//


let name = "rangga";
let age = 20;
let money = 5000000;
let sisauang = money -3000000;

if (name == "rangga"){
    console.log("boleh masuk"); 
    if (age > 17){
        console.log("Boleh Minum Anggur");
        if(money > 3000000){
        console.log("Anda boleh minum, sisa uang anda : " + sisauang);
        } else{
            console.log("Uang Anda Tidak Cukup");
        }
        }
        if (age < 17){
            console.log("Boleh Minum Jus");
            }
}
else {
    console.log("Anda Tidak Boleh Masuk");
}



