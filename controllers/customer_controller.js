/**
 * Created by mikhailmetrikin on 5/12/17.
 */
let express = require('express');
let db = require('../models');

let router = express.Router();

router.get('/', (req, res) => {
  db.Customer.findAll().then(data => {
      let customer = {
        customer: data
      };
      res.render('customers', customer)
  });
});

router.delete('/delete/:id', (req, res) => {
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/');
  })
});

module.exports = router;
