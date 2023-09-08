// PSEUCODE
// Algoritma Count-Me

// STORE name with value Lia
// STORE age with value 20
// STORE nomey with value 700000

// If (name is empty) {
//      OUTPUT 'Anda tidak boleh masuk'
// }else{
//      Deklarasi minuman, hargaMinuman;
//      If(age < 17){
//          STORE minuman with value Juice
//          STORE hargaMinuman with value 50000
//      }else{
//          STORE minuman with value anggur
//          STORE hargaMinuman with value 300000
//      }
//      
//      if(money < hargaMinuman){
//          OUTPUT 'Uang tidak cukup, anda harus pulang'
//      }else{
//          CALCULATE money minus hargaMinuman
//          SET money value with calculation result
//          OUTPUT 'Anda bisa pesan minum, sisa uang anda: ' plus value money 
//      }
// }


let name = "Lia";
let age = 20;
let money = 700000;

if(!name){
    console.log('Anda tidak boleh masuk');
}else{
    let minuman, hargaMinuman;
    if(age < 17){
        minuman = 'juice';
        hargaMinuman = 50000;
    }else{
        minuman = 'anggur';
        hargaMinuman = 300000;
    }

    if(money < hargaMinuman){
        console.log('Uang tidak cukup, anda harus pulang');
    }else{
        money = money - hargaMinuman;
        console.log('Anda bisa pesan minum, sisa uang anda: ' + money)
    }
}