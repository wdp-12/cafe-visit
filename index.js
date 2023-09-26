// const nama = ""; 
// const age = 20; 

// let money = 5000000; 


// if (!nama) {
//   console.log("Anda tidak boleh masuk!");

// } else {
//   if (age < 17) {
//     minuman = "juice";
//     harga = 50000;
//   } else {
//     minuman = "anggur";
//     harga = 300000;
//   }

//   if (money < harga) {
//     console.log("Uang tidak cukup. Anda harus pulang.");
//   } else {
//     money = harga;
//     console.log("Anda bisa pesan minum. Sisa uang anda: ");
//   }
// }

const nama = "Odil"; 
const age = 16; 

let money = 80000; 

if (!nama) {
  console.log("Anda tidak boleh masuk!");

} else {
  if (age < 17) {
    drink = "juice";
    price = 50000;
    console.log("Boleh pesan juice!");

  } else {
    if (age > 17 ){
    drink = "anggur";
    price = 300000;
    console.log("Boleh pesan anggur!");
    }

  if (money < price) {
    console.log("Uang tidak cukup. Anda harus pulang.");
  } else {
    money = price;
    console.log("Anda bisa pesan minum. Sisa uang anda: ");
        }
    }
}