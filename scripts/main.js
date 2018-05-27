document.getElementById('tripInputForm').addEventListener('submit', saveTrip);

function saveTrip(e) {
    var tripD = document.getElementById('tripDateInput').value;
    var tripL = document.getElementById('tripLocationInput').value;
    var tripW = document.getElementById('tripWheatherInput').value;
    var tripWS = document.getElementById('tripWindSpeedInput').value;
    var tripWD = document.getElementById('tripWindDirectionInput').value;
    var tripAT = document.getElementById('tripAirTempInput').value;
    var tripWT = document.getElementById('tripWaterTempInput').value;
    var tripId = chance.guid();
    var tripRef = 1;

    var trip = {
        id: tripId,
        pvm: tripD,
        paikka: tripL,
        saa: tripW,
        tn: tripWS,
        ts: tripWD,
        li: tripAT,
        lv: tripWT,
        ref: tripRef
    }

    if (localStorage.getItem('trips') == null) {
        //tyhjää
        var trips = [];
        trips.push(trip);
        localStorage.setItem('trips', JSON.stringify(trips));
    } else {
        //ei tyhjä
        var trips = JSON.parse(localStorage.getItem('trips'));
        trips.push(trip);
        localStorage.setItem('trips', JSON.stringify(trips));
    }

    document.getElementById('tripInputForm').reset();

    fetchTrips();

    e.preventDefault();

}


function deleteTrip(id) {
    var trips = JSON.parse(localStorage.getItem('trips'));

    for (var i = 0; i < trips.length; i++) {
        if (trips[i].id == id) {
            trips.splice(i,1);
        }
    }

    localStorage.setItem('trips', JSON.stringify(trips));

    fetchTrips();
}



function fetchTrips() {
    var trips = JSON.parse(localStorage.getItem('trips'));
    var tripsList = document.getElementById('tripsList');

    tripsList.innerHTML = '';

    if (trips != null) {

    for (var i = 0; i < trips.length; i++) {
        var id = trips[i].id;
        var pvm = trips[i].pvm;
        var paikka = trips[i].paikka;
        var saa = trips[i].saa;
        var tn = trips[i].tn;
        var ts = trips[i].ts;
        var li = trips[i].li;
        var lv = trips[i].lv;
        var ref = trips[i].ref;

        
        tripsList.innerHTML +=  '<div class="jumbotron reissuItem">'+     // flex-container tai well
                                // '<h4>Kalareissun ID: ' + id + '</h4>'+
                                '<div class="flex-container reissuFlex">'+ //reissuFlex class added to display type to flex 
                                '<span class="label label-primary">' + pvm + '</span>'+
                                '<span class="label label-primary">' + paikka + '</span>'+
                                '<span class="label label-primary">' + saa + '</span>'+
                                '<span class="label label-primary">Tuuli: ' + tn + 'm/s ' + ts + '</span>'+
                                // '<p><span class="label label-primary">' + ts + '</span></p>'+
                                '<span class="label label-primary">Ilma: ' + li + '&#8451</span>'+
                                '<span class="label label-primary">Vesi: ' + lv + '&#8451</span>'+
                                '<span class="label label-info"><a href="#" onclick="addFishToTrip(\''+id+'\')">Lisää kala</a></span>'+
                                '<span class="label label-danger"><a href="#" onclick="deleteTrip(\''+id+'\')">Poista</a></span>'+
                                '</div>'+
                                '</div>';
        
       /*
        tripsList.innerHTML +=  '<tr">'+
                                // '<h4>Kalareissun ID: ' + id + '</h4>'+
                                //'<div class="flex-container">'+ 
                                '<td>' + pvm + '</td>'+
                                '<td>' + paikka + '</td>'+
                                '<td>' + saa + '</td>'+
                                '<td>' + tn + '</td>'+
                                '<td>' + ts + '</td>'+
                                // '<p><span class="label label-primary">' + ts + '</span></p>'+
                                '<td>' + li + '&#8451</td>'+
                                '<td>' + lv + '&#8451</td>'+
                                '<td><a href="#" onclick="deleteTrip(\''+id+'\')">Poista</a></td>'+
                                //'</div>'+
                                '</tr>';
        */
    } /* end for */
    } /* end if */
} /*end function fetchTrips */

/* cookie testing */
function PageLoad() {
    setUserName();
    fetchTrips();
    /* one could execute several functions when page loads... */
    /* function1(); function2(); functionN(); */
}

window.onload = PageLoad; // no parenthesis after function name

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");

    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
     }
}

function setUserName() {
    /* should get value of etunimi from cookie and set the value to top right corner */
    var nimi = getCookie('etunimi');
    var nimenpaikka = document.getElementById('uiNimi');
    nimenpaikka.innerHTML = '';
    nimenpaikka.innerText += 'Moi, ' + nimi;

}

/* test display and visibilty */

function hideAddTripsElement() {
    document.getElementById("tripsJumbo").style.display = "none";
    document.getElementById("addTools").style.display = "none";
}

function hideAddFishesElement() {
    document.getElementById("fishesJumbo").style.display = "none";
    document.getElementById("addTools").style.display = "none";
}

function showAddTripsElement() {   
    document.getElementById("fishesJumbo").style.display = "none";
    document.getElementById("addTools").style.display = "block";
    document.getElementById("tripsJumbo").style.display = "block";
}

function showAddFishesElement() {
    document.getElementById("tripsJumbo").style.display = "none";
    document.getElementById("addTools").style.display = "block";
    document.getElementById("fishesJumbo").style.display = "block";
}

function addFishToTrip() {
    /* open add fish tool and set id */
    alert("Lisää kalat tulossa...");
}
