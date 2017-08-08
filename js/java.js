function initialize() {
  var map = new google.maps.Map(document.getElementById("map"));
  var geocoder = new google.maps.Geocoder();
  var marker = null;
  $(".select-style ").change(function() {
    address = $(".select-style  :selected")[0].text;
    
    
    geocodeAddress(address, geocoder, map);
  });
  
  var address = $(".select-style  :selected")[0].text;
  geocodeAddress(address, geocoder, map);
  // asdasdasdasd


  //   var mapOptions = {
  //   zoom: 1,
  //   center: new google.maps.LatLng(56.05, 10.4),
  //   mapTypeId: google.maps.MapTypeId.TERRAIN
  // };

  // map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // google.maps.event.addListener(map, 'click', function(event) {
  //     if (marker==null) {
  //        marker = new google.maps.Marker({
  //          position : event.latLng,
  //          map: map
  //        });          
  //     } else {
  //         marker.setPosition(event.latLng);
  //     }      
     
  // });
  //asdasdas 

  
}
console.log( address_second = $(".select-style  :selected")[1].text);

google.maps.event.addDomListener(window, "load", initialize);

function geocodeAddress(address, geocoder, resultsMap) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.fitBounds(results[0].geometry.viewport);
    //   document.getElementById('info').innerHTML += "<br>" + results[0].geometry.location.toUrlValue(6);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}



