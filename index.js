// PSEUDOCODE
// STORE name, age, money with any value
//
// IF name === '' OR name === undefined
//     DISPLAY "Anda tidak boleh masuk!"
// ELSE
//     STORE minuman, hargaMinuman without any value
//
//     IF age < 17
//         SET minuman TO "juice"
//         SET hargaMinuman TO 50000
//     ELSE
//         SET minuman TO "anggur"
//         SET hargaMinuman TO 300000
//     ENDIF
//
//     IF money < hargaMinuman
//         DISPLAY "Uang tidak cukup. Anda harus pulang."
//     ELSE
//         SET money TO money - hargaMinuman
//         DISPLAY "Anda bisa pesan minum, Sisa uang anda:"  + money
//     ENDIF
// ENDIF

let name = 'ivan';
let age = 15;
let money = 60000;

if (name === '' || name === undefined) {
  console.log('anda tidak boleh masuk');
} else {
  let minuman, hargaMinuman;
  if (age < 17) {
    minuman = 'juice';
    hargaMinuman = 50000;
  } else {
    minuman = 'anggur';
    hargaMinuman = 300000;
  }

  if (money < hargaMinuman) {
    console.log('Uang tidak cukup. anda harus pulang');
  } else {
    money = money - hargaMinuman;
    console.log('Anda bisa pesan minum, sisa uang anda: ' + money);
  }
}
