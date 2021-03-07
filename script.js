//dicionario com as perguntas como key e as repostas como value,
//sabendo que o primeiro value é a reposta certa
//ex:  perguntas{"Calcule: 1+1":[2,0,1,4]};
//reposta certa -> perguntas["Calcule: 1+1"][0]
function definirPerguntas()
{
    let perguntas = 
    {
        "Qual das seguintes expressões é equivalente a um número irracional?":["𝜋 - 3","𝜋 : 𝜋","𝜋⁰","⁷⁄₄"],
        "Uma das soluções de √64 é":["8","6","4","7"],
        "Qual destas expressões é equivalente a 2⁻² ?":["¹⁄₍₂₎²","²⁄₋₂","¹⁄₍₋₂₎⁻²","²⁄₂"],
        "Qual a notação científica de 0,0037 ?":["3,7x10⁻³","37x10⁻⁴","37x100⁻³","3,7x100⁻⁴"],
        "A área de uma superfície esférica é calculada por ":["4𝜋r²","(⁴⁄₃)𝜋r³","2𝜋r","(4𝜋r)²"],
        "Qual destes valores representa a tangente de 45 graus ?":["1","0.5","cos(0)/sen(0)","2"],
        "Sabendo que 25% de x é igual a 16, qual o valor de x?":["64","160","24","32"],
        "Qual destas equações está correta?":["sen(270) = -1","cos(45) = 0.5","sen(180) = -1","sen(0) = 1"],
        "(⅓)⁻² é igual a":["9","6","⅙","⅑"],
        "Qual destas expressões é igual a 1?":["sen(90)⁻²","sen(0)⁻¹","cos(90)⁻¹","-tan(45)"],
        "200100 representado em notação científica é: ":["2,001x10⁵","2,001x10⁻⁵","2001x10²","2001x10⁻²"],
        "tan(x) pode ser representada por:":["sen(x)/cos(x)","cos(x)/sen(x)","sen(x)-cos(x)","cos(x)-sen(x)"],
        "Qual a notação científica de 12,03?":["1,203x10¹","1203x10⁻²","1,203","1203x10²"],
        "Qual o valor de 5,12x10³":["5120","512","0,00512","0,0512"],
        "Uma das soluções de √49 é ":["-7","8","6","9"],
        "(¹⁄₂)⁻² é igual a":["4","¼","-4","¹⁄₋₄"],
        "²⁄₍₃₎⁻¹ é igual a":["6","9","³⁄₂","3"],
        "Qual dos seguintes números pertence ao conjunto dos números irracionais?":["𝜋⁻¹","12","⅐","0,5"],
        "9 pode ser representado por:":["¹⁄₍₋₃₎⁻²","(¹⁄₉)⁻²","(⅓)⁻¹","(⅓)²"],
        "tan(x)/sen(x) é igual a ":["1/(cos(x))","sen(x)²","cos(x)²","sen(x)"]
    };
    return perguntas;
}


/* meter um array em random a usar Durstenfeld shuffle algorithm */
function randomizeArray(array) {
    let newArray = array;
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}

