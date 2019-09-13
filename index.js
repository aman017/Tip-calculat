// eslint-disable-next-line no-unused-vars
function calculate() {
  var v = document.getElementById('rs').value
  var perc = document.getElementById('per').value
  var persons = document.getElementById('per').value
  var o =
    'Tip amount' +
    '<br> <b>' +
    Math.round((v * perc) / 100 / persons) +
    '</b>' +
    ' rs per person'

  var m = (document.getElementById('show').innerHTML = o)
}
