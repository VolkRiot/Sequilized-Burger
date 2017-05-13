let express = require('express');
let db = require('../models');

let router = express.Router();

router.get('/', (req, res) => {
  db.Burger.findAll({}).then(data => {
    let burger = {
      logo: "assets/images/burger_icon.png",
      burger: data
    };
    res.render('index', burger)
  });
});

router.get('/manager', (req, res) => {
  db.Burger.findAll({}).then(data => {
    let burger = {
          logo: "assets/images/burger_icon.png",
          burger: data
        };
        res.render('manager', burger);
  });
});

router.post('/api/new', (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: 0,
    date: new Date()
  }).then(() =>{
    res.redirect('/');
  });

});

router.put('/:id', (req, res) =>{

  let cond = req.params.id;

  db.Burger.update({
    devoured: req.body.devoured
  },{
    where: {
      id: cond
    }
  }).then(() =>{
    res.redirect('/');
  });
});

router.delete('/delete/:id', (req, res) => {

  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/manager');
  })
});

module.exports = router;
