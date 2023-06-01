let etudiants = [];
function creer_etudiant()
{
let prenom=document.getElementById('prenom').value;
let nom=document.getElementById('nom').value;
let age=document.getElementById('Age').value;
let mail=document.getElementById('InputEmail').value;
let addresse=document.getElementById('inputAddress').value;
let CIN=document.getElementById('inputCIN').value;

console.log(prenom,nom,age,mail,addresse);
var etudiant={
    "prenom":prenom,
    "nom":nom,
    "age":age,
    "mail":mail,
    "addresse":addresse
   
};
etudiants.push(etudiant);
localStorage.setItem('etudiant', JSON.stringify(etudiant));
placer_etudiant();

}
function placer_etudiant()
{
let etudiant=JSON.parse(localStorage.getItem('etudiant'));
let container=document.getElementById("Consultation_des_Etudiants");
let  carte_etud=document.createElement('div');
carte_etud.innerHTML=etudiant;
carte_etud.className="Les_etudiants";
container.appendChild(carte_etud);
}


