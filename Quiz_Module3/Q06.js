function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        console.log(`Your current location is: ${latitude}, ${longitude}`);
      }, function(error) {
        console.log(error);
      });
    } else {
      console.log("Geolocation is not supported");
    }
  }
