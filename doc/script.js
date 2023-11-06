// let me document this code

/*
First Part Of the code
  - using query selector to access the Id's of the html document and assigning variables as well

Second Part of the Code // writing function
   - since we are making all the variables selected move lets create a function to update the clock

   -  // Now lets get the each of the selected ID's properties from the current time // thats the second, minutes, and hours
        - // getting munites. So first we add the seconds to the current minute and we convert it to minutes. // To convert seconds into minutes, you need to divide by 60, because there are 60 seconds in a minute.
        - // getting Hours. from the first part of the code where we have (currentTime.getHours()% 12) gets the current hour in a 12-hour format. This is because it calculates the remainder when dividing by 12, ensuring the result is between 0 and 11

- Movement of the Second, minute and hour hands
  Since each clock hand covers a certain number of degrees per unit of time: in maths during school days we circumference of a circle = 360
  The second hand covers 6 degrees per second (360 degrees in 60 seconds).
  The minute hand covers 6 degrees per minute (360 degrees in 60 minutes).
  The hour hand covers 30 degrees per hour (360 degrees in 12 hours).

*/
const secondHand = document.querySelector("#seconds");
const minuteHand = document.querySelector("#minutes");
const hourHand = document.querySelector("#hours");

(function updateClock() {
	const currentTime = new Date();

	const seconds = currentTime.getSeconds();
	const minutes = currentTime.getMinutes() + seconds / 60; 
	const hours = (currentTime.getHours() % 12) + minutes / 60; 

	const secHandRotation = 6 * seconds; 
	const minHandRotation = 6 * minutes; 
	const hourHandRotation = 30 * hours; 

	secondHand.setAttribute("transform", `rotate(${secHandRotation} 244 251)`);
	minuteHand.setAttribute("transform", `rotate(${minHandRotation} 244 251)`);
	hourHand.setAttribute("transform", `rotate(${hourHandRotation} 244 251)`);

	const tickSound = new Audio("./media/tick.mp3");
	tickSound.currentTime = 0;
	tickSound.play();

	setTimeout(updateClock, 1000);
})();
