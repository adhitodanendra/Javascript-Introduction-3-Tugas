const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            });
            if (cek) {
                resolve(cek); // Jika hari ditemukan dalam dataDay, promise di-resolve
            } else {
                reject(new Error('Hari ini bukan hari kerja')); //Jika tidak ditemukan, promise di-reject
            }
        }, 3000); 
    });
};

    // //fungsi async untuk memanggil cekHari dengan try-catch
    // const cekHari = async (hari) => {
    // try {
    //     const result = await cekHariKerja(hari); //menunggu hasil dari cekHariKerja
    //     console.log(`${result} adalah hari kerja.`); //jika berhasil, akan menampilkan pesan bahwa hari tersebut adalah hari kerja
    // } catch (error) {
    //     console.log(error.message); //jika gagal, menangkap error dan menampilkan pesannya
    // }
    // };
    
    // cekHari('senin'); //menampilkan "senin adalah hari kerja."

    // cekHari('minggu'); //menampilkan "Hari ini bukan hari kerja"




    //Memanggil fungsi cekHariKerja dengan menggunakan then-catch
    cekHariKerja('senin')
    .then((result) => { //then dijalankan jika promise di-resolve
        console.log(`${result} adalah hari kerja.`); // Menampilkan hasil jika hari adalah hari kerja
    })
    .catch((error) => { //catch dijalankan jika promise di-reject
        console.log(error.message); // Menampilkan pesan error jika hari bukan hari kerja
    });

    // Memanggil fungsi cekHariKerja untuk hari yang bukan hari kerja
    cekHariKerja('minggu')
    .then((result) => { //then tidak akan dijalankan karena hari bukan hari kerja
        console.log(`${result} adalah hari kerja.`);
    })
    .catch((error) => { //catch akan menangkap error dari promise yang di-reject
        console.log(error.message); // Menampilkan pesan "Hari ini bukan hari kerja"
    });

