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

   // Run this code when a form is submitted to 'council-tax-account-answer'
   router.post('/j2-council-tax-account-answer', function (req, res) {

    // Make a variable and give it the value from 'council-tax-account'
    var j2councilTaxAccount = req.session.data['j2-council-tax-account']
  
    // Check whether the variable matches a condition
    if (j2councilTaxAccount == "Yes"){
      // Send user to next page
      res.redirect('/journeys/2/q-text-1')
    } else {
      // Send user to ineligible page
      res.redirect('/create-application-2')
    }
  
  });


     // Run this code when a form is submitted to 'has-someone-moved-answer'
     router.post('/j2-has-someone-moved-answer', function (req, res) {

      // Make a variable and give it the value from 'has-someone-moved'
      var j2hasSomeoneMoved = req.session.data['j2-has-someone-moved']
    
      // Check whether the variable matches a condition
      if (j2hasSomeoneMoved == "Yes"){
        // Send user to next page
        res.redirect('/journeys/2/q-text-13')
      } else {
        // Send user to ineligible page
        res.redirect('/journeys/2/check-answers')
      }
    
    });



    // JOURNEY a -----------------------------------------------------------------

   // Run this code when a form is submitted to 'are-they-all-18-answer'
   router.post('/are-they-all-18-answer', function (req, res) {

    // Make a variable and give it the value from 'are-they-all-18-account'
    var areTheyAll18 = req.session.data['are-they-all-18']
  
    // Check whether the variable matches a condition
    if (areTheyAll18 == "Yes"){
      // Send user to next page
      res.redirect('journeys/a/q-radio-11')
    } else {
      // Send user to ineligible page
      res.redirect('/edge')
    }
  
  });


     // Run this code when a form is submitted to 'are-they-all-students-answer'
     router.post('/are-they-all-students-answer', function (req, res) {

      // Make a variable and give it the value from 'are-they-all-students'
      var areTheyAllStudents = req.session.data['are-they-all-students']
    
      // Check whether the variable matches a condition
      if (areTheyAllStudents == "Yes"){
        // Send user to next page
        res.redirect('edge')
      } else {
        // Send user to ineligible page
        res.redirect('/edge')
      }
    
    });

  

module.exports = router
