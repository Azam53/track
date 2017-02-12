// function to load map on page load
 var mark = [];
 var map;

function my_map(trunk){
                         
     
         var temp_data =  JSON.stringify(trunk);
         var result = $.parseJSON(temp_data); 
         var markers = [];
         var lat = [];
         var long = [];
         var name = [];
         var lat = [];
         var long = [];
         var flag = [];
         var destination_lat;
         var destination_lng;
         var flightPlanCoordinates = [];
         var x = 0, y = 0;
        $.each(result, function(k, v) {
         //making the key and value pair
           if(v['name'] != null){
                  name.push(v['name']);
            }
           if(v['lat'] != null){
                  lat.push(v['lat']);
            }
           if(v['long'] != null){
                  long.push(v['long']);
            }
            if(v['flag'] != null){
                  flag.push(v['flag']);
            }
            
          });
             
               for(x = 0 ; x < name.length ; x = x + 1){
                     markers.push([name[x],lat[x],long[x],flag[x]]);
            }
             
            
    var infoWindowContent =  name.slice();          
   
    
    var closest_client,current_lat,current_long;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
    

                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
    
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        
 
      if( markers[i][3] == "D") {
  
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: "http://localhost/track/assets/img/pinkball.png",
            title: markers[i][0]
        });
         mark.push(marker);
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

         google.maps.event.addListener(marker, 'dblclick', (function(marker, i) {
           return function() {
            current_lat = this.position.lat();
            current_long = this.position.lng();
            closest_client = find_closest_marker(this.position.lat(),this.position.lng());
             
            destination_lat = closest_client.latitude;
            destination_lng = closest_client.longitude;
              
              //Path Maker code below
              
              
               flightPlanCoordinates = [
               {lat: current_lat, lng: current_long},
               {lat: destination_lat, lng: destination_lng}
             
        ];
       
             
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
       }
      else {
            
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
          mark.push(marker);
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        /* google.maps.event.addListener(marker, 'dblclick', (function(marker, i) {
            return function() {
           
             find_closest_marker(this.position.lat(),this.position.lng());
            }
        })(marker, i));*/
           
        
 
        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);  
       }
   

    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });

    
}

// function to find closest point from clicked marker

function rad(x) {return x*Math.PI/180;}
function find_closest_marker(lat, lng) {
 
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest_index = 0;
    var closest = 0;
    for( i=0;i<mark.length; i++ ) {
        var name = mark[i].title;
        var mlat = mark[i].position.lat();
        var mlng = mark[i].position.lng();
        var dLat  = rad(mlat - lat);
        var dLong = rad(mlng - lng);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;
       
         // only considering client marker for nearest client distances calculation
          if(mark[i].icon == null){
         distances.push({
                      title:name,
                      distance:d,
                      latitude:mlat,
                      longitude:mlng
                  });  
       } 
       
    }
        closest = distances[0].distance;
        for(i=0;i<distances.length;i++){
           if( closest > distances[i].distance && distances[i].distance != 0){
               closest = distances[i].distance;
               closest_index = i;
           }
            
        }
        
         return distances[closest_index];
}


 
// function to delete client on press of icon from client list
function ask_to_delete_client(id)
   {
     var client_id = id;
     if(confirm("Are you Sure!!!"))
     {
        $.ajax({
                type: "GET",
                url: "delete_client" ,
                data: { client_id: client_id },
                success : function() { 


                    // function below reloads current page
                    location.reload();

                }
            });
     }
     else
     {
         location.reload();
     }
   }
// function to delete driver on press of icon from delete list
function ask_to_delete_driver(id)
   {
     var driver_id = id;
     if(confirm("Are you Sure!!!"))
     {
        $.ajax({
                type: "GET",
                url: "delete_driver" ,
                data: { driver_id: driver_id },
                success : function() { 


                    // function below reloads current page
                    location.reload();

                }
            });
     }
     else
     {
         location.reload();
     }
   }
