function checkAns(x) {
    var ans = document.getElementById('ans'+x).value;
    var wrong = document.getElementById("wrong");
    if (crt(ans,x)) {
        document.getElementById('clue'+x).innerHTML='';
        st(ans,x);
    } else {
        alert("The answer "+ans+" typed for clue "+x+" is incorrect");
        document.getElementById('hint'+x).innerHTML=hints[parseInt(x)];
    }
}