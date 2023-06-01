


let etudiants = JSON.parse(localStorage.getItem('etudiant'))==null?[]:JSON.parse(localStorage.getItem('etudiant'));
let table=document.getElementById('table_etudiant');

let search_tab=document.getElementById('search_etud');

search_tab.addEventListener("input", (event) => {
  let filteredEtudiants = etudiants.filter((etudiant) => {
    return (etudiant.nom.includes(search_tab.value) ||etudiant.prenom.includes(search_tab.value) || etudiant.mail.includes(search_tab.value)||etudiant.id.includes(search_tab.value)||etudiant.classe.includes(search_tab.value)||etudiant.age.includes(search_tab.value));
  });

  table.innerHTML = "";
  entete(table);

  filteredEtudiants.forEach((etudiant) => {
    ajouter_etudiant(etudiant, table);
  });
});
let select_classe=document.getElementById("select");
select_classe.addEventListener("change",(event)=>{
  let selected_element="";
  for(let i=0;i<select_classe.length;i++)
  {
    if(select_classe[i].selected)
    {
      selected_element=select_classe[i];
     
    }
  }

  let filteredEtudiants = etudiants.filter((etudiant) => {
    
    return etudiant.classe.includes(selected_element.value);
  
  });

  console.log(filteredEtudiants);
  table.innerHTML = "";
  entete(table);

  filteredEtudiants.forEach((etudiant) => {
    ajouter_etudiant(etudiant,table);
  });
  
})
function creer_etudiant()
{
  
  let prenom = document.getElementById('prenom').value;
  let nom = document.getElementById('nom').value;
  let age = document.getElementById('Age').value;
  let mail = document.getElementById('InputEmail').value;
  let classe = document.getElementById('inputClasse').value;
  let CIN = document.getElementById('inputCIN').value;
  let id = Math.random().toString().substring(2, 7);
  let etudiant = {
    id,
    prenom,
    nom,
    age,
    mail,
    classe,
    CIN
  };
  
  etudiants.push(etudiant);
  localStorage.setItem('etudiant', JSON.stringify(etudiants));
  affichage_etudiant();
  
}

function update_btn(id){
  
  let btn=document.createElement("button");
  btn.id=id;
  btn.innerHTML = 'update';
  btn.classList.add("btn");
  btn.classList.add("btn-outline-success");
  btn.classList.add("bt-update");
  return btn;

}
function delete_btn(id)
{
  
  let btn=document.createElement("button");
  btn.id=id;
  btn.innerHTML = 'delete';
  btn.classList.add("btn");
  btn.classList.add("btn-outline-danger");
  


  return btn;
  
}
function entete(tab)
{
  let tete=document.createElement("tr");
  let id=document.createTextNode("id");
  let td_id=document.createElement("td");
  td_id.appendChild(id);
  let prenom=document.createTextNode("prenom");
  let td_prenom=document.createElement('td');
  td_prenom.appendChild(prenom);
  let nom=document.createTextNode("nom");
  let td_nom=document.createElement('td');
  td_nom.appendChild(nom);
  let age=document.createTextNode("age");
  let td_age=document.createElement('td');
  td_age.appendChild(age)
  let classe=document.createTextNode("classe");
  let td_classe=document.createElement('td');
  td_classe.appendChild(classe);
  let CIN=document.createTextNode("CIN");
  let td_CIN=document.createElement('td');
  td_CIN.appendChild(CIN);
  let mail=document.createTextNode("E-mail");
  let td_mail=document.createElement("td");
  td_mail.appendChild(mail);
  let operation_txt=document.createTextNode("operation");
  let td_operation=document.createElement('td');
  td_operation.appendChild(operation_txt);
  tete.appendChild(td_id);
  tete.appendChild(td_prenom);
  tete.appendChild(td_nom);
  tete.appendChild(td_age);
  tete.appendChild(td_mail);
  tete.appendChild(td_classe);
  tete.appendChild(td_CIN);
  tete.appendChild(td_operation);
  let thead=document.createElement("thead");

  thead.appendChild(tete);
  tab.appendChild(thead);
}
function ajouter_etudiant(etudiant,tab)
{
  let mtr=document.createElement("tr");
  let tdid=document.createElement("td");
  let txtid=document.createTextNode(etudiant.id)
  tdid.appendChild(txtid);
  let tdprenom=document.createElement("td");
  let txtprenom=document.createTextNode(etudiant.prenom)
  tdprenom.appendChild(txtprenom);
  let tdnom=document.createElement("td");
  let txtnom=document.createTextNode(etudiant.nom);
  tdnom.appendChild(txtnom);
  let tdage=document.createElement("td");
  let txtage=document.createTextNode(etudiant.age);
  tdage.appendChild(txtage);
  let tdmail=document.createElement("td");
  let txtmail=document.createTextNode(etudiant.mail);
  tdmail.appendChild(txtmail); 
  let tdclasse=document.createElement("td");
  let txtclasse=document.createTextNode(etudiant.classe);
  tdclasse.appendChild(txtclasse);
  let tdCIN=document.createElement("td");
  let txtCIN=document.createTextNode(etudiant.CIN);
  tdCIN.appendChild(txtCIN);
  let td_operation=document.createElement("td");
  let btn_update=update_btn(etudiant.id);
  let btn_deletee=delete_btn(etudiant.id);
  td_operation.appendChild(btn_update);
  td_operation.appendChild(btn_deletee);
  
  btn_update.setAttribute("data-bs-toggle","modal");
  btn_update.setAttribute("data-bs-target","#update_etudiant");

  td_operation.firstChild.addEventListener("click",(event) =>{

    update_etudiant(etudiant.id);
  })
  td_operation.lastChild.addEventListener("click",(event) => {

    delete_etudiant(etudiant.id);

  })
 
  mtr.appendChild(tdid); 
  mtr.appendChild(tdprenom); 
  mtr.appendChild(tdnom); 
  mtr.appendChild(tdage); 
  mtr.appendChild(tdmail); 
  mtr.appendChild(tdclasse); 
  mtr.appendChild(tdCIN);
  mtr.appendChild(td_operation);

  tab.appendChild(mtr);
}

