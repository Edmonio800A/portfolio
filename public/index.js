



document.getElementById('btn-leftBar').addEventListener('click', function() {
    let nav = document.getElementById('navBar');
    let img = document.getElementById('img-profile');
    let btnNav1 = document.getElementById('btn-nav1');
    let btnNav2 = document.getElementById('btn-nav2');
    let btnNav3 = document.getElementById('btn-nav3');
    let btnNav4 = document.getElementById('btn-nav4');
    let btnNav5 = document.getElementById('btn-nav5');
    let btnNav6 = document.getElementById('btn-nav6');
    let btnNav7 = document.getElementById('btn-nav7');

    if(nav.style.display == "none") {
       btnNav1.style.animation = "showNav 2s";
       btnNav2.style.animation = "showNav 2s";
       btnNav3.style.animation = "showNav 2s";
       btnNav4.style.animation = "showNav 2s";
       btnNav5.style.animation = "showNav 2s";
       btnNav6.style.animation = "showNav 2s";
       btnNav7.style.animation = "showNav 2s";
       img.style.display = "none";
        nav.style.animation = "showNav 2s";
        nav.style.display = "block";
    }else {
      
        nav.style.display = "none";
    }
});

document.getElementById('btn-nav1').addEventListener('click', function() {
    let video1 = document.getElementById('projectsId');
    let img = document.getElementById('img-profile');
    
    if(video1.style.display == "none") {
        img.style.display = "none";
        video1.style.display = "block";
    }else {
        video1.style.display = "none";
       
    }
});

document.getElementById('link-skillsId').addEventListener('click', function() {
    let skills = document.getElementById('skills-boxId');
    let img = document.getElementById('img-profile');
    if(skills.style.display == "none") {
        img.style.display = "none";
        skills.style.display = "block";
    }else {
        skills.style.display = "none";
    }
});

document.getElementById('btn-servicesId').addEventListener('click', function() {
    let services = document.getElementById('servicesId');
    let img = document.getElementById('img-profile');
    if(services.style.display == "none") {
        img.style.display = "none";
        services.style.display = "block";
    }else {
        services.style.display = "none";
    }
});

document.getElementById('btn-nav2').addEventListener('click', function() {
    let contBox = document.getElementById('contactmeId');
    if(contBox.style.display == "none") {
        contBox.style.display = "block";
    }else {
        contBox.style.display = "none";
    }
});


const form = document.getElementById('form-contactme');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene il ricaricamento della pagina

  const data = {
    username: document.getElementById('username').value,
    comment: document.getElementById('input-textarea').value,
  };

  fetch('/api/form-contactme', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Indica che il corpo è in formato JSON
    },
    body: JSON.stringify(data), // Converte l'oggetto data in JSON
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Errore: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // Fai un redirect o gestisci la risposta come desideri
  })
  .catch(error => {
    console.error('Errore:', error);
  });
});

document.getElementById('btn-aboutId').addEventListener('click', function() {
    let about = document.getElementById('aboutId');
    let img = document.getElementById('img-profile');
    if(about.style.display == "none") {
        img.style.display = "none";
        about.style.display = "block";
    }else {
        about.style.display = "none";
    }
});