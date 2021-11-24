const { question, printQuestion } = require('./contacts');

// Buat fungsi main asynchronus
const main = async () => {
    // Buat pertanyaan berdasarkan template promise
    const name = await question('Masukan Nama Anda: ');
    const email = await question('Masukan Email Anda: ');
    const phoneNumber = await question('Masukan No HP Anda: ');
    
    printQuestion(name, email, phoneNumber);
}
main();
