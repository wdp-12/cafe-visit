let nama = "Jihan"
let age = 15
let uangYgDimiliki = 70000
let hargaAnggur = 300000
let hargaJuice = 50000
let SisaUang = uangYgDimiliki - hargaAnggur
let Sisa_uang = uangYgDimiliki - hargaJuice
if (nama != "Jihan") {
    console.log('Anda tidak boleh masuk!');
} else if (uangYgDimiliki < 50000) {
    console.log('Uang tidak cukup. Anda harus pulang.')
} else if (age < 17) {
    console.log('Anda bisa pesan juice. ' + "Sisa uang anda:" + Sisa_uang)
} else {
    console.log('Anda bisa pesan anggur. ' + "Sisa uang anda:" + SisaUang)
}

// Masukkan variabel nama
// Masukkan variabel age
// Masukkan variabel uang yang dimiliki
// Masukkan variabel harga anggur
// Masukkan variabel harga juice
// If nama bukan berupa string maka tampilkan/display "Anda tidak boleh masuk"
// Else tetapi uang yang dimiliki < 50000(harga juice) maka tampilkan/display "Uang tidak cukup. Anda harus pulang"
// Else tetapi age < 17 maka tampilkan/display Anda bisa pesan juice. Sisa uang anda: (uang yang dimiliki-harga juice)
// Else maka tampilkan/display Anda bisa pesan anggur. Sisa uang anda: (uang yang dimiliki-harga anggur)