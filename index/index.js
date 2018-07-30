function fetchPages(name,position){
    fetch(name).then(function(response){response.text().then(function(text){
        document.querySelector(position).innerHTML = text;
        })
    })
}

