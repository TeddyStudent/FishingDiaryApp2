/* cookie testing */
function PageLoad() {
    setUserName();
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