function mission(){
    document.getElementById('fmis').style.backgroundColor="#7AB730";
    document.getElementById('fvis').style.backgroundColor="rgb(148, 147, 147)";
}

function vission() {
    document.getElementById('fmis').style.backgroundColor="rgb(148, 147, 147)";
    document.getElementById('fvis').style.backgroundColor="#7AB730";
}

const fvis = document.querySelector('#fvis');
const missionP = document.querySelector('#missionP');
const vissionP = document.querySelector('#vissionP');
const fmis = document.querySelector('#fmis');

fmis.addEventListener('click',function(){
    vissionP.style.display = "none";
    missionP.style.display = "block";
})

fvis.addEventListener('click',function(){
    missionP.style.display = "none";
    vissionP.style.display = "block"
})
