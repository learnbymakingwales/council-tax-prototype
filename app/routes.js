const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

 // ROOT JOURNEY -----------------------------------------------------------------
// Run this code when a form is submitted to 'do-you-live-with-answer'
router.post('/do-you-live-with-answer', function (req, res) {

    // Make a variable and give it the value from 'do-you-live-with'
    var doYouLiveWith = req.session.data['do-you-live-with']
  
    // Check whether the variable matches a condition
    if (doYouLiveWith == "Yes"){
      // Send user to next page
      res.redirect('/journeys/1/q-radio-2')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
  });

 // JOURNEY 1 -----------------------------------------------------------------
  // Run this code when a form is submitted to 'full-time-education-answer'
router.post('/full-time-education-answer', function (req, res) {

  // Make a variable and give it the value from 'full-time-educaton'
  var fullTimeEducaton = req.session.data['full-time-educaton']

  // Check whether the variable matches a condition
  if (fullTimeEducaton == "Yes"){
    // Send user to next page
    res.redirect('/journeys/1/confirmation-1')
  } else {
    // Send user to ineligible page
    res.redirect('/journeys/1/confirmation-2')
  }

});

  // Run this code when a form is submitted to 'council-tax-account-answer'
  router.post('/council-tax-account-answer', function (req, res) {

    // Make a variable and give it the value from 'council-tax-account'
    var councilTaxAccount = req.session.data['council-tax-account']
  
    // Check whether the variable matches a condition
    if (councilTaxAccount == "Yes"){
      // Send user to next page
      res.redirect('/journeys/1/q-text-1')
    } else {
      // Send user to ineligible page
      res.redirect('/journeys/1/q-text-2')
    }
  
  });

    // Run this code when a form is submitted to 'another-student-living-answer'
    router.post('/another-student-living-answer', function (req, res) {

      // Make a variable and give it the value from 'another-student-living'
      var anotherStudentLiving = req.session.data['another-student-living']
    
      // Check whether the variable matches a condition
      if (anotherStudentLiving == "Yes"){
        // Send user to next page
        res.redirect('/edge')
      } else {
        // Send user to ineligible page
        res.redirect('/journeys/1/check-answers')
      }
    
    });



 // JOURNEY 2 -----------------------------------------------------------------

//GUIDANCE

// Run this code when a form is submitted to 'the form action'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from the form options
  var howManyBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

});

  

module.exports = router
