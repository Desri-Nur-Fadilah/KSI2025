// js/tambahData.js
// Fitur: TambahData
// Digunakan untuk menambahkan data ke dalam tabel mahasiswa di database

const koneksi = require('./koneksi'); // Import koneksi dari file koneksi.js

function tambahMahasiswa(nama, nim) {
  const sql = "INSERT INTO mahasiswa (nama, nim) VALUES (?, ?)";

  koneksi.query(sql, [nama, nim], (err, hasil) => {
    if (err) {
      console.error('❌ Gagal menambahkan data:', err);
      return;
    }
    console.log('✅ Data berhasil ditambahkan! ID:', hasil.insertId);
  });
}

// Contoh penggunaan (bisa kamu hapus atau ubah)
tambahMahasiswa('Desri Nur Fadilah', '220102030');
// Script untuk tambah data ke database
