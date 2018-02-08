var request_url = "https://api.imgur.com/3/album/ZOEJ6";
function requestAlbum() {
  var req = new XMLHttpRequest();
  
  req.onreadystatechange = function() { 
     if (req.readyState == 4 && req.status == 200) {
       processRequest(req.responseText);
     } else {
       console.log("Error with Imgur Request.");
     }
  }
  req.open("GET", request_url, true); // true for asynchronous     
  req.setRequestHeader("Authorization", "Client-ID eac8f62c4512ac7");
  req.send(null);
}
function processRequest(response_text) {
  if (response_text == "Not found") {
    console.log("Imgur album not found.");
  } else {
    var json = JSON.parse(response_text);
      for(var i = 0; i < json.data.images.length; i++) {
          var imgurSRC = "https://imgur.com/" + json.data.images[i].id + ".jpg";
          document.getElementById("works").innerHTML = document.getElementById("works").innerHTML + "<figure class='wowload fadeInUp lul'><img src='" + imgurSRC + "' alt='img01'/><figcaption><a href='" + imgurSRC + "' title='1' data-gallery></a></figcaption></figure>"
          console.log(imgurSRC)
      }
  }
}
requestAlbum();