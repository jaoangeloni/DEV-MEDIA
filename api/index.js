const express = require('express');
const cors = require('cors');

const routeUsers = require('./src/routes/user');
const routeComments = require('./src/routes/comments');
const routePage = require('./src/routes/gamePage');
const routeLikes = require('./src/routes/likes');
const routePost = require('./src/routes/post');


const app = express();
app.use(cors());
app.use(express.json());

app.use(routeUsers);
app.use(routeComments);
app.use(routePage);
app.use(routeLikes);
app.use(routePost);


app.listen(3000, () => {
    console.log("POSITIVO E OPERANTE");
});