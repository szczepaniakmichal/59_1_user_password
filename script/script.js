// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)
//30 minut nauki

const input = document.querySelector("input");
const div = document.querySelector('div');

const passwords = ['jE', 'dw', 'TR'];
const passwordToLowerCase = passwords.values();
let pass = [];
for (const val of passwordToLowerCase) {
    pass.push(val.toLowerCase());
}

const messages = ["super", "działa!", 'wow!'];

const showMessage = (e) => {
    div.textContent = '';
    const value = e.target.value.toLowerCase();
    pass.forEach((password, index) => {
        if (value === password) {
            div.textContent = messages[index];
        }
    })
};

input.addEventListener("input", showMessage);



