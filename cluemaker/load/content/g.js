function loadClues() {
    var container="";
    var start = localStorage.getItem("cracked");
    if (start==null) {
        start=1;
    }
    for(let i=start;i<11;i++) {
        container+="<div id='clue"+i+"' class='clue' style='display:none'>";
        container+="<h3 id='head"+i+"'></h3>";
        container+="<img src='' id='img"+i+"' />";
        container+="<div class='type-ans'>"
        container+="<input type='text' class='type' id='ans"+i+"' />";
        container+="<input type='submit' class='submit' onclick='checkAns("+i+")' value='Check!!' /></div>";
        container+="<p id='err"+i+"'></p>";
        container+="<p id='hint"+i+"'></p>";
        container+="</div>";
    }
    clues.innerHTML=container;
    showNext(start)
}