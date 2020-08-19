const express = require('express');

var router = express.Router();

router.get('/test', (req, res) => {
	res.render('../views/test/test', { currentUser: req.user });
});

module.exports = router;
