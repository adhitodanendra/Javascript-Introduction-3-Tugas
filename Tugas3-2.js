function downloadFile(url) {
    return new Promise((resolve, reject) => {
        console.log(`Mengunduh file dari ${url}...`);
        const time = Math.floor(Math.random() * 5000) + 1000; // Simulasi waktu unduh antara 1-5 detik

        setTimeout(() => {
            if (time < 4000) {
                resolve(`File dari ${url} berhasil diunduh dalam waktu ${time / 1000} detik.`);
            } else {
                reject(`Gagal mengunduh file dari ${url}. Waktu unduh lebih dari 4 detik.`);
            }
        }, time);
    });
}

async function cekDownload(url) {
    try {
        const hasil = await downloadFile(url)
        console.log(hasil)
    } catch (error) {
        console.log(error)
    }    
}

cekDownload('https://example.com/file1.zip')

// downloadFile('https://example.com/file1.zip')
//     .then(message => console.log(message))
//     .catch(error => console.log(error));

