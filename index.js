const OpenHambuger = document.querySelector('#open');
const CloseHambuger = document.querySelector('#close');
const Navigation = document.querySelector('header nav');

OpenHambuger.addEventListener('click', () =>{
    if(Navigation.style.display === "none"){
        Navigation.style.display = "block";
        OpenHambuger.style.display = "none";
        CloseHambuger.style.display = "block";
    } else {
        Navigation.style.display = "none";
    }
})

CloseHambuger.addEventListener('click', () =>{
    if(Navigation.style.display === "block"){
        Navigation.style.display = "none";
        CloseHambuger.style.display = "none";
        OpenHambuger.style.display = "block";
    } else {
        Navigation.style.display = "none";
    }
})