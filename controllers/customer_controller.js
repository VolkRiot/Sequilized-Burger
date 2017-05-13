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

router.post('/api/new', (req, res) => {
  db.Customer.create({
    customer_name: req.body.customer_name
  }).then(() => {
    res.redirect('/customers');
  });
});

router.delete('/delete/:id', (req, res) => {
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/customers');
  })
});

module.exports = router;
