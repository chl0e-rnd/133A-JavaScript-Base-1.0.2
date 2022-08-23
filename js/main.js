/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Chloé Renaud
 * @version 0.2
 * @since   2019-08-22
 */


'use strict'; // Demande une interprétation stricte du code

  //let a = 'Bonjour';
  //let b = 'toto';

  const a = Number(prompt('Entrez un nombre : '));
  const b = Number(prompt('Entrez un nombre : '));

  if( isNaN(a) || isNaN(b)) {
    alert('Entrez des nombres !');
  } else {
    alert(`Bonjour, ${ a + b } !`);
  }
  console.log(a, b);

