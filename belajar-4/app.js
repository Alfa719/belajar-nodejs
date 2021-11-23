const fs = require('fs');
const readline = require('readline');
const validator = require('validator');

// Buat I/O readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Buat folder data.json jika file tidak ada
const dirFile = './data.json';
if (!fs.existsSync(dirFile)) {
    fs.writeFileSync(dirFile, '[]', 'utf-8');
}

// Buat inputan
rl.question("Masukan Nama Anda : ", (name) => {
    rl.question("Masukan No HP : ", (phoneNumber) => {
        // Simpan data ke dalam object
        const data = { name, phoneNumber };
        if (!validator.isMobilePhone(phoneNumber, 'id-ID')) {
            console.log("Check Your Phone Number");
            rl.close();
        } else {
            // Ambil data dari data.json dan convert data json ke object
            const file = fs.readFileSync(dirFile, 'utf-8');
            const newData = JSON.parse(file);

            // Push / tambahkan data
            newData.push(data);

            // Rewrite data up-to-date
            fs.writeFileSync(dirFile, JSON.stringify(newData, null, 2));
            console.log('========== Register Berhasil! ==========');
            console.log(`Nama   : ${name}`);
            console.log(`No HP  : ${phoneNumber}`);
            console.log('Contact has added!');
            console.log('========================================');
            rl.close();
        }
    })
});
