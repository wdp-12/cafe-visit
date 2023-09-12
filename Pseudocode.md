Simpan informasi pengunjung
Baca nama, usia, dan uang dari pengunjung

Jika nama kosong:
    Tampilkan "Anda tidak boleh masuk!"
Else:
    Jika usia kurang dari 17 tahun:
        Jika uang cukup untuk memesan juice (50000):
            Kurangi uang dengan harga juice
            Tampilkan "Anda bisa pesan minum. Sisa uang anda: [sisa_uang]"
        Else:
            Tampilkan "Uang tidak cukup. Anda harus pulang."
    Else:
        Jika uang cukup untuk memesan anggur (300000):
            Kurangi uang dengan harga anggur
            Tampilkan "Anda bisa pesan minum. Sisa uang anda: [sisa_uang]"
        Else:
            Tampilkan "Uang tidak cukup. Anda harus pulang."
