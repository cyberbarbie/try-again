const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello it is me again, this is my final fucking attempt');
});

app.listen(port, () => console.log(`This bitch is running on port ${port}!`));
