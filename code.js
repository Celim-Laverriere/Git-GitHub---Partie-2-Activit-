// Pour se présenter à son ordinateur

var nomPrenom, age, ville;

nomPrenom = (prompt("Bienvenue ! \n Merci, de saisir votre nom et votre prénom : "));
age = Number(prompt("Précisez votre âge : "));
ville = (prompt("Dans quelle ville habitez-vous ? "));

alert("Bonjour " + nomPrenom + " , vous avez " + age + " ans et vous vivez à " + ville + " .");