//da display na pagina da pergunta actual (começando na pergunta 0)
function displayPergunta(nPergunta)
{
    let arrayPerguntas = Object.keys(dicionarioFinal);
    //mostrar a pergunta:
    document.getElementById("pergunta").innerHTML = arrayPerguntas[nPergunta];

    //mostrar as respostas
    document.getElementById("opcao1").innerHTML = dicionarioFinal[arrayPerguntas[nPergunta]][0];
    document.getElementById("opcao2").innerHTML = dicionarioFinal[arrayPerguntas[nPergunta]][1];
    document.getElementById("opcao3").innerHTML = dicionarioFinal[arrayPerguntas[nPergunta]][2];
    document.getElementById("opcao4").innerHTML = dicionarioFinal[arrayPerguntas[nPergunta]][3];
        
    // mudar o numero da questao que estamos actualmente:
    document.getElementById("questoes_totais").innerHTML = arrayPerguntas.length;
    document.getElementById("n_questao_actual").innerHTML = nPergunta +1;

    //certificar que todos os botoes estao a cinzento
    let idButao;
    for(idButao = 1; idButao < 5; idButao++)
    {
        if(document.getElementById('opcao'+idButao).classList.contains('btn-danger'))
        {
            document.getElementById('opcao' + idButao).classList.remove('btn-danger');
            document.getElementById('opcao' + idButao).classList.add('btn-outline-secondary');     
        }

        else if(document.getElementById('opcao'+idButao).classList.contains('btn-success'))
        {
            document.getElementById('opcao' + idButao).classList.remove('btn-success');
            document.getElementById('opcao' + idButao).classList.add('btn-outline-secondary');
        }
    }

    //remover o botao de começar quizz
    if(document.getElementById("comecar"))
    {
        document.getElementById("comecar").remove();
    }
    //remover a imagem do banner
    if(document.getElementById("imagemBanner"))
    {
        document.getElementById("imagemBanner").remove();
    }


    //meter o botao da proxima questao invisivel
    document.getElementById('proxima').style.visibility = 'hidden';
    //meter a imagem de certo ou errado invisivel
    document.getElementById('imagemResposta').style.visibility = 'visible';
    document.getElementById('imagemResposta').style.visibility = 'hidden';
    //meter o botao de recomeçar quizz invisivel
    document.getElementById('recomecar').style.visibility = 'hidden';

    //dar enable dos butoes das opcoes
    document.getElementById("opcao1").disabled = false;
    document.getElementById("opcao2").disabled = false;
    document.getElementById("opcao3").disabled = false;
    document.getElementById("opcao4").disabled = false;

    //meter as opcoes visiveis
    document.getElementById("opcao1").style.visibility = 'visible';
    document.getElementById("opcao2").style.visibility = 'visible';
    document.getElementById("opcao3").style.visibility = 'visible';
    document.getElementById("opcao4").style.visibility = 'visible';

    //mostrar a navbar e a pergunta
    document.getElementById("navigation").style.visibility = 'visible';
    document.getElementById("pergunta").style.visibility = 'visible';

}

//perguntar se quer começar o quizz, chamado apenas quando a pagina é carregada
function perguntarComeçar()
{
    //tornar a navbar, pergunta e opçoes invisiveis
    document.getElementById("navigation").style.visibility = 'hidden';
    document.getElementById("pergunta").style.visibility = 'hidden';
    document.getElementById("opcoes").style.visibility = 'hidden';
    document.getElementById("imagemResposta").style.visibility = 'hidden';
    document.getElementById("resultado").style.visibility = 'hidden';
    document.getElementById("simboloQuizz").style.visibility = 'hidden';
    

    //tornar o butao de proxima pergunta e de recomeçar quizz invisiveis
    document.getElementById("proxima").style.visibility = 'hidden';
    document.getElementById("recomecar").style.visibility = 'hidden';

    //isto serve para tirar o div gigante assim que tudo estiver carregado como deve ser
    if(document.getElementById("divDebbuger"))
    {
        document.getElementById("divDebbuger").remove();
    }

    //tornar o butao para começar o quizz visivel
    document.getElementById("comecar").style.visibility = 'visible';
}


//guarda a resposta á pergunta anterior e mostra a proxima pergunta
function proximaPergunta()
{
    if(questaoActual == Object.keys(dicionarioFinal).length -1)
    {
        //perguntar se o cliente quer recomeçar o quizz
        perguntarMostrarResultados();

    }
    else
    {
        //incrementar pergunta actual
        questaoActual ++;
        //dar display da proxima pergunta
        displayPergunta(questaoActual);
    }
}

//chamada quando o utilizador dá uma resposta
function resposta(nResposta)
{
    //receber a pergunta actual e a resposta dada 
    let dicPerguntas = definirPerguntas();
    let listaPerguntas = Object.keys(dicionarioFinal);
    let pergunta = listaPerguntas[questaoActual];
    respostaDada = dicionarioFinal[pergunta][nResposta];

    //dar disable dos botoes todos
    document.getElementById("opcao1").disabled = true;
    document.getElementById("opcao2").disabled = true;
    document.getElementById("opcao3").disabled = true;
    document.getElementById("opcao4").disabled = true;

    if(respostaDada == dicPerguntas[pergunta][0])
    {
        //a resposta ta certa
        respostasCertas ++;
        perguntarProxima(nResposta, nResposta);
    }
    else
    {
        //a resposta ta errada
        //encontrar o numero da resposta certa no dicionarioFinal
        let respostaCerta;
        for(respostaCerta = 0; respostaCerta < 4; respostaCerta++)
        {
            if (dicionarioFinal[pergunta][respostaCerta] == dicPerguntas[pergunta][0])
            {
                //encontramos a resposta certa
                break;
            }
        }
        perguntarProxima(nResposta, respostaCerta);
    }
    
}

