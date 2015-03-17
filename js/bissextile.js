var formTab = document.getElementsByTagName('form')[0];
formTab.setAttribute('id','formularz');
var form = document.getElementById('formularz');

var wyswietlWynik = document.createElement('p');
document.body.appendChild(wyswietlWynik);


form.addEventListener('keyup', function(e) {
  var rok = form.rok.value;
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  isBissextile(rok);
  wyswietlWynik.innerText = isBissextile(rok);

});

function isBissextile(rocznik){
    var bool = rocznik % 4 == 0 && rocznik % 100 != 0 || rocznik % 400 == 0;
    return bool;
}

function dayInAYear(dzien,miesiac,rok){
  var dniWRoku = 0;

  for (var x = (miesiac - 1); x>=0; x--) {
    if(x === 1){
      if(rok % 4 == 0 && rok % 100 != 0 || rok % 400 == 0){
        dniWRoku = dniWRoku + 29;
      }
      else{
        dniWRoku = dniWRoku + 28;
      }
    }
    else if(x === 3 && x === 5 && x === 8 && x === 10){
      dniWRoku = dniWRoku + 30;
    }
    else{
      dniWRoku = dniWRoku + 31;
    }
 }
  var dniWRoku = dniWRoku + dzien + 1;
  return dniWRoku;
}
