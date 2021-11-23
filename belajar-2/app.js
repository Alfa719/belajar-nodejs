// Core modules
const fs = require('fs');
const readline = require('readline');

// ================> File System <===================

//Membuat dan menulis file secara synch
//fs.writeFileSync('test.txt', 'hello word synchronus');

//Membuat dan menulis file secara asynch
// fs.writeFile('test.txt', 'Hello World Asynch', (e) => {
//     console.log(e);
// });

// Membaca isi file sync
// const data = fs.readFileSync('test.txt');
// console.log(data.toString());

// Membaca isi file secara async
// const data = fs.readFile('test.txt', 'utf-8', (error, data) => {
//     if (error) console.log(error);;
//     console.log(data);
// })
// ================> End File System <===================

// ================> Readline <===================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// rl.question("Masukan nilai siswa : ", (nilai) => {
//     let a;
//     nilai >= 80 ? a = "Lulus" : a = "Tidak Lulus";
//     console.log(`Nilai Siswa adalah ${nilai}, Siswa ${a}`);
//     rl.close();
// });
// rl.question("Masukan NIM : ", (nim) => {
//     rl.question("Masukan Nama :", (nama) => {
//         console.log(`NIM : ${nim}`);
//         console.log(`Nama : ${nama}`);
//         console.log("Anda telah terdaftar");
//         rl.close();
//     })
// })
// ================> End Readline <===================
rl.question("Masukan NIM : ", (nim) => {
    rl.question("Masukan Nama :", (nama) => {
        const data = { nim, nama };
        const file = fs.readFileSync('data.json', 'utf-8');
        const datas = JSON.parse(file);
        datas.push(data);

        fs.writeFileSync('data.json', JSON.stringify(datas));
        console.log('========== Registrasi Berhasil ==========');
        console.log(`NIM : ${nim}`);
        console.log(`Nama : ${nama}`);
        console.log('Telah di daftarkan!');
        console.log('=========================================');
        rl.close();
    });
});