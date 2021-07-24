function checkAns(x) {
    var ans = document.getElementById('ans'+x).value;
    var wrong = document.getElementById("wrong");
    if (crt(ans,x)) {
        document.getElementById('clue'+x).innerHTML='';
        st(ans,x);
    } else {
        document.getElementById('err'+x).innerHTML='The Answer <b>'+ans+'</b> typed for <b>Clue '+x+'</b> is incorrect'
        document.getElementById('hint'+x).innerHTML='<b>Hint:</b> '+hints[parseInt(x)];
    }
}