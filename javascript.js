window.onload = function () {

    var segundos = 00;
    var dezenas = 00;
    var appendDezenas = document.getElementById("dezenas")
    var appendSegundos = document.getElementById("segundos")
    var botaoIniciar = document.getElementById('botaoIniciar');
    var botaoParar = document.getElementById('botaoParar');
    var botaoReiniciar = document.getElementById('botaoReiniciar');
    var Interval;

    botaoIniciar.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    botaoParar.onclick = function () {
        clearInterval(Interval);
    }


    botaoReiniciar.onclick = function () {
        clearInterval(Interval);
        dezenas = "00";
        segundos = "00";
        appendDezenas.innerHTML = dezenas;
        appendSegundos.innerHTML = segundos;
    }



    function startTimer() {
        dezenas++;

        if (dezenas <= 9) {
            appendDezenas.innerHTML = "0" + dezenas;
        }

        if (dezenas > 9) {
            appendDezenas.innerHTML = dezenas;

        }

        if (dezenas > 99) {
            console.log("segundos");
            segundos++;
            appendSegundos.innerHTML = "0" + segundos;
            dezenas = 0;
            appendDezenas.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            appendSegundos.innerHTML = segundos;
        }

    }


}