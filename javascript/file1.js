var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 


<section id="page1">
			<div class="container">
	  		<img src="images/image1.jpg" alt="Snow" style="width:70%;">
	 	 		<div class="centered">We are the best <br> consulting agency <br></div>
	 	 		<div class="centered1">Ultra Consultants is an independent research advisory and <br> consulting firm serving the manufacturing and<br> distribution industries.</div>
	 	 		<a href="#page5"><div class="centered2"><button type="button" style="background-color: #d4125a">Get started</button></div></a>
			</div>
		</section>





		.container {
		  position: relative;
		  text-align: center;
		  color: white;
		}
		.centered {
		  position: absolute;
		  top: 30%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		  color: black;
		  font-size: 30px;
		}
		.centered1{
		  position: absolute;
		  top: 48%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		  color: black;
		}
		.centered2{
		  position: absolute;
		  top: 60%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		}















		function displayCalendar()
		{
		var htmlContent ="";
		var FebNumberOfDays ="";
		var counter = 1;
		var dateNow = new Date();
		var month = dateNow.getMonth();

		var nextMonth = month+1; 
		var prevMonth = month -1;
		var day = dateNow.getDate();
		var year = dateNow.getFullYear();

		if (month == 1){
		if ( (year%100!=0) && (year%4==0) || (year%400==0)){
		FebNumberOfDays = 29;
		}else{
		FebNumberOfDays = 28;
		}
		}

		var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
		var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
		var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]



		var nextDate = new Date(nextMonth +' 1 ,'+year);
		var weekdays= nextDate.getDay();
		var weekdays2 = weekdays
		var numOfDays = dayPerMonth[month];

		while (weekdays>0){
		htmlContent += "<td class='monthPre'></td>";


		weekdays--;
		}


		while (counter <= numOfDays){


		if (weekdays2 > 6){
		weekdays2 = 0;
		htmlContent += "</tr><tr>";
		}


		if (counter == day){
		htmlContent +="<td class='dayNow' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
		"onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
		}else{
		htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"pink\"'"+
		" onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>"; 

		}

		weekdays2++;
		counter++;
		}

		var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
		+monthNames[month]+" "+ year +"</th></tr>";
		calendarBody +="<tr class='dayNames'> <td>S</td> <td>M</td> <td>T</td>"+
		"<td>W</td> <td>T</td> <td>F</td> <td>S</td> </tr>";
		calendarBody += "<tr>";
		calendarBody += htmlContent;
		calendarBody += "</tr></table>";

		document.getElementById("calendar").innerHTML=calendarBody;

		}

		<body onload="displayCalendar();">
						<span id="calendar" class="calendarmargin"></span>
					<script src="./js/as1_event.js"></script>		