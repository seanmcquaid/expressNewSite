var express = require('express');
var router = express.Router();

let students= [
  "katie",
  "jason",
  "chris",
  "brandon"
]
/* GET home page. */
router.get('/', function(req, res, next){
  res.render('stuff', { 
    title: 'Student Names',
    students,
  });
});

router.get('/reverse', function(req, res, next){
  let reversedStudents = students.reverse();
  res.render('reverseStuff', { 
    title: 'Student Names',
    reversedStudents,
  });
});

module.exports = router;