// Script koneksi database
// js/koneksi.js
// Fitur: KoneksiDatabase
// Digunakan agar program bisa terhubung dengan database MySQL

const mysql = require('mysql');

// Konfigurasi koneksi database
const koneksi = mysql.createConnection({
  host: 'localhost',      // alamat server database
  user: 'root',           // username default MySQL
  password: '',           // password MySQL kamu (kosong jika default)
  database: 'db_kampus'   // nama database
});

// Coba koneksi
koneksi.connect((err) => {
  if (err) {
    console.error('❌ Koneksi ke database gagal:', err);
    return;
  }
  console.log('✅ Berhasil terkoneksi ke database db_kampus!');
});

// Ekspor koneksi agar bisa digunakan di file lain
module.exports = koneksi;
