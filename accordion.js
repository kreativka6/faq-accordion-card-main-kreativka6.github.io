const span = document.getElementsByTagName("span");
const quest = document.querySelectorAll(".quest");
const arrow = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".answer");


for(let i = 0; i < span.length; i++){
    span[i].addEventListener('click', function(){
       hideAnswers();
       showAnswer(i);
    })
};

function showAnswer(i){
    answer[i].style.display = "block";
    answer[i].style.fontSize="0.8rem";
    answer[i].style.padding="1rem";
    arrow[i].style.transform = "rotateX(180deg)";
};

function hideAnswers(){
    for(let i = 0; i < span.length; i++){
    answer[i].style.display = "none";
    arrow[i].style.transform = "rotateX(0deg)";
    }
};

 