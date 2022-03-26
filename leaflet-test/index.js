window.onload = function(){
    var map = L.map('map').setView([51.505, -0.09], 13);
    icon = L.divIcon({
        className: 'custom-div-icon',
            html: "<div style='background-color:#4838cc;' class='marker-pin'></div><i class='fa-solid fa-camera'></i>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibHVrZXRyZW5hbWFuIiwiYSI6ImNsMTg4NmduZzA5cGszYnVsYmM1MjZ0d2UifQ.sIOH_Wp8owixptV9YIau4g'
    }).addTo(map);
    var marker = L.marker([51.5, -0.09],{
        title:"Kroger's Grocery Store",
        "icon":icon
    }).addTo(map);
    marker.bindPopup("This is the Transamerica Pyramid").openPopup();
}