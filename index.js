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


const Admission = document.querySelector('#admission');
const AdmissionLinks = document.querySelector('#admissionLinks');
const Academics = document.querySelector('#academics');
const AcademicsLinks = document.querySelector('#academicsLinks');
const SchoolPortal = document.querySelector('#schoolPortal');
const SchoolPortalLinks = document.querySelector('#schoolPortalLink');

Admission.addEventListener('click', () =>{
    console.log('working')
    if(AdmissionLinks.style.display === "none" ){
        AdmissionLinks.style.display = "block";
        AcademicsLinks.style.display = "none"
    } else {
        AdmissionLinks.style.display = "none";
    }
});

Academics.addEventListener('click', () =>{
    console.log('working')
    if(AcademicsLinks.style.display === "none" ){
        AcademicsLinks.style.display = "block";
        AdmissionLinks.style.display = "none";
    } else {
        AcademicsLinks.style.display = "none";
    }
});


SchoolPortal.addEventListener('click', ()=>{
    console.log("working");
    if(SchoolPortalLinks.style.display === "none" ){
        SchoolPortalLinks.style.display = "block";
        AcademicsLinks.style.display = "none";
    } else {
        SchoolPortalLinks.style.display = "none";
        AcademicsLinks.style.display = "block";
    }
});