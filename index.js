// Mendefinisikan variabel pengunjung
let name = "hamdan";
let age = 19;
let money = 350000;

// Step 1: Cek jika nama yang kosong
if (name !== "") {

    // Step 2: Cek usia pengunjung
    if (age < 17) {
        console.log("Anda hanya bisa memesan juice!");
        price = 50000;
    } else {
        console.log("Anda hanya bisa memesan anggur!");
        price = 300000;
    }

    // Cek uang pengunjung
    if (money < price) {
        console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
        console.log("Anda bisa pesan minum. Sisa uang anda: ", money - price);
    }
}
else {
    console.log("Anda tidak boleh masuk!");
}
