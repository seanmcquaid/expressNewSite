var express = require('express');
var router = express.Router();

const students= [
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

router.get("/reverse", function(req, res, next){
  students = students.reverse();
  res.render("reverseStuff", {
    title: "Student names",
    students,
  })
  console.log(students);
});

module.exports = router;
