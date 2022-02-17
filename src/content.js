const section = document.getElementById('content');
const tableSection=document.getElementById('table-sec');
const url='../src/data_19_22.json';
const mobileCont=document.getElementById('mobileContent');
const locSvgUrl="../iconmnstr-location-pin-thin.svg";

var jsonResponse;

//json parsing & content creation
var req=new XMLHttpRequest();
req.responseType='json';
req.open('GET',url,true);

req.onload=function(){
    jsonResponse=req.response;
    //console.log(jsonResponse[1].bundesland);
    for (let i = 0; i < jsonResponse.length; i++) {
        if (jsonResponse[i].studioname==""){
            jsonResponse.splice(i,1);
        } else {
            createAppContent(jsonResponse,i); 
        }
    }
};
req.send(null);

function clearBox(){
    section.innerHTML="";
}

function sortBundesland(land){
    jsonResponse=req.response;
    clearBox();
    //code above clears section
    for (let i = 0; i < jsonResponse.length; i++) {
        if (jsonResponse[i].bundesland===land) {
            createGridContent(jsonResponse,i);
        } else if (land=='all') {
            createGridContent(jsonResponse,i);
        } 
    }
}

//content grid producer

function createGridContent(data,pos){
    var gridDiv=document.createElement("Div");
    gridDiv.classList.add('grid-container');

    var nameDiv=document.createElement("Div");
    nameDiv.classList.add("name");
    var stateDiv=document.createElement("Div");
    stateDiv.classList.add("state");
    var cityDiv=document.createElement("Div");
    cityDiv.classList.add("city");
    var webDiv=document.createElement("Div");
    webDiv.classList.add("web");

    var H3=document.createElement('h3');
    var link=document.createElement('a');
    var state=document.createElement('p');
    var city=document.createElement('p');

    link.setAttribute('href', data[pos].website)
    link.setAttribute('target','blank')
    link.textContent=data[pos].website;

    H3.textContent=data[pos].studioname;
    state.textContent=data[pos].bundesland;
    city.textContent=data[pos].stadt;

    nameDiv.appendChild(H3);
    stateDiv.appendChild(state);
    cityDiv.appendChild(city);
    webDiv.appendChild(link);

    gridDiv.appendChild(nameDiv);
    gridDiv.appendChild(stateDiv);
    gridDiv.appendChild(cityDiv);
    gridDiv.appendChild(webDiv);

    section.appendChild(gridDiv);
}

function createAppContent(data,pos){
    var cardDiv=document.createElement("Div");
    cardDiv.classList.add('card-m');
    let h4 = document.createElement('h4');
    let locDiv=document.createElement("Div");
    locDiv.classList.add("card-loc-m");
    
    let svgCon=document.createElementNS("http://www.w3.org/2000/svg","svg");
    svgCon.innerHTML="<path d=\"M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602\"/>";
    svgCon.setAttribute('width','24');
    svgCon.setAttribute('height','24');
    svgCon.setAttribute('fill','#272727');
    svgCon.setAttribute('fill-rule','evenodd');
    svgCon.setAttribute('clip-rule','evenodd');
    //svgCon.setAttribute('xmlns','http://www.w3.org/2000/svg')

    let state=document.createElement('p');
    let city=document.createElement('p'); 

    var link=document.createElement('a');

    link.setAttribute('href', data[pos].website)
    link.setAttribute('target','blank')

    link.textContent='VISIT';

    h4.textContent=data[pos].studioname;
    state.textContent=data[pos].bundesland;
    city.textContent=data[pos].stadt;
    city.textContent+=', ';

    locDiv.appendChild(svgCon);
    locDiv.appendChild(city);    
    locDiv.appendChild(state);


    cardDiv.appendChild(h4);
    cardDiv.appendChild(locDiv);
    cardDiv.appendChild(link);

    mobileCont.appendChild(cardDiv);
}
