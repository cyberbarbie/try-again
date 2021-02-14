const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('bruh nvm it do work. Take notessss!');
});

app.listen(port, () => console.log(`Port was supposed to run at ${port}!`));
