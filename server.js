const express = require('express');
const path = require('path');
const app = express();

// Tentukan direktori statis
app.use(express.static(path.join(__dirname, 'public')));

// Jalankan server di port 3000 atau port dari environment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
