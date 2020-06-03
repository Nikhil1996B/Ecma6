// Template String

function convertToUppercase(word){
    return word ? word.toUpperCase(): '';
}


document.getElementById("name").addEventListener('keyup', function(event){
    var value = event.target.value;
    console.log(value);
});




let template = `<h1>${convertToUppercase("Hello")} , ${name}!</h1>
<p> this is an simple paragraph</p>`;

document.getElementById("paragraph").innerHTML = template;