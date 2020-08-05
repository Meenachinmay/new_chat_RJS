const express = require('express');

const Database = require('./database/Database');

const router = require('./routes/routes');

const app = express();
const cors = require('cors');

Database.Database();
app.use(express.json({extended: true}));

app.use(cors());

router(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});