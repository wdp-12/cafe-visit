// STORE "pengunjung" with any value
// STORE "harga_jus" with any value
// STORE "harga_anggur" with any value

// IF pengunjung.name IS empty
//   PRINT "Anda tidak boleh masuk"
// ELSE IF pengunjung.name ISNOT empty
//   IF pengunjung.age < 17
//     IF pengunjung.money >= harga_jus
//       PRINT "Anda bisa pesan minum, sisa uang anda: [uang - harga_jus]"
//     ELSE
//       PRINT "Uang tidak cukup"
//   ELSE
//     IF pengunjung.money >= harga_anggur
//       PRINT "Anda bisa pesan minum, sisa uang anda: [uang - harga_anggur]"
//     ELSE
//       PRINT "Uang tidak cukup"

const pengunjung = {
    name: "Ari Zidane",
    age: 18,
    money: 600000,
};
const harga_jus = 50000;
const harga_anggur = 300000;

if (pengunjung.name === "") {
    console.log("Anda tidak boleh masuk!");
} else if(pengunjung.name !== "") {
    if (pengunjung.age < 17) {
        if (pengunjung.money >= harga_jus) {
            console.log("Anda bisa pesan minum, sisa uang anda: ", pengunjung.money - harga_jus);
        } else {
            console.log("Uang anda tidak cukup");
        }
    } else {
        if (pengunjung.money >= harga_anggur) {
            console.log("Anda bisa pesan minum, sisa uang anda: ", pengunjung.money - harga_anggur);
        } else {
            console.log("Uang anda tidak cukup");
        }
    }
}
