let name = "Yabsir";
let age = 16;
let money = 600000;
let total, harga;

if (name !== "") {
    console.log("Hai " + name);
    
    if (age < 17) {
        console.log("Anda hanya bisa memesan Juice");
        harga = 50000;
    } else {
        console.log("Anda bisa memesan Anggur");
        harga = 300000;
    }
    
    if (money < harga) {
        console.log("Uang anda tidak cukup...");
    } else {
        total = money - harga;
        console.log("Sisa Uang Anda " + total);
    }

} else {
    console.log("Anda Tidak Boleh Masuk");
}

