const express = require('express');
require('./firebaseConfig.js');

const { authorizationJWT } = require('./src/middleware');

const userRoutes = require('./src/user/routes');
const workspaceRoutes = require('./src/workspace/routes');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;

app.use(cors(), express.json(), authorizationJWT);

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/workspace', workspaceRoutes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
