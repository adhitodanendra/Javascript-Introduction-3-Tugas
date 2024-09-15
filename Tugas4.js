async function fetchUserNames() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json(); 
        const names = users.map(user => user.name); // Mengambil semua nama dari data users
        console.log('Nama-nama pengguna:', names);
        debugger; // Memicu debugger pada titik ini
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Panggil fungsi untuk menjalankan fetch
fetchUserNames();