//perguntar ao utilizador se quer passar para a proxima pergunta
//e mostrar se a resposta estava certa, e qual era, passamos 2 argumentos, 
//a resposta dada e a resposta certa (em forma de numero)
function perguntarProxima(respostaDada, respostaCerta)
{
    
    if(respostaDada == respostaCerta)
    {
        //a resposta estava certa, mostramos a imagem da resposta certa
        document.getElementById('imagemResposta').src = "imagens/certo.png";
    }
    else
    {
        //a resposta estava errada, mostramos a imagem da resposta errada
        document.getElementById('imagemResposta').src = "imagens/errado.png";

        //agora mudamos a cor da resposta escolhida para vermelho
        let numOpcaoDada = respostaDada +1
        document.getElementById('opcao' + numOpcaoDada).classList.remove('btn-outline-secondary');
        document.getElementById('opcao' + numOpcaoDada).classList.add('btn-danger');
    }

    //mudamos a cor da resposta certa para verde
    let numOpcaoCorreta = respostaCerta +1;
    document.getElementById('opcao' + numOpcaoCorreta).classList.remove('btn-outline-secondary');
    document.getElementById('opcao' + numOpcaoCorreta).classList.add('btn-success');

    //e mostramos a imagem que corresponde á resposta:
    document.getElementById('imagemResposta').style.visibility = 'visible';
    document.getElementById('proxima').style.visibility = 'visible';

    
}

//perguntar se quer repetir as perguntas
function perguntarMostrarResultados()
{
    document.getElementById('resultado').style.visibility = 'visible';
    //meter o botao da proxima questao invisivel
    document.getElementById('proxima').style.visibility = 'hidden';
}


//carregar as questoes no load da pagina
function carregar_questoes()
{
    //criar a ordem das perguntas, aleatoriamente
    //fazemos uma lista com as chaves do dicionario "perguntas" e depois 
    //metemos esta lista numa ordem random
    let perguntas = definirPerguntas();
    let listaPerguntas = Object.keys(perguntas);
    listaPerguntas = randomizeArray(listaPerguntas);

    //agora que a lista de perguntas ta random vamos fazer outro dicionario com as
    //perguntas numa ordem random e meter a ordem das 
    //respostas tambem random, este dicionario vai ser global:
    globalThis.dicionarioFinal = {};
    let i;
    for (i=0; i < listaPerguntas.length; i++)
    {
        dicionarioFinal[listaPerguntas[i]] = randomizeArray(perguntas[listaPerguntas[i]]);
    }
    //vamos definir uma global para guardar a pergunta actual
    globalThis.questaoActual = 0;
    //vamos definir uma global para guardar a quantidade de perguntas certas
    globalThis.respostasCertas = 0;
    //podemos agora dar display da primeira pergunta:
    displayPergunta(0);
}

function apresentarResultados()
{
    let arrayPerguntas = Object.keys(dicionarioFinal);
    numeroPerguntas = arrayPerguntas.length;
    //limpar o ecrã todo
    document.getElementById("navigation").remove();
    document.getElementById("containerImagemResposta").remove();
    document.getElementById("opcoes").remove();
    document.getElementById("resultado").remove();
    document.getElementById("proxima").remove();
    document.getElementById("simboloQuizz").style.visibility = 'visible';
    
    //mostrar o resultado final
    document.getElementById("pergunta").style.fontSize = "x-large";
    document.getElementById("pergunta").innerHTML = "Resultado Final: " + respostasCertas + "/"+numeroPerguntas
    document.getElementById("recomecar").style.visibility = 'visible';
}
