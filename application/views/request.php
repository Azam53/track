<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Shiawiki</title>
		<meta name="generator" content="Bootply" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="<?= base_url('assets/css/bootstrap.min.css');?>" rel="stylesheet">
		<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]
		<link href="<?= base_url('assets/css/styles.css');?>" rel="stylesheet">-->
		<link href="<?= base_url('assets/css/style_search.css');?>" rel="stylesheet">
                <link rel="shortcut icon" href="<?= base_url('assets/images/logo1.jpg');?>" />
	</head>
	<body>
<div class="container-full">

      <div class="row">
       
        <div class="col-lg-12 text-center v-center">
        
       <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
<div class="navbar-inner"> <!--changes made here-->
    <div class="container">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">

                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>

            </button>
            <a class="navbar-brand" href="<?php echo base_url();?>">
                <img src="<?= base_url('assets/images/Drawing.png');?>" alt="Not found" width="150" height ="50">
            </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">About US</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact US</a></li>
            </ul>
        </div>
    </div>
</div>
</nav>

<br><br><br>
<div class="container bootstrap snippet">
    <div class="row">
        <div class="col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <h2>
                        <?php echo $count;?> results found for: <span class="text-navy"><?php echo $search;?></span>
                    </h2>
                    <small>Request time  {elapsed_time}</small>
        
                    <div class="search-form">
                        <form action="search" method="post">
                            <div class="input-group">
                                <input type="text" value="<?php echo $search;?>" name="search_term" class="form-control input-lg">
                                <div class="input-group-btn">
                                    <button class="btn btn-lg btn-primary" type="submit">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="hr-line-dashed"></div>
                    <div class="search-result">
                            <?php
                               if(count($result) > 0) {
                            ?>
                      
                            <?php foreach($result as $key => $value) {?> 
                        <h3><a><?php echo $value['question']; ?></a></h3>
             
                        <p>
                            <?php echo $value['answer'];?>
                        </p>
                         <p class='search-link'><?php echo $value['reference'];?></p>
                          
                   
                           <?php  } unset($search); ?>
                           <?php }
                           else{ ?>
                             
                             <h2 style="color:#3399FF;">Question Not Found</h2>
                 
                           <?php     }
                           ?>
                    
                   
                    </div>
                  
                
           
        </div>
    </div>
</div>
                    
