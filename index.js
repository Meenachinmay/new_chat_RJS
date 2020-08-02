const express = require('express');

const Database = require('./database/Database');

const router = require('./routes/routes');

const app = express();

Database.Database();
app.use(express.json({extended: true}));

router(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});