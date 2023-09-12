// Simpan informasi pengunjung
var name = "Dimas";
var age = 20;
var money = 300000;

// Cek apakah nama kosong
if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {
  // Cek usia pengunjung
  if (age < 17) {
    // Jika usia kurang dari 17 tahun, pesan juice
    if (money >= 50000) {
      money -= 50000;
      console.log("Anda bisa pesan minum. Sisa uang anda:", money);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  } else {
    // Jika usia 17 tahun atau lebih, pesan anggur
    if (money >= 300000) {
      money -= 300000;
      console.log("Anda bisa pesan minum. Sisa uang anda:", money);
    } else {
      console.log("Uang tidak cukup. Anda harus pulang.");
    }
  }
}
