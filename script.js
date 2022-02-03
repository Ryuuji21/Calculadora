function insert(num) //function que ao clicar no numero, ele aparece na calculadora
{
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function clean() //limpar
{
    document.getElementById('res').innerHTML = "";
}

function back() //sinal de >
{
    let resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1); //método para subtração de uma string
}

function calcular() //como JS é uma linguagem fracamente tipada, as operações ocorreram de maniera simples
{
    let resultado = document.getElementById('res').innerHTML
    if (resultado)
        {
            document.getElementById('res').innerHTML = eval(resultado) //eval metodo que faz calcular em js
        }
    else
    {
        document.getElementById('res').innerHTML = "Coloque a operação"
    }
}