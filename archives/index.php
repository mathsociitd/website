<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Archives | Mathematics Society, IIT Delhi</title>
   
  <meta name="viewport" content="width=device-width, initial-scale=1" />
    
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>

  <link rel="stylesheet" href="style.css" />    

</head>

    
<body> 
  
  <header></header>
  <main>
  	<div class="section" id="archive">
  	  <div class="container">
  	    <div class="row">
  	      <div class="col-12">
  	        <center>
  	          <img src="../logo.png" alt="[logo] Mathematics Society" height="50" width="auto" style="margin-bottom:25px;">
  	          <h1>Mathematics Society</h1>
  	          <h2>IIT Delhi</h2>
  	          <h3 style="letter-spacing: 4px;font-weight: 400;">archives</h3>
  	        </center>

  	        <div class="row" style="margin-top: 36px;">

  	        <?php
  	        	$years = glob("*",GLOB_ONLYDIR);
  	        	foreach($years as $y){
  	        		echo '
  	        			<div class="col-lg-4 col-sm-6">
  	        			  <a class="btn-1 block center" href="'.$y.'">'.$y.'</a>
  	        			</div>
  	        		';
  	        	}
  	        ?>

  	        </div>


  	      </div>  
  	    </div>    
  	  </div>    

  	</div>
  	
  	<div style="position:absolute;bottom:0;left:0;right:0;">

      <div class="container" style="margin-bottom:25px;">
          <div class="color-box" style="margin-top: 25px;margin-bottom: 5px;">
            <span>Go back to the present</span>
            <a href="../">Go back</a>
          </div>
      </div>

  	  <center>
  	    <span style="display: inline-block;font-size:1.05em;">Designed & Developed by <a href="https://subhalingamd.github.io/" target="_blank">Subhalingam D</a></span>
  	  </center>
  	  
  	</div>

  </main>
  
  <footer>
      <div><a id="mode-toggler" style="text-decoration: underline;cursor:pointer;">Switch to dark mode</a></div>
      <div class="copy">Copyright &copy; 2020 Mathematics Society, IIT Delhi</div>
  </footer>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

  <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'></script>


  <script src='../script.js'></script>

</body>
</html>


