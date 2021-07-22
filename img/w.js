function get(u) {
    var w='';
    for (let i=0;i<u.length;i++) {
        var d = abc.indexOf(u[i])+u.length;
        w+=abc[d];
    }
    return w
}