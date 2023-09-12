readTextFile("./data.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    //for (var x in data)
    console.log(data.data["0"].img_path)

    var dc = document.createElement('div');
    dc.className = "slideshow";

    for (x in data.data) {
        var child = document.createElement('div');
        child.className = "slideshow-container";
        console.log(x);
        for (y in data.data[x]) {
            console.log(y);
            var grandchild = document.createElement('div');
            grandchild.className = "mySlides fade";
            grandchild.style = "display:none;";
            
            grandchild.innerHTML = "<br><img src=\"" + data.data[x][y].img_path + "\" width=\"250\" height=\"250\"><br><h3>Output:</h3><div class=\"output\">" + data.data[x][y].output + "</div><br><h3>Instruction:</h3><div class=\"instruction\">" + data.data[x][y].instruction + "</div>";
            child.appendChild(grandchild);
        }
        dc.appendChild(child);
    }
    

    //div.innerHTML = "<img src=\"" + data.data["0"]["0"].img_path + "\" width=\"350\" height=\"350\">"
    console.log(dc);
    document.getElementById("content-block").appendChild(dc);
});


function show_tab(id) {
    document.getElementById(id).style.display='grid';
}

function hide_tab(id) {
    document.getElementById(id).style.display='none';
}

let slideIndex = 1;
let slideNumber = 2;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slideIndex % slideNumber);
  slides[slideIndex % slideNumber].style.display = "block";
  slides[(slideIndex % slideNumber)+slideNumber].style.display = "block";

  slides[(slideIndex % slideNumber)+(2*slideNumber)].style.display = "block";
  slides[(slideIndex % slideNumber)+(3*slideNumber)].style.display = "block";
  slides[(slideIndex % slideNumber)+(4*slideNumber)].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

changeSlideInterval = setInterval(()=>plusSlides(1), 5000);

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


