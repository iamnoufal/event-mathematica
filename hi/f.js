function showNext(z) {
    document.getElementById('clue'+z).style.display='block';
    document.getElementById('head'+z).innerHTML="Clue"+z;
    document.getElementById('img'+z).src='img/img'+z+'.jpeg';
}