var text = document.getElementById('buttonone');
text.addEventListener('click', loadText);

function loadText(){
    // Create XHR Object 
    var xhr = new XMLHttpRequest();
    // This is the new way of doing it - status is not needed for onload 
    xhr.onload = function(){
        if(this.status == 200){
            var newPar = document.getElementById('text');
            newPar.innerHTML = this.responseText;
        }
    }
    // OPEN - type, url/file, async
    xhr.open('GET', 'sample.txt', true);
    xhr.send();
}

var html = document.getElementById('buttontwo');
html.addEventListener('click', ()=>{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       //by using this way you will need the status == 200
   if (this.readyState == 4 && this.status == 200) {
    document.getElementById("htmlfile").innerHTML ="<p>" + this.responseText + "</p>";
   }
 };
 xhttp.open("GET", "fencer.html", true);
 xhttp.send();
});