function affichage_etudiant()
{
  
  
  
  let table=document.getElementById('table_etudiant');
 table.classList.add("pure-table");
  table.innerHTML="";   
  entete(table);
  etudiants.forEach(val => {
    ajouter_etudiant(val, table);
    
  });
  
  
  document.getElementById("Consultation_des_Etudiants").appendChild(table);
  
  
}

affichage_etudiant();


function delete_etudiant(id)
{
  console.log("hello");
if(confirm("vous voulez supprimer cet etudiant d'id: "+id)){
for(let i=0 ; i<etudiants.length;i++)
{

if(etudiants[i].id==id)
{
    etudiants.splice(i,1);
}
}
localStorage.setItem('etudiant', JSON.stringify(etudiants));
table.innerHTML="";
affichage_etudiant();
}
}

function update_etudiant(id)
{
  
  let update_name=document.getElementById('nom_update');
  let update_fname=document.getElementById('prenom_update');
  let update_age=document.getElementById('age_update');
  let update_mail=document.getElementById('InputEmail_update');
  let update_cin=document.getElementById('inputCIN_update');
  let update_classe=document.getElementById('inputClasse_update');
  let indice;
 for(let i=0;i<etudiants.length;i++)
  {

      if(etudiants[i].id==id)
      {
        console.log(etudiants[i]);
        update_name.value=etudiants[i].nom;
        update_fname.value=etudiants[i].prenom;
        update_age.value=etudiants[i].age;
        update_mail.value=etudiants[i].mail;
        update_cin.value=etudiants[i].CIN;
        update_classe.value=etudiants[i].classe;
        indice=i;
        
      }



  }
  
  let btn_update=document.getElementById("upd-etud");
  btn_update.addEventListener("click",(event)=> {

     etudiants[indice].nom=document.getElementById('nom_update').value;
     etudiants[indice].prenom=document.getElementById('prenom_update').value;
     etudiants[indice].age=document.getElementById('age_update').value;
     etudiants[indice].mail=document.getElementById('InputEmail_update').value;
     etudiants[indice].CIN=document.getElementById('inputCIN_update').value;
     etudiants[indice].classe=document.getElementById('inputClasse_update').value;

     localStorage.setItem('etudiant', JSON.stringify(etudiants));
    table.innerHTML = "";
    affichage_etudiant();
    }
  )
}
function valid_mail()
{

  let mail=document.getElementById('InputEmail');
  console.log(mail);
  if( mail.value.indexOf('@') == -1 || mail.value.indexOf('.') == -1)
  {
    alert("e-mail invalid");
  }
}
function valid_CIN()
{


let cin=document.getElementById("inputCIN");
if(cin.value.length!=8)
{
  alert("nombre de CIN invalid!");
}


}

function del(){

  localStorage.clear();
}