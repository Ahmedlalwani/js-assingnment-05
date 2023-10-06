//  Assignment 26 to 30
      //  Task 1
// let user = +prompt("Enter Positive Number")

//   if( user >=0){
//     document.write("Number: "+user +"<br>"+"Round off value of the number: "+Math.round(user)+"<br>"+ "Floor value of the number: "+Math.floor(user)+"<br>"+"Ceil value of the number: "+Math.ceil(user))
//   }

      //  Task 2
// let user = +prompt("Enter Positive Number")

//   if( user <=-1){
//     document.write("Number: "+user +"<br>"+"Round off value of the number: "+Math.round(user)+"<br>"+ "Floor value of the number: "+Math.floor(user)+"<br>"+"Ceil value of the number: "+Math.ceil(user))
//   }

    //  Task 3


// let user = +prompt("Enter Number")
//     document.write("Absolute value of : "+user+" is "+ Math.abs(user))

            // Task 4

// let round = Math.round(Math.random()* 6);
// let round1 = Math.round(Math.random()* 6);
//     document.write("Random dice value : "+round+"<br>"+ "Random dice value : "+round1)

            // Task 5

// let round = Math.round(Math.random()*2);

// if(round <2 && Math.random()>1 ){
//       document.write(round+"<br>"+"Random coin value : Heads ")
// }
// else
// document.write(round+"<br>"+"Random coin value : Tails ")


            // Task 6

      // let round = Math.round(Math.random()*100);
      //  document.write("Random number between 1 and 100: "+round)




// Task 8

// let user = +prompt("Enter a number between 1 and 10")
// let random = Math.round(Math.random()*10)
// let result = random;

// if(user === result){

//   document.write("Rondome Number: "+random+"<br>"+"Congratulation your number: "+user+" is Matched")
// }else
// document.write("Rondome Number: "+random+"<br>"+"Sorry your number "+user+" is not match please try again")  

                  // task 1

// let tarikh = new Date()
// document.write(tarikh)

               // Task 2
      
// let tarikh = new Date()
// let day = tarikh.getDay()
// document.write(getMonthName(day))
// function  getMonthName(monthnumber){
//       let monthName = ["Jauary","Februry"," March","April","May","Jun","July","August","September","October","November","December"]
//       return monthName[monthnumber]
      
// }

                  // Task 3
      
// let tarikh = new Date()
// let day = tarikh.getDay()
// document.write(getDayName(day))
// function  getDayName(daynumber){
//       let dayName = ["Sunday","Monday"," Tuesday","Wednesday","Thursday","Friday","Saturday"]

//       return dayName[daynumber]
// }

                  //   Task 4

// let date = new Date();
// let week = date.getDay();

// if(week ===6 ||week ===0){
//       alert("Its Fun Day")
// }else
// alert("Its Not Fun Day")


                  //   Task 5

// let date = new Date();
// let month = date.getDay();

// if(month<=15){
//       document.write("First fifteen days of the month")
// }else
// alert("“Last days of the month”.")


            // Task 6
 
// var currentDate = new Date();
// var minutesSinceEpoch = (currentDate.getTime() - currentDate.getTimezoneOffset() * 60000) / 60000; 
// document.write("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);

                  //   Tassk 7

// let currentTime = new Date();
// let currentHour = currentTime.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

                  //    Task 8
            
//  var laterDate = new Date(2020, 11, 31, 23, 59, 59);
//   document.write(laterDate);

            //     Task 9


// var ramadanStartDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// document.write("Number of days passed since 1st Ramadan , 2015: " + daysPassed);

            //   Task 10
            
//             var startDate = new Date();
// let refernceDate = new Date(2015,11,5,22,50,16)
// var timeDifference = startDate - refernceDate;
// var secondsElapsed = timeDifference / 1000;
// document.write("On reference date: " + refernceDate + "<br>" + secondsElapsed +" Seconds elapsed between the reference date and the beginning of 2015")

            //   Task 11

// let currentDate = new Date();
// let refernceDate = new Date(2023,9,6,6,48)
// document.write("Current date: " + currentDate + "<br>" +" 1 hour ago,it was "+ refernceDate)

//   Task 12

// Create a Date object for the current date
// var currentDate = new Date();

// Calculate the date 100 years ago by subtracting 100 years worth of milliseconds
// var date100YearsAgo = new Date(currentDate);
// date100YearsAgo.setFullYear(currentDate.getFullYear() - 100);

// Display the date 100 years ago in an alert box
// alert("Date 100 years ago was: " + date100YearsAgo.toDateString());

                  // Task 13    

// Ask the user for their age
// var age = prompt("Please enter your age:");

// Calculate the current year
// var currentYear = new Date().getFullYear();

// Calculate the b