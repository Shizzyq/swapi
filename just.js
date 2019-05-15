function showDiv(){
    document.querySelector('#info').style.visibility = 'visible';
}

function getInfo() {
    let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber

    axios.get(apiUrl).then(function(response){
        updateInfo(response.data)
    });
}

function updateInfo(data){
    document.getElementById('name').innerText = 'name: ' + data.name;
    document.getElementById('height').innerText = 'height: ' + data.height;
    document.getElementById('mass').innerText = 'mass: ' + data.mass;
    document.getElementById('birth-year').innerText = 'birth: ' + data.birth_year;
}


document.getElementById('button').addEventListener('click', getInfo);
