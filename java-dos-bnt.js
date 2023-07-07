// javascript para remover coisas//
function removerCaracteres() {
    var inputText = document.getElementById("input-text").value;
    document.getElementById("alert-text").innerHTML = ""

        // Utilizando expressão regular para substituir os caracteres desejados
    var outputText = inputText.replace(/[+* ,.,\/]/g,'');

    document.getElementById("output-text").textContent = outputText;
    }
    //javasript do bnt copiar //

window.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.querySelector('.copy-button');
    var textoCopiado = document.getElementById('output-text');

    copyButton.addEventListener('click', function() {
        var textoSelecionado = window.getSelection();
        var range = document.createRange();

        range.selectNode(textoCopiado);
        textoSelecionado.removeAllRanges();
        textoSelecionado.addRange(range);

        document.execCommand('copy');

        document.getElementById("alert-text").innerHTML = "Pronto Copiado"

    });
    });
