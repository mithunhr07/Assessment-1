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