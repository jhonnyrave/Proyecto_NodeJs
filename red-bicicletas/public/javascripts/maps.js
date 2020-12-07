
 // initialize the map
 var map = L.map('mapid').setView([-34.6012424, -58.3861497], 13);

 // load a tile layer
 L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   {
     attribution: 'Tiles by <a href="http://www.openstreetmap.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>'
   }).addTo(map);

   $.ajax({
     dataType: "json",
     url: "api/bicicletas",
     success: function(result){
       console.log(result);
       result.bicicletas.forEach(function (bici) {
         L.marker(bici.ubicacion,{title: bici.id}).addTo(map);
       });
     }
   })