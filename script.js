var i = "pyar vyar sab dhokha hai padhai karle abhi bhi mauka hai 🤣";
var ii = "aur kitna katvaaoge apna 😂";
var iii = "pyar tere naseeb me hi nhi hai 😆";
var iv = "tera kat rha hai aur kat ta rahega 😁";
var v = "life me pyar ke alawa aur bhi bahut kuchh hai wo karo 😜";
var vi = "one side love hai aur one side hi rahega 🤣";
var vii = "sabka kat ta hai tera bhi katega 😆";
var viii = "bulaati hai magar jaane ka nhi 🤣";
var ix = "itna khush mat ho... pyar to laila aur majnu ka bhi success na hua 😆";
var x = "congratulations... party kab de rhe ho? 😊";
var author = " >>> @shubhamkumargupta0604";
var temp;

function process() {
    var yn = document.getElementById("yn").value;
    var ln = document.getElementById("ln").value;

    var a = yn.length;
    var b = ln.length;

    var per = "%<br>"

    if (a < 5 || b < 5)
        document.getElementById("result").innerHTML = "Please Enter Full Name";
    else {

        var r1 = yn.charCodeAt(0);
        var r2 = yn.charCodeAt(1);
        var r3 = yn.charCodeAt(2);
        var r4 = yn.charCodeAt(3);
        var r5 = yn.charCodeAt(4);

        var s1 = ln.charCodeAt(0);
        var s2 = ln.charCodeAt(1);
        var s3 = ln.charCodeAt(2);
        var s4 = ln.charCodeAt(3);
        var s5 = ln.charCodeAt(4);

        var res = r1 + r2 + r3 + r4 + r5 + s1 + s2 + s3 + s4 + s5;

        while (res > 100) {
            res = res - 100;
        }
        if (res >= 0 && res < 10)
            temp = i;
        if (res >= 10 && res < 20)
            temp = ii;
        if (res >= 20 && res < 30)
            temp = iii;
        if (res >= 30 && res < 40)
            temp = iv;
        if (res >= 40 && res < 50)
            temp = v;
        if (res >= 50 && res < 60)
            temp = vi;
        if (res >= 60 && res < 70)
            temp = vii;
        if (res >= 70 && res < 80)
            temp = viii;
        if (res >= 80 && res < 90)
            temp = ix;
        if (res >= 90 && res <= 100)
            temp = x;
            
        document.getElementById("result").innerHTML = res + per + temp + author;

    }
}

function dark() {
    document.getElementsByTagName("link")[1].setAttribute("href", "dark.css");
}

function light() {
    document.getElementsByTagName("link")[1].setAttribute("href", "style.css");
}
