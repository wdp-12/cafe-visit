let name = prompt("Masukkan nama: ");

if (name === "") {
    console.log("Anda tidak boleh masuk!");
} else {
    let age = parseInt(prompt("Masukkan usia Anda: "));
    let money = parseInt(prompt("Masukkan nominal uang: "));

    let price;

    if (age <= 17) {
        price = 50000;
    } else {
        price = 300000
    }

    if (money < price) {
        prompt("Uang tidak cukup. Anda harus pulang.");
    } else {
        money -= price;
        prompt("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
}