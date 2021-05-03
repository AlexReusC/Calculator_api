let sel = document.getElementById("selecter")


sel.addEventListener('change', function(e){
  let secondInput = document.getElementById("second")
  if(sel.value === "raiz" || sel.value === "potencia"){
    secondInput.type = "hidden"
  }
  else{
    secondInput.type = "text"
  }
})

function suma(a,b) {
  let url = `http://localhost:8087/suma?a=${a}&b=${b}`
  $.getJSON(url,
    function(json){
      console.log(json.res)
      $('#resultado').html(json.res)
    }
  )
}

function resta(a,b) {
  let url = `http://localhost:8087/resta?a=${a}&b=${b}`
  $.getJSON(url,
    function(json){
      console.log(json.res)
      $('#resultado').html(json.res)
    }
  )
}

function multiplicacion(a,b) {
  let url = `http://localhost:8087/multiplicacion?a=${a}&b=${b}`
  $.getJSON(url,
    function(json){
      console.log(json.res)
      $('#resultado').html(json.res)
    }
  )
}

function division(a,b) {
  console.log(a, b)
  let url = `http://localhost:8087/division?a=${a}&b=${b}`
  $.getJSON(url,
    function(json){
      console.log(json.res)
      $('#resultado').html(json.res)
    }
  )
}

function potencia(a,b) {
  let url = `http://localhost:8087/potencia?a=${a}`
  $.getJSON(url,
    function(json){
      console.log(json.res)
      $('#resultado').html(json.res)
    }
  )
}

function raiz(a,b) {
  let url = `http://localhost:8087/raiz?a=${a}`
  $.getJSON(url,
    function(json){
      console.log(json.res)
      $('#resultado').html(json.res)
    }
  )
}

function calcularOperacion() {
  let operation = document.getElementById("selecter").value
  let firstField = parseInt(document.getElementById("first").value)
  let secondField = parseInt(document.getElementById("second").value)
  let result = document.getElementById("resultado")
  switch(operation){
    case "suma":
      suma(firstField, secondField)
      break;
    case "resta":
      resta(firstField, secondField)
      break;
    case "multiplicacion":
      multiplicacion(firstField, secondField)
      break;
    case "division":
      division(firstField, secondField)
      break;
    case "raiz":
      raiz(firstField)
      break;
    case "potencia":
      potencia(firstField)
      break;
  }
}
