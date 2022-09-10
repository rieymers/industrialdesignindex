if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js');
};

const url='../src/data_19_22.json';
const mobileCont=document.getElementById('mobileContent');

var jsonResponse;

//json parsing & content creation
var req=new XMLHttpRequest();
req.responseType='json';
req.open('GET',url,true);

req.onload=function(){
    jsonResponse=req.response;
    for (let i = 0; i < jsonResponse.length; i++) {
            createAppContent(jsonResponse,i); 
    }
}

req.send(null);

const searching=document.getElementById("searching");

searching.addEventListener("keyup", function (e) {
    const inputText = e.target.value; // Get the text typed by user
    searchStudios(inputText);
});

function searchStudios(keyword){
    let count=0;
    jsonResponse=req.response;
    mobileCont.innerHTML="";
    let re= new RegExp(keyword,"ig");
    for (let i = 0; i < jsonResponse.length; i++) {
        if (jsonResponse[i].studioname.match(re) || jsonResponse[i].stadt.match(re) || jsonResponse[i].bundesland.match(re)) {
            //console.log(jsonResponse[i]);
            createAppContent(jsonResponse,i); 
        }
    }
}

function sortBundesland(land){
    jsonResponse=req.response;
    mobileCont.innerHTML="";
    //code above clears section
    for (let i = 0; i < jsonResponse.length; i++) {
            if (jsonResponse[i].bundesland===land) {
                createAppContent(jsonResponse,i);
            } else if (land=='all') {
                createAppContent(jsonResponse,i);
            };    
    }
}

// Get the container element
var btnContainer = document.getElementById("1234");

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("bundesland-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
};

function createAppContent(data,pos){

    let markup=`
    <div class="card-new">
            <div class="mainInfo">
                <h3 id="wtf" class="newName">${data[pos].studioname}</h3>
                <div class="locationInfo">
                    <p class="newCity">${data[pos].stadt},</p>
                    <p class="newState">${data[pos].bundesland}</p>
                </div>
            </div>
            <div class="visit-link">
                <a class="newLink" href="${data[pos].website}" target="_blank">Website</a>
            </div>
        </div>
    `;

    mobileCont.innerHTML+=markup;
}