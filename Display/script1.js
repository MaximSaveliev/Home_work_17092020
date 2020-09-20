let width = prompt("Введите ширину экрана");
let height = prompt("Введите высоту экрана");

if (width > height) {document.write(`<h1>Альбомная ${width}x${height}</h1> `)} 
else {document.write(`<h1>Книжная ${width}x${height}</h1>`)};

width > height ? document.write(`<h3>Альбомная ${width}x${height}</h3> `) : document.write(`<h3>Книжная ${width}x${height}</h3>`);

function myFunction() {
    let widthf , heightf, text;
  
    // Get the value of the input field with id="numb1" and id="numb2"
    widthf = document.getElementById("numb1").value;
    heightf = document.getElementById("numb2").value;

    if (widthf == heightf) {
        text = `Квадрат ${widthf}x${heightf} Такого экрана не существует ;) !!!`;}
    else if (widthf > heightf) {
        text = `Альбомная ${widthf}x${heightf}`;} 
    else {
        text = `Книжная ${widthf}x${heightf}`;};
    
    document.getElementById("resalt").innerHTML = text;
}