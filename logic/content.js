//console.log(data[0]);

const section = document.getElementById('content');
const tableSection=document.getElementById('table-sec');

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




//content creation and DOM manip loop
for (let i = 0; i < data.length; i++) {
    createGridContent(data,i);   
}