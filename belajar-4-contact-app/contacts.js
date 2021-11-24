const fs = require('fs');
const readline = require('readline');

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

// Buat inputan pertanyaan dengan promise
const question = (statement) => {
    return new Promise ((resolve, rejects) => {
        rl.question(statement, (value) => {
            // kembalikan nilai nama
            resolve(value);
        })
    })
}
const printQuestion = (name, email, phoneNumber) => {
    const data = { name, email, phoneNumber };
    const file = fs.readFileSync(dirFile, 'utf-8');
    const newData = JSON.parse(file);

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
    rl.close();
}
module.exports = { question, printQuestion };