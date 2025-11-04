<?php
include 'koneksi.php';

if(isset($_POST['submit'])){
    $nama = $_POST['nama'];
    $nim = $_POST['nim'];

    $sql = "INSERT INTO mahasiswa (nama, nim) VALUES ('$nama', '$nim')";
    if(mysqli_query($conn, $sql)){
        echo "Data berhasil ditambahkan!";
    } else {
        echo "Gagal menambahkan data: " . mysqli_error($conn);
    }
}
?>
<form method="post">
    Nama: <input type="text" name="nama"><br>
    NIM: <input type="text" name="nim"><br>
    <input type="submit" name="submit" value="Tambah Data">
</form>