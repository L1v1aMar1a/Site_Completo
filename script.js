function disableOptions(questionName){
    let option = document.getElementsByName(questionName);
    option.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    } )
}

function playSound(){
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function SubmitQuiz(){


    let correctAnswers = {
        q1: "D",
        q2: "C",
        q3: "C",
        q4: "B",
        q5: "A",
        q6: "B",
        q7: "A",
        q8: "A",
        q9: "A",
        q10: "A",

        //Adiciona as respostas corretas para as outras perguntas
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswers = form.elements[key].value;
        if (userAnswers === correctAnswers [key]){
            score++
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    document.getElementById('enviar').setAttribute('disabled', true);
    document.getElementById('reiniciar').removeAttribute('disabled');

    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }

    if(score != 10){
        let erroQuiz = document.getElementById('perdeusom');
        erroQuiz.play();
    }

}

function responderNovamente(){
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = "";
    document.getElementById('quiz-form').reset();
 
    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
   
}
 



