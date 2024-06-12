function toggleCollapse(id) {
    var content = document.getElementById(id);
    if (content.classList.contains("show")) {
        content.classList.remove("show");
    } else {
        content.classList.add("show");
    }
}

// Adiciona a classe de cor correta aos inputs ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll("input[type=radio]");
    inputs.forEach(function(input) {
        input.addEventListener("change", function() {
            changeInputColor(this);
        });
        changeInputColor(input);
    });
});

function changeInputColor(input) {
    var row = input.parentElement.parentElement; // Obtém a linha do input
    row.classList.remove("red", "green","gray"); // Remove todas as classes de cor
    if (input.checked) {
        if (input.value === "NC") {
            row.classList.add("red");
        } else if (input.value === "C") {
            row.classList.add("green");
        } else if (input.value === "NA") {
            row.classList.add("gray");
        }
    }
}
const db= new Dexie ('Auditoria')
db.version(1).stores( e:{ items: '++id,situacao'})

const itemForm = document.getElementById(elementId:'ItemsForm')
const itemDiv = document.getElementById(elementId:'ItemsDiv')
