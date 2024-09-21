



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

document.getElementById('btn-nav4').addEventListener('click', function() {
    let video1 = document.getElementById('videos-arts-box');
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