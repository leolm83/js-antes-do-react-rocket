const idade = null;

//falsy values no javascript 

/*

neste caso o operador || teria um 
valor inesperado quando o valor de idade fosse um falsy value em JS
falsy values:
  undefined , null , NaN , 0 , "" (empty string), and false
  fonte: 
  https://www.freecodecamp.org/news/falsy-values-in-javascript/#:~:text=A%20falsy%20value%20is%20something,)%2C%20and%20false%20of%20course.
*/
console.log(idade || 'NAO INFORMADO');


/*
nullish operator JS

*/

document.body.innerText = "HELLO!!";