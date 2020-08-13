function displayCards(){

    var cards = document.getElementById("cards");
    var text = document.getElementById("text");

    cards.style.display = 'block';
    text.style.display = 'none';
}

var gk_questions = [
    {
        question: 'Who was the inventor of Ctrl+C (copy), Ctrl+V (Paste ) and Ctrl+X (Cut)?',
        answer: 'Larry Tesler',
        options: [
            'Bill Gates',
            'Larry Tesler',
            'Christopher Latham Sholes',
            'David Sundstrand',
        ]
    },
    {
        question: '_______ is known as leap day or leap year day:',
        answer: 'Feb 29',
        options: [
            'Feb 29',
            'Feb 28',
            'March 01',
            'Feb 01',
        ]
    },
    {
        question: 'The first country to give a robot citizenship:',
        answer: 'Saudi Arabia',
        options: [
            'UAE',
            'Saudi Arabia',
            'Qatar',
            'USA',
        ]
    },
    {
        question: 'The World’s first camel hospital is located in:',
        answer: 'Dubai, UAE',
        options: [
            'Dubai, UAE',
            'Jaddah, Saudi Arabia',
            'Mascat, Oman',
            'None of These',
        ]
    },
    {
        question: ' 102-year-old ______ woman is the oldest skydiver in the world:',
        answer: 'Australian',
        options: [
            'American',
            'Chinese',
            'Australian',
            'None of These',
        ]
    }
]

var m_questions = [
    {
        question: 'What is the sum of 130+125+191?',
        answer: '446',
        options: [
            '335',
            '456',
            '446',
            '426',
        ]
    },
    {
        question: 'If we minus 712 from 1500, how much do we get?',
        answer: '788',
        options: [
            '788',
            '778',
            '768',
            '758',
        ]
    },
    {
        question: '50 times of 8 is equal to:',
        answer: '400',
        options: [
            '80',
            '400',
            '800',
            '4000',
        ]
    },
    {
        question: '110 divided by 10 is:',
        answer: '65',
        options: [
            '50',
            '55',
            '65',
            '60',
        ]
    },
    {
        question: 'The product of 82 and 5 is:',
        answer: '410',
        options: [
            '400',
            '410',
            '420',
            'None of these',
        ]
    }
]

var eng_questions = [
    {
        question: "Who is your mother's sister's daughter?",
        answer: 'She is my wife.',
        options: [
            'She is my wife.',
            "She is my mother's nephew.",
            'She is my cousin.',
            "Is my mother's niece.",
        ]
    },
    {
        question: '______? He is fifteen.',
        answer: 'How old is John?',
        options: [
            'How old is John?',
            'How many years is John?',
            'What age is John?',
            'How many years does John have?',
        ]
    },
    {
        question: 'The Kowalskis have always ______ the same doctor.',
        answer: 'gone to',
        options: [
            'gone to',
            'saw',
            'been',
            'went to',
        ]
    },
    {
        question: 'Whiskey gets better and better as it ______.',
        answer: 'ages',
        options: [
            'ages',
            'ageing',
            'agen',
            'aged',
        ]
    },
    {
        question: 'Turn right at the next intersection, then go straight for about two kilometers. Go ______ the school and the supermarket, and then turn left.',
        answer: 'Australian',
        options: [
            'to',
            'through',
            'past',
            'after',
        ]
    }
]

var iq_questions = [
    {
        question: 'Which one of the five is least like the other four?',
        answer: 'Snake',
        options: [
            'Dog',
            'Mouse',
            'Lion',
            'Snake',
        ]
    },
    {
        question: '121, 144, 169, 196… What is next?',
        answer: '225',
        options: [
            '225',
            '260',
            '298',
            '310',
        ]
    },
    {
        question: 'Which one of the five choices makes the best comparison? PEACH is to HCAEP as 46251 is to:',
        answer: '15264',
        options: [
            '25641',
            '15264',
            '12654',
            '51462',
        ]
    },
    {
        question: 'Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?',
        answer: '24',
        options: [
            '20',
            '24',
            '25',
            '28',
        ]
    },
    {
        question: 'If you rearrange the letter “CIFAIPC” you would have the name of a(n):',
        answer: 'Ocean',
        options: [
            'City',
            'Animal',
            'Ocean',
            'Country',
        ]
    }
]

var gk_count = 0;
var gk_score = 0;
var gk_rans;
var gk_que_ans;

function nextGK(){

    var next = document.getElementById('nextBtn');
    gk_count++;
    showGkQues(gk_count);

    if(gk_count == gk_questions.length-1){

        var submit = document.getElementById('submitBtn');
        
        next.style.display = 'none';
        submit.style.display = 'block';
        
    }
    removeActive();
}

function showGkQues(e){

    var gk_ques = document.getElementById('gk_question');
    gk_ques.innerHTML = gk_questions[e].question;
    gk_que_ans = gk_questions[e].answer;

    var gk_opt = document.getElementsByClassName('gk_opt');
    for(var i = 0 ; i < gk_opt.length; i++){

        gk_opt[i].innerHTML = gk_questions[e].options[i];
    }
}

var m_count = 0;
var m_score = 0;
var m_rans;
var m_que_ans;

function nextM(){

    var next = document.getElementById('nextBtn');
    m_count++;
    showMathsQues(m_count);

    if(m_count == m_questions.length - 1){

        var submit = document.getElementById('submitBtn');
        
        next.style.display = 'none';
        submit.style.display = 'block';
        
    }
    removeActive();
}

