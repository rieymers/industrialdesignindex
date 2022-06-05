const studios=
[
    {
        "studio":"frog",
        "link":"https://www.frog.co",
        "location":[
            "Düsseldorf, Nordrhein-Westfalen","Berlin, Berlin","München, Bayern"
        ]
    },
    {
        "studio":"uxma",
        "link":"https://www.uxma.com",
        "location":[
            "Kiel, Schleswig-Holstein","Hamburg, Hamburg","Dresden, Sachsen"
        ]
    },
    {
        "studio":"wilddesign",
        "link":"https://www.wilddesign.de",
        "location":[
            "Gelsenkirchen, Nordrhein-Westfalen","München, Bayern","Köln, Nordrhein-Westfalen","Magdeburg, Sachsen-Anhalt"
        ]
    }
];

//console.log(studios[0].location[2]);

display(studios);

function display(data){
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].studio);
        for (let j = 0; j < data[i].location.length; j++) {
            console.log(data[i].location[j]);
        }
    }
}

