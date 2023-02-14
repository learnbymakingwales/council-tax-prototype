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
      res.redirect('/q-radio-2')
    } else {
      // Send user to ineligible page
      res.redirect('/journeys/a/q-text-13.html')
    }
  
  });

  // Run this code when a form is submitted to 'are-you-a-student-answer'
router.post('/are-you-a-student-answer', function (req, res) {

  // Make a variable and give it the value from 'are-you-a-student'
  var areYouaStudent = req.session.data['are-you-a-student']

  // Check whether the variable matches a condition
  if (areYouaStudent == "Yes"){
    // Send user to next page
    res.redirect('/journeys/1/confirmation-1')
  } else {
    // Send user to ineligible page
    res.redirect('/journeys/2/confirmation-1')
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
      res.redirect('/create-application')
    }
  
  });


    // Run this code when a form is submitted to 'open-university-answer'
    router.post('/open-university-answer', function (req, res) {

      // Make a variable and give it the value from 'open-university-answer'
      var openUniversity = req.session.data['open-university']
    
      // Check whether the variable matches a condition
      if (openUniversity == "Yes"){
        // Send user to next page
        res.redirect('/journeys/1/q-radio-7')
      } else {
        // Send user to ineligible page
        res.redirect('/journeys/1/q-radio-8')
      }
    
    });


    // Run this code when a form is submitted to 'studying-80-units-answer'
    router.post('/studying-80-units-answer', function (req, res) {

      // Make a variable and give it the value from 'studying-80-units-account'
      var studying80units = req.session.data['studying-80-units']
    
      // Check whether the variable matches a condition
      if (studying80units == "Yes"){
        // Send user to next page
        res.redirect('/journeys/1/q-text-8')
      } else {
        // Send user to ineligible page
        res.redirect('/journeys/1/ineligible')
      }
    
    });


        // Run this code when a form is submitted to 'studying-21-hours-answer'
        router.post('/studying-21-hours-answer', function (req, res) {

          // Make a variable and give it the value from 'studying-21-hours-account'
          var studying21hours = req.session.data['studying-21-hours']
        
          // Check whether the variable matches a condition
          if (studying21hours == "Yes"){
            // Send user to next page
            res.redirect('/journeys/1/q-text-7')
          } else {
            // Send user to ineligible page
            res.redirect('/journeys/1/ineligible')
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