function showMathsQues(e){

    var m_ques = document.getElementById('m_question');
    m_ques.innerHTML = m_questions[e].question;
    m_que_ans = m_questions[e].answer;

    var m_opt = document.getElementsByClassName('m_opt');
    for(var i = 0 ; i < m_opt.length; i++){

        m_opt[i].innerHTML = m_questions[e].options[i];
    }
}

var e_count = 0;
var e_score = 0;
var e_rans;
var e_que_ans;

function nextEng(){

    var next = document.getElementById('nextBtn');
    e_count++;
    showEngQues(e_count);

    if(e_count == eng_questions.length - 1){

        var submit = document.getElementById('submitBtn');
        
        next.style.display = 'none';
        submit.style.display = 'block';
        
    }
    removeActive();
}

function showEngQues(e){

    var e_ques = document.getElementById('e_question');
    e_ques.innerHTML = eng_questions[e].question;
    e_que_ans = eng_questions[e].answer;

    var e_opt = document.getElementsByClassName('e_opt');
    for(var i = 0 ; i < e_opt.length; i++){

        e_opt[i].innerHTML = eng_questions[e].options[i];
    }
}

var iq_count = 0;
var iq_score = 0;
var iq_rans;
var iq_que_ans;

function nextIQ(){

    var next = document.getElementById('nextBtn');
    iq_count++;
    showIQQues(iq_count);

    if(iq_count == iq_questions.length - 1){

        var submit = document.getElementById('submitBtn');
        
        next.style.display = 'none';
        submit.style.display = 'block';
        
    }
    removeActive();
}

function showIQQues(e){

    var iq_ques = document.getElementById('iq_question');
    iq_ques.innerHTML = iq_questions[e].question;
    iq_que_ans = iq_questions[e].answer;

    var iq_opt = document.getElementsByClassName('iq_opt');
    for(var i = 0 ; i < iq_opt.length; i++){

        iq_opt[i].innerHTML = iq_questions[e].options[i];
    }
}

function putActive(e){

    removeActive();
    e.classList.add('selected');
    gk_rans = e.innerHTML;
    check()

}

function putActiveM(e){

    removeActive();
    e.classList.add('selected');
    m_rans = e.innerHTML;
    checkMathsScore()
}

function putActiveEng(e){

    removeActive();
    e.classList.add('selected');
    e_rans = e.innerHTML;
    checkEngScore()
}
function putActiveIQ(e){

    removeActive();
    e.classList.add('selected');
    iq_rans = e.innerHTML;
    checkIQScore()
}

function removeActive(){

    var active = document.getElementsByClassName('selected');
    for(var i = 0 ; i < active.length ; i++){

        active[0].classList.remove('selected');

    }
}

function check(){

    if(gk_rans === gk_que_ans){

        gk_score += 10;
    }
}

function checkMathsScore(){

    if(m_rans === m_que_ans){

        m_score += 10;
    }
}

function checkEngScore(){

    if(e_rans === e_que_ans){

        e_score += 10;
    }
}

function checkIQScore(){

    if(iq_rans === iq_que_ans){

        iq_score += 10;
    }
}

function setModal() {

    if (gk_score == 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was stunning! <br><br><b>Your Score : ' + gk_score + '</b>';
    }
    else if (gk_score >= 20 && gk_score < 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was moderate.. <br><br><b>Your Score : ' + gk_score + '</b>';
    }
    else {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Try Again!';

        var body = document.getElementById('body');
        body.innerHTML = 'Sorry! Please try again... <br><br><b>Your Score : ' + gk_score + '</b>';
    }
}

function setMathsModal(){

    if (m_score == 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was stunning! <br><br><b>Your Score : ' + m_score + '</b>';
    }
    else if (m_score >= 20 && m_score < 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was moderate.. <br><br><b>Your Score : ' + m_score + '</b>';
    }
    else {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Try Again!';

        var body = document.getElementById('body');
        body.innerHTML = 'Sorry! Please try again... <br><br><b>Your Score : ' + m_score + '</b>';
    }
}

function setEngModal(){

    if (e_score == 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was stunning! <br><br><b>Your Score : ' + e_score + '</b>';
    }
    else if (e_score >= 20 && e_score < 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was moderate.. <br><br><b>Your Score : ' + e_score + '</b>';
    }
    else {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Try Again!';

        var body = document.getElementById('body');
        body.innerHTML = 'Sorry! Please try again... <br><br><b>Your Score : ' + e_score + '</b>';
    }
}

function setIQModal(){

    if (iq_score == 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was stunning! <br><br><b>Your Score : ' + iq_score + '</b>';
    }
    else if (iq_score >= 20 && iq_score < 50) {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Congratulations!';

        var body = document.getElementById('body');
        body.innerHTML = 'Wish you all the very best in the future! Your performance was moderate.. <br><br><b>Your Score : ' + iq_score + '</b>';
    }
    else {

        var modalHeader = document.getElementById('staticBackdropLabel');
        modalHeader.innerHTML = 'Try Again!';

        var body = document.getElementById('body');
        body.innerHTML = 'Sorry! Please try again... <br><br><b>Your Score : ' + iq_score + '</b>';
    }
}

var min = 0;
var sec = 0;
var msec = 0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

var interval;

function timer(){

    sec++
    secheading.innerHTML = sec;

    if(sec > 60){

        min++;
        minheading.innerHTML = min;
        sec = 00;
        secheading.innerHTML = sec
    }

    else if(min == 5){

        stop();
        secheading.innerHTML = "00"

        $("#staticBackdrop").modal('show');
    }
}
function start(){

    interval = setInterval(timer, 1000);
}
function stop(){
    
    clearInterval(interval);
}
