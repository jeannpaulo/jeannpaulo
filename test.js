function treinonew () {
    let treino = document.getElementById("treino").value;
    let rep = document.getElementById("rep").value;
    localStorage.setItem(treino, rep);
    document.getElementById("titulo-treino").innerHTML = treino;
    document.getElementById("sub-rep").innerHTML = rep;
}

