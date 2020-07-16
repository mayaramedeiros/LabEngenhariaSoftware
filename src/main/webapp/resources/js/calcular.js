var a;
var b = 0;
var operacao = null;

//ver logica pra quando é raiz de um numero e ver como receber o resultado do projeto do back

function display(valor){
    document.getElementById('display').value += valor;
}

function numero(num){
    display(num);

    if(operacao != null){
        b += num;
        document.querySelector('[id="result"]').disabled = false;
    }
    disableOp(false);
    document.querySelector('[id="rad"]').disabled = true;
};

function operacaoCalc(op){
    var check = document.getElementById('display').value;

    if(check == null || check == "" && op == "-"){
        display(op);
        document.querySelector('[id="subtracao"]').disabled = true;
        document.querySelector('[id="rad"]').disabled = true;
    } 
    else if(operacao == null && op != "raiz"){
        a = document.getElementById('display').value;
        operacao = op;
        display(op);
        disableOp(true);
        document.querySelector('[id="rad"]').disabled = true;
        document.querySelector('[id="subtracao"]').disabled = false;
    }
    else if(op == "raiz"){
        a = 0;
        operacao = op;
        display(op);
        disableOp(true);
        document.querySelector('[id="rad"]').disabled = true;
    }
    else{
        numero(op);
    }    
}

function limpar(){
    document.getElementById('display').value = "";
    a = "";
    b = 0;
    operacao = null;
    disableOp(true);
    document.querySelector('[id="subtracao"]').disabled = false;
    document.querySelector('[id="rad"]').disabled = false;
}

function isFloat(ponto){
    display(ponto);
}

function disableOp(val){
    if(val == true){
        var elems = document.querySelectorAll('[id="opr"]');
        for (var i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
    } else{
        var elems = document.querySelectorAll('[id="opr"]');
        for (var i = 0; i < elems.length; i++) {
            elems[i].disabled = false;
        }
    }
    
}

function result(valor){
    document.getElementById('display').value += valor;
    limpar();
}

function resultado(){
    $.ajax({
        url: '/calculadora/calcular',
        method: 'POST',
        data:{a:a, b:b, operacao:operacao},
        success: function(response) {
            console.log(response);
            display("=");
            result(response);
            //window.location.href = "http://localhost:8080/calculadora/calcular"
          },
          error: function (response) {
            alert(response);
          }
    });
}

function historico(){
    window.location.href = "http://localhost:8080/calculadora/historico";
}