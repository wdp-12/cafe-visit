// Pseudocode:
// 1. Inisialisasi variable name, age, dan money.
// 2. Periksa apakah name kosong:
//    - Jika iya, tampilkan "Anda tidak boleh masuk!" dan berhenti.
//    - Jika tidak, lanjutkan ke langkah berikutnya.
// 3. Periksa usia pengunjung:
//    - Jika age < 17, maka minuman yang bisa dipesan adalah juice.
//    - Jika age >= 17, maka minuman yang bisa dipesan adalah anggur.
// 4. Hitung harga minuman berdasarkan jenis minuman yang bisa dipesan.
// 5. Periksa apakah uang mencukupi untuk memesan minuman:
//    - Jika uang < harga minuman, tampilkan "Uang tidak cukup. Anda harus pulang." dan berhenti.
//    - Jika uang cukup, kurangkan uang dengan harga minuman dan tampilkan "Anda bisa pesan minum. Sisa uang anda: [sisa uang]".
// 6. Selesai.

// JavaScript Program:

// Inisialisasi variable
let name = prompt("Masukkan Nama");
let age = parseInt(prompt("Masukkan Umur"));
let money = parseInt(prompt("Masukkan Jumlah Uang"));

// Step 2: Periksa apakah name kosong
if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    // Step 3: Periksa usia pengunjung
    let minuman;
    let hargaMinuman;

    if (age < 17) {
        minuman = "juice";
        hargaMinuman = 50000;
    } else {
        minuman = "anggur";
        hargaMinuman = 300000;
    }

    // Step 4: Hitung harga minuman
    // Step 5: Periksa apakah uang mencukupi
    if (money < hargaMinuman) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        money -= hargaMinuman;
        console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
}
