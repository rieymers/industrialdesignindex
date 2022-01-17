console.log(data[0].studioname);

var header = document.querySelector('header');

function createContent(data,pos){
    var H3=document.createElement('h3');
    var link=document.createElement('a');

    H3.textContent=data[pos].studioname;
    H3.setAttribute('class',"studioheader");
    
    link.setAttribute('href', data[pos].website)
    link.setAttribute('target','blank')
    link.textContent=data[pos].website;

    header.appendChild(H3);
    header.appendChild(link);
}

for (let i = 0; i < data.length; i++) {
    createContent(data,i);   
}