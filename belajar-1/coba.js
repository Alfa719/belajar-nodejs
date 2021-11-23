console.log('===> Hello World <===');

const cetakProfile = (nim, nama, fakultas, prodi, semester) => {
    console.log("====================================");
    console.log(`NIM : ${nim}`);
    console.log(`Nama : ${nama}`);
    console.log(`Fakultas : ${fakultas}`);
    console.log(`Program Studi : ${prodi}`);
    console.log(`Semester : ${semester}`);
    console.log("====================================");
}
const cetakNilai = (nilai) => console.log(nilai > 80 ? 'Lulus' : 'Tidak Lulus');

//cetakProfile(1821500073, "M. Nurul Hidayatullah", "Teknik", "Teknologi Informasi", 7);
//cetakNilai(81);

module.exports = {cetakProfile, cetakNilai};