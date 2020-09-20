let width = prompt("Введите ширину бассейна");
let length = prompt("Введите длину бассейна");
let depth = prompt("Введите глубину бассейна");
let volume = width * length * depth;

document.write('<style> .volume { color: orangered; font-size: 3.5em;} </style>');
document.write(`<p class="volume">Объём бассейна составляет ${volume}л</p>`);