function cekStock(item) {
    const stock = {
        nangka: 10,
        sawo: 0,
        pisang: 5
    };

    return new Promise((resolve, reject) => {
        console.log(`Mengecek stok untuk ${item}...`);

        setTimeout(() => {
            if (stock[item] > 0) {
                resolve(`Stok tersedia untuk ${item}: ${stock[item]} buah.`);
            } else if (stock[item] === 0) {
                reject(`Stok tidak tersedia untuk ${item}.`);
            } else {
                reject(`Barang ${item} tidak ditemukan`);
            }
        }, 2000); 
    });
}


async function cekStokBarang(item) {
    try {
        const hasil = await cekStock(item);
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}


cekStokBarang('nangka');  
cekStokBarang('sawo');    
cekStokBarang('pisang');
cekStokBarang('semangka')
