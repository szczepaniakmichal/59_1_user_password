// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['je', 'dw'];
const messages = ["super", "działa!"];

const showMessage = (e) => {
    const value = e.target.value;
    passwords.forEach((pass, index) => {
        if (value === pass) {

        }
    })
};

input.addEventListener("input", showMessage);



