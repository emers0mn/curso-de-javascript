let pclass = document.getElementsByClassName("paragrafo");

for(let i in pclass){
    pclass[i].style = "color: green";
}

pclass[0].setAttribute("hidden")