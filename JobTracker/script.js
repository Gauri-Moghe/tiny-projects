//everything that needs its value taken from the screen will be an id such as the span, button, input, and a log.

let jobCounter =0;
const counterElement = document.getElementById("jobCounter"); //counter display
const incrementButton=document.getElementById("incrementButton"); //to get value of the button and increments on each click
const companyInput = document.getElementById("companyInput") //Company applied to
const applicationLog = document.getElementById("applicationLog") //creating a container log of all the applications applied to in that day

//function to increment the counter value
function incrementCounter(){
  //remove any white spaces from the company name
  const companyName = companyInput.value.trim();
  
  //if an input is given then increment the counter
  if(companyName){
    jobCounter++;
    counterElement.textContent= jobCounter; //To get the text content and display it
    //Creating a lob
    const logItem = document.createElement('div'); //create a new div element
    logItem.className = 'log-item'; //Assigning it to the class log-item for styling
    logItem.textContent = `Applied to: ${companyName}`; //Printing out the company being applied to
    applicationLog.appendChild(logItem); //Append it to the log container
    companyInput.value =''; //clear the input field for the next entry
  }
  else{
    alert('Please enter the name of the company you applied to!!');
  }
  
}

//function to reset the counter
function resetCounter(){
  alert("Reset function triggered!");
  jobCounter=0;
  counterElement.textContent= jobCounter;
  applicationLog.innerHTML=''; //Deleting the content of applicationLog
}

incrementButton.addEventListener('click', incrementCounter);

//reset the counter at midnight
setInterval(()=>{
  const now = new Date(); //creates new date
  const time = now.toLocaleTimeString('en-US', { hour12: true }); //Curret time to locale specific time string
  if (time === "12:00:00 AM") {
        resetCounter();
    }
  
},1000); //Checks every second