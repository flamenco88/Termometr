var formTab = document.getElementsByTagName('form')[0];
formTab.setAttribute('id','formularz');
var form = document.getElementById('formularz');

var wyswietlWynik = document.createElement('p');
document.body.appendChild(wyswietlWynik);

form.addEventListener('keyup', function(e) {
  var celsjusz = form.celsjusz.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  celsjusToFahrenheit(celsjusz);
  wyswietlWynik.innerText = celsjusToFahrenheit(celsjusz);

  // Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
});

function celsjusToFahrenheit(stopnie){
  var fahrenheit = 9 / 5 * stopnie + 32;
  return fahrenheit;
}
