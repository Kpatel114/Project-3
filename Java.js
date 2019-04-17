body {
	background-image: url("images/forest.jpg");

	background-size: cover;

	background-repeat: no-repeat;

	background-position: center;
}
h1 {
	font-style: normal;

  font-family:"Lucida Grande", sans-serif;

	color: white;

	font-size: 50px;
	
	text-align: center;
}
h2{
	 font-size: 35px;

     font-family: "Times New Roman", Times;

	 text-align: center;
	 
	 color: white;
}
 h3{
     font-family:"Arial" , sans-serif;

	 font-size: 40px;
	 
	 color: white;
	 
	 text-align: center;
}
 p{
     font-size: 25px;

     font-family: "Times New Roman", Times;

	 text-align: center;
	 
	 color: white;
}
 ul{

     font-family: "Lucida", sans-serif;

     text-align: left;

     list-style-type: none;

     list-style-position:inside;
	 
	 color: white;
}
.center{
	
	display: block;
	
	margin-left: auto;
	
	margin-right: auto;
	
	width: 50%
}
nav ul li a{
	color: red;
	display: flex;
	justify-content: center;
	font-size: 25px;
}

@media screen and (min-width: 700px) {
  #main-navbar{
		background-color: pink;
	}
	
	html{
		font-size: 50px;
	}
}

@media screen and (min-width: 950px) {
  #main-navbar{
		background-color: green;
	}
	
	html{
		font-size: 100px;
	}
}