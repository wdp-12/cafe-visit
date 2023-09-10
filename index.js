// Membuat variabel name, age, money

// jika tidak ada name, maka 
// akan tampil "Anda tidak boleh masuk"

// jika tidak, maka
// Membuat variabel minum, hargaMinum
    // Jika age kurang dari 17, maka
    // pesan minum juice dengan harga 50000
    // jika tidak, maka
    // pesan minum anggur dengan harga 300000

    // jika money kurang dari hargaMinum, maka
    // akan tampil "Uang tidak cukup. Anda harus pulang"
    // jika tidak, maka
    // money = money - hargaMinum
    // akan tampil 'Anda bisa pesan minum, sisa uang anda: ' + sisa money 
    
let name = "Azimatu";
let age = 19;
let money = 500000;

if (!name){
    console.log("Anda tidak boleh masuk");
} else {
    let minum, hargaMinum;
    if (age < 17){
        minum = "juice";
        hargaMinum = 50000;
    } else {
        minum = "anggur";
        hargaMinum = 300000;
    }
    if (money < hargaMinum){
        console.log("Uang tidak cukup. Anda harus pulang");
    } else {
        money = money - hargaMinum;
        console.log('Anda bisa pesan minum, sisa uang anda: ' + money);
    }
}