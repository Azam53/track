<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">

    <title>Pulpomatic - Dashboard</title>

    <!-- Bootstrap core CSS -->
    <link href="<?php echo base_url();?>assets/css/bootstrap.css" rel="stylesheet">
    <!--external css-->
    <link href="<?php echo base_url();?>assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/zabuto_calendar.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/js/gritter/css/jquery.gritter.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/lineicons/style.css">    
    
    <!-- Custom styles for this template -->
    <link href="<?php echo base_url();?>assets/css/style.css" rel="stylesheet">
    <link href="<?php echo base_url();?>assets/css/style-responsive.css" rel="stylesheet">

    <script src="<?php echo base_url();?>assets/js/chart-master/Chart.js"></script>
    
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body onload="send()"> 

  <section id="container" >
      <!-- **********************************************************************************************************************************************************
      TOP BAR CONTENT & NOTIFICATIONS
      *********************************************************************************************************************************************************** -->
      <!--header start-->

      <header class="header black-bg">
              <div class="sidebar-toggle-box">
                  <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
              </div>
            <!--logo start-->
            <a href="<?php echo base_url();?>" class="logo"><b>Pulpomatic Admin</b></a>
            <!--logo end-->
            <div class="nav notify-row" id="top_menu">
               
                </ul>
                <!--  notification end -->
            </div>
            <div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="<?php echo base_url();?>index.php/resource/logout/">Logout</a></li>
            	</ul>
            </div>
        </header>
      <!--header end-->
      
      <!-- **********************************************************************************************************************************************************
      MAIN SIDEBAR MENU
      *********************************************************************************************************************************************************** -->
      <!--sidebar start-->
       <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">
              
              	  <p class="centered"><a href="#"><img src="<?php echo base_url();?>assets/img/dummy.png" class="img-circle" width="60"></a></p>
              	  <h5 class="centered"><?php echo $this->session->userdata("username");?></h5>
              	  	
                  <li class="mt">
                      <a  href="<?php echo base_url();?>" class="active"  >
                          <i class="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;">
                          <i class="fa fa-user"></i>
                          <span>Actors</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="<?php echo base_url ('index.php/resource/addclient'); ?>">Add Client</a></li>
                          <li><a  href="<?php echo base_url ('index.php/resource/adddriver'); ?>">Add Driver</a></li>   
                          <li><a  href="<?php echo base_url ('index.php/resource/show_client'); ?>">Client List</a></li>
                          <li><a  href="<?php echo base_url ('index.php/resource/show_driver'); ?>">Drivers List</a></li>   
                      </ul>
                  </li>

                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-user"></i>
                          <span>Nearest Driver</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="<?php echo base_url ('index.php/resource/show_nearest_client'); ?>"> List  </a></li>

                      </ul>
                  </li>
                  <!--<li class="sub-menu">
                      <a  href="javascript:;" >
                          <i class="fa fa-user"></i>
                          <span>Team</span>
                      </a>
                      <ul class="sub">
                         <li><a  href="team.php">Add Team</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-briefcase"></i>
                          <span>Portfolio</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="portfolio.php">Edit Portfolio</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-plus-circle"></i>
                          <span>Collaborate</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="collaborate.php">Edit Collaborate</a></li>
                         
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-hacker-news"></i>
                          <span>News</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="news.php">Edit News</a></li>
                          <li><a  href="addnews.php">Add News</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-th"></i>
                          <span>Corporate Responsibility</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="corporate.php">Edit Corporate</a></li>
                      </ul>
                  </li>
                  <li class="sub-menu">
                      <a href="javascript:;" >
                          <i class="fa fa-phone"></i>
                          <span>Contact</span>
                      </a>
                      <ul class="sub">
                          <li><a  href="main.php#">Edit Contact</a></li>
                         
                      </ul>
                  </li>-->
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->
      
      <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
      <!--main content start-->
      <section id="main-content">
          <section class="wrapper site-min-height">
          	<h3><i class="fa fa-angle-right"></i> Dashboard</h3>
          	<!--<div class="row mt">
          		<div class="col-lg-12">
          		<p>Place your content here.</p>
          		</div>
          	</div>-->

    <!-- Sidebar Content --->
        <div id="map_container"></div>
      <div class="col-lg-12 ds" id="mapCanvas"  > </div><!-- /col-lg-12 -->
    <!-- Sidebar Content End --> 
          Map Specification: <img src = "http://localhost/track/assets/img/pinkball.png" /> Driver Location
			     <img src = "http://localhost/track/assets/img/marker.png" width="30" height="30" /> Client Location
		</section><! --/wrapper --
      </section><!-- /MAIN CONTENT -->
      

      <!--main content end-->
      <!--footer start-->
     <footer class="site-footer">
          <div class="text-center">
              2017 -  Developed By Azam Ansari
              <a href="main.php#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
      <!--footer end-->
  </section>

    <!-- js placed at the end of the document so the pages load faster -->
    <script src="<?php echo base_url();?>assets/js/jquery.js"></script>
     <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="<?php echo base_url();?>assets/js/bootstrap.min.js"></script>
    <script class="include" type="text/javascript" src="<?php echo base_url();?>assets/js/jquery.dcjqaccordion.2.7.js"></script>
    <script src="<?php echo base_url();?>assets/js/jquery.scrollTo.min.js"></script>
    <script src="<?php echo base_url();?>assets/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="<?php echo base_url();?>assets/js/jquery.sparkline.js"></script>
    <script src="<?php echo base_url();?>assets/js/function.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0LN5EeORMn8Jh_4DQw7WForN0ABGM_Cw&libraries=geometry"></script>
    <script>
 
         // Load initialize map function
               google.maps.event.addDomListener(window, 'load', my_map);
        
    </script>


    <!--common script for all pages-->
    <script src="<?php echo base_url();?>assets/js/common-scripts.js"></script>
    
    <script type="text/javascript" src="<?php echo base_url();?>assets/js/gritter/js/jquery.gritter.js"></script>
    <script type="text/javascript" src="<?php echo base_url();?>assets/js/gritter-conf.js"></script>
   
    <!--script for this page-->
    <script src="<?php echo base_url();?>assets/js/sparkline-chart.js"></script>    
	<script src="<?php echo base_url();?>assets/js/zabuto_calendar.js"></script>	
	<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0LN5EeORMn8Jh_4DQw7WForN0ABGM_Cw&callback=myMap"></script>-->
	
	
    <script type="text/javascript">
          function send() {
       
           $.ajax({
                    type: 'POST',
                    url: "<?php echo site_url('resource/get_cLients_from_DB'); ?>",
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
               success: function(data) {
                      var client_data = data;
                        my_map(client_data);
    }
});
    }
     
  </script>

  </body>
</html>
