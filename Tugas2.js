const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 
                     'Juni', 'Juli', 'Agustus', 'September',
                     'Oktober', 'November', 'Desember'];
        if (!error) {
            callback(null, month); //jika tidak ada error, panggil callback dengan daftar bulan
        } else {
            callback(new Error('data tidak ditemukan'), []); //jika ada error, panggil callback dengan error
        }
    }, 4000);
};

const showMonth = (error, month) => {
    if (error) {
        console.log(error.message); //jika ada error, tampilkan pesan error
    } else {
        month.map((m) => console.log(m)); //jika tidak error, tampilkan semua bulan
    }
};


getMonth(showMonth);