// PROGRAM CAFE_VISITATION

// STORE "name" with any value
// STORE "age" with any value
// STORE "money" with any value

// IF "name" = ""
//     DISPLAY "Anda tidak boleh masuk"
//     ELSE
//         STORE "minum" with juice and anggur
//         STORE "harga" with 50000 and 300000
//     IF "age" < 17
//         DO "minum = juice" and "harga = 50000"
//     ELSE 
//         DO "minum = anggur" and "harga = 300000"
 
//     IF "money" < harga
//         DISPLAY "Uang tidak cukup. Anda harus pulang"
//     ELSE
//         STORE "kembalian" with "money" minus "harga"
//         DISPLAY "Anda bisa pesan minum, sisa uang anda : " + kembalian


let name = "jejen";
let age = 20;
let money = 500000;

if (!name) {
  console.log("Anda tidak boleh masuk");
} else {
  let minum, harga;
  if (age < 17) {
    minum = "juice";
    harga = 50000;
  } else {
    minum = "anggur";
    harga = 300000;
  }

  if (money < harga) {
    console.log("Uang tidak cukup. Anda harus pulang");
  } else {
    kembalian = money - harga;
    console.log("Anda bisa pesan minum, sisa uang anda : " + kembalian);
  }
}
