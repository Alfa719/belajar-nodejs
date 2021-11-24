const fs = require('fs');
const chalk = require('chalk');

// Buat folder data.json jika file tidak ada
const dirFile = './data.json';
if (!fs.existsSync(dirFile)) {
    fs.writeFileSync(dirFile, '[]', 'utf-8');
}

const printQuestion = (name, email, phoneNumber) => {
    const data = { name, email, phoneNumber };
    const file = fs.readFileSync(dirFile, 'utf-8');
    const newData = JSON.parse(file);

    // Cek validasi
    const unique = newData.find((contacts) => {
        return contacts.name === name || contacts.email === email || contacts.phoneNumber === phoneNumber;
    });
    if (unique) {
        console.log(chalk.red.inverse.bold("Nama, Email atau No HP yang anda masukan sudah terdaftar. Silakan cek kembali!"));
        return false;
    }

    // Push / tambahkan data
    newData.push(data);

    // Rewrite data up-to-date
    fs.writeFileSync(dirFile, JSON.stringify(newData, null, 2));
    console.log('========== Register Berhasil! ==========');
    console.log(`Nama   : ${name}`);
    console.log(`Email   : ${email}`);
    console.log(`No HP   : ${phoneNumber}`);
    console.log('Contact has added!');
    console.log('========================================');
}
module.exports = { printQuestion };