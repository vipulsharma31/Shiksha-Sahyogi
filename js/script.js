
 // Select the preloader element
 const preloader = document.querySelector('#preloader');

 // Set a minimum time for the preloader (in milliseconds)
 const minTime = 4000;
 
 // Record the start time
 const startTime = Date.now();
 
 // Function to hide the preloader
 function hidePreloader() {
   // Calculate the elapsed time
   const elapsedTime = Date.now() - startTime;
   
   // If the minimum time hasn't elapsed yet, delay the removal of the preloader
   if (elapsedTime < minTime) {
     setTimeout(hidePreloader, minTime - elapsedTime);
   } else {
     // Otherwise, remove the preloader
     preloader.style.display = 'none';
   }
 }
 
 // Call the hidePreloader function to start the process
 hidePreloader();
 
 
 