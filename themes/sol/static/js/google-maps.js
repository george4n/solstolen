



    // Map 1
    function initMap() {
        var uluru = {lat: 34.7595978, lng: 32.41950900000006}; // CHANGE COORDINATES HERE // // CHANGE COORDINATES HERE //
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uluru,
            scrollwheel: false,
            draggable: true
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content:"We Are Here"
        });
        infowindow.open(map,marker);
    }
