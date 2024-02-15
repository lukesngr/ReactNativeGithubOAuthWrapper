const express = require('express');

const router = express.Router();

router.get('/oauthcallback', async (req, res) => {
  try {
    const data = req.body;
    const state = 'fK48ajhqk6kxBjhcCR4psygqmtrXBGA2voWH18uxSIbqm4suMM';
    const client_id = '';
    const client_secret = '';
    const code = '';

    if(data.state == state) {
      axios.post("https://github.com/login/oauth/access_token", {client_id, client_secret, code: data.code})
      .then(response => {
        res.redirect('appschema://access_token=' + response.data.access_token)
      })

    }
    
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;