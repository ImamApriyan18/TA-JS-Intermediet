// 1. Apa itu synchronous?
console.log("----soal 1-----")
console.log("-- synchronous merupakan salah satu jenis operasi javascript yang mana operasi akan dijalankan secara berurutan, jadi sebuah operasi akan dijalankan setelah operasi sebelumnya selesai. --")
// 2. Apa itu asynchronous?
console.log("----soal 2-----")
console.log("-- asynchronous merupakan kebalikan dari synchronous, jadi sebuah operasi akan dijalankan tanpa perlu menunggu operasi sebelumnya selesai. --");
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
console.log("----soal 3----")
console.log("---asynchronous dapat diterapkan di browser---");
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
console.log("----soal 4----")
console.log("--- console.log pertama mencetak angka 1, 2, 3, 4, 5. sedangkan console.log kedua mencetak angka 6. ---");
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
console.log("----soal 5----")

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }