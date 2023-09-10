// Pseudocode
// ************************************

// STORE "name" with 'Rozan'
// // STORE "age" with any 20
// IF !name
// DISPLAY "anda tidak boleh masuk"
// ELSE
// STORE harga with any value
// STORE uangyngdimiliki with 400000
// IF age < 17
// STORE minuman with 'juice'
// STORE harga with 50000
// ELSE
// STORE minuman with 'anggur'
// STORE harga with 300000
// IF uangyngdimiliki < harga
// DISPLAY "uang tidak cukup. anda harus pulang"
// ELSE
// DO uangyngdimiliki = uangyngdimiliki - harga
// DISPLAY "anda bisa minum. susa uang anda", uangyangdimiliki

// ************************************

// Program
// ************************************
let name = 'Rozan';
let age = 20;
if (!name) {
    console.log('anda tidak boleh masuk');
} else {
    let harga;
    let uangyngdimiiki = 400000;
    if (age < 17) {
        minuman = 'Juice';
        harga = 50000;
    } else {
        minuman = 'anggur';
        harga = 300000;
    }
    if (uangyngdimiiki < harga) {
        console.log('Uang tidak cukup. Anda harus pulang');
    } else {
        uangyngdimiiki = uangyngdimiiki - harga;
        console.log('Anda bisa pesan minum. Sisa uang anda', uangyngdimiiki);
    }
}
// ************************************