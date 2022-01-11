const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/ciam-test', (req, res) => {
  res.sendFile(path.join(__dirname + '/ciam-test.html'));
});

app.use('/', router)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
