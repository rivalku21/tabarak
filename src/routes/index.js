const express = require('express');
const router = express.Router();

const api = require('../api/api');
const event = require('../api/event');


//ROUTES
router.get('/', api.contoh_fungsi);
router.route('/event')
    .get(event.getAllData)
    .post(event.saveData);
router.route('/event/:id')
    .get(event.searchDataById);

module.exports = router;