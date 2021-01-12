const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/set/:id', (req, res) => {
  let id = req.params.id;

  req.session[id] = req.body.data;

  res.status(200).send('OK');
});

router.get('/get/:id', (req, res) => {

  let id = req.params.id;

  if(req.session[id])  res.status(200).send(req.session[id]);
  else  res.status(404).send('Not OK!');
});

router.post('/delete', (req, res) => {
  res.status(200).send('OK');
})

module.exports = router;
