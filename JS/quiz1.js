var myQuestions;
$('document').ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="tooltip2"]').tooltip();
  $('.hintbtn').hide();
  function hourglass() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf251;";
    setTimeout(function () {
        a.innerHTML = "&#xf252;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf253;";
      }, 2000);
  }
  hourglass();
  setInterval(hourglass, 3000);


  let flag = 0;
 
  // Functions
  
  var currentSlide = 0;

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.querySelector('.complete-modal');
  var submitButton = document.getElementById('submit');
  var containerfinal = document.querySelector('.quiz-container');
  var animateCircles = document.querySelector('.animate-circles');
  var box1 = document.querySelector('.box');
  
  

  $.getJSON('JSON/quiz.json', function (data) {

    myQuestions = data.elements;
    console.log(myQuestions)


    let myque=[]
    
    //console.log('data elements',data.elements)
    //console.log('myque',myque)
   // console.log('my question : =',myQuestions)
    
    // Variables
    for(let i=0;i<10;i++)
    {
      myque[i]=myQuestions[Math.floor(Math.random() * 19) + 1]
      //console.log('random no =',myQuestions[Math.floor(Math.random() * 14) + 1])
    }
    myQuestions = myque;
    console.log('my que : =',myque)

    console.log('my question : =',myQuestions)





    buildQuiz(myQuestions);
    // Variables
  
    function buildQuiz(myQuestions) {
      // variable to store the HTML output
      const output = [];
      console.log(typeof(myQuestions))
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
          // console.log(currentQuestion,questionNumber);
          // and for each available answer...
          for (letter in currentQuestion.answers) {
       
            // ...add an HTML radio button
            answers.push(
              `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
              </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  var showans = [];
  var corr = 0;

    function showResults() {
      
      // gather answer containers from our quiz
      $(".title").empty();
      $(".title").append("Thank You for Participation");
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
      flag = 1;
      let co = 0;
      console.log()
      // answers 
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        showans[co++] = userAnswer;
       
       if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
          console.log( 'result = ',numCorrect)
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
          numCorrect--;
         // console.log( 'result = ',numCorrect)
        }
      }
      );
      corr = numCorrect;
      // show number of correct answers out of total
      resultsContainer.innerHTML = `Congratulations! <br> You have scored <br> ${numCorrect} out of ${myQuestions.length}`;
      nextButton.style.display = 'none';
      previousButton.style.display = 'none';
      submitButton.style.display = 'none';
      box1.style.display = 'none';
      hintid.style.display = 'none';
      $('.complete-modal').append('<button class="btn bg-success" id="answerscor" style="margin-top:11%;width:11rem;height:3.7rem;color:white;"> Get to Know Answers </button>')
    
      console.log(myQuestions)
  $('#answerscor').click(function(){
    $('.row').remove();
    $('.animate-circles').remove();
    console.log("YESSSSSSSSS")
 
   $('.quiz_header').after('<div class="container ans" style="margin-left:0%"><table class="table" style="width:116%;"><thead class="thead-dark"><tr><th scope="col" id="srno"> Sr No.</th><th scope="col" id="que">Question</th><th scope="col" id="key">Answer</th> <th scope="col" id="ykey" >Your Answer</th> </tr></thead><tbody id="ansb"></tbody></table>');
   for(var ty = 0;ty<10;ty++){
    $('#ansb').append('<tr id="r' + ty + '"></tr>')
    let e = ty+1;
    let rowin = `<th scope="row" id="sr${ty}">${ty+1}</th>`
   
    $('#r'+ty).append(rowin);
    let s= "";
   
    
    for(var ops = 0;ops<Object.keys(myQuestions[ty].answers).length;ops++){
      if(ops === 0){
        s=s+"<br> a) " + myQuestions[ty].answers.a 
        console.log(1)
      }
      if(ops=== 1){
        s=s+"<br> b) " + myQuestions[ty].answers.b
      }
      if(ops=== 2){
        s=s+"<br> c) " + myQuestions[ty].answers.c
      }
      if(ops=== 3){
        s=s+"<br> d) " + myQuestions[ty].answers.d
      }
      
    }
    $('.title').empty()
    let message=`Your score ${corr} out of ${myQuestions.length}`
    $('.title').append(message)
  //  console.log(s)
    $('#sr'+ty).after('<td id="qid'+ty + '">'+ myQuestions[ty].question+ s +'</td>');
    $('#qid'+ty).after('<td  id="aid' + ty +'"><div class="badge badge-warning" style="font-size:1.3rem;display:flex;justify-content:center;margin-top:50%;" id="bg'+ty + '">'+myQuestions[ty].correctAnswer)
    // $('#aid'+ty).css("background-color","yellow")
    var bg ="";
   if(showans[ty] == myQuestions[ty].correctAnswer){
    bg = "badge-success";
   }else{
     bg="badge-danger";
   }
    $('#aid'+ty).after('<td id="yaid'+ty+'">' +'<div class="badge '+bg + '" style="font-size:1.3rem;display:flex;justify-content:center;margin-top:31%;" id="yans'+ty + '">'+showans[ty]);
    // $('#aid'+ty).after('<td id="yaid'+ty+'">' +'<div class="badge '+bg + '" style="font-size:1.3rem;display:flex;justify-content:center;margin-top:31%;" id="yans'+ty + '">'+showans[ty]);

   }
    
});  
      containerfinal.classList.add('complete');
      animateCircles.classList.add('complete');
      //.innerHTML= `${numCorrect} out of ${myQuestions.length}`;
    }
  
    
    function showNextSlide() {
    
      showSlide(currentSlide + 1);
      
    }
    function showSlide(n) {
      
      
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      if(n != 0){

        var sselector = `input[name=question${n-1}]:checked`;
        var  userAnswer = $(sselector).length;
        if(userAnswer == 1){
          var st = '#btn'+String(n);
          
          $(st).css({"background-color":"#47ff73"});

        }
      }
 
      currentSlide = n;

      if (currentSlide === 0) {
        previousButton.style.display = 'none';
      }
      else {
        previousButton.style.display = 'inline-block';
      }
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
 
    var flag2=1;
    function check(){
      const ansh1 = quizContainer.querySelectorAll('.answers');
     
      flag = 1;
      let coo =  0;
      console.log()
      // answers 
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        
        const ansh = ansh1[questionNumber];
        const selector1 = `input[name=question${questionNumber}]:checked`;
        const userAnswer1 = (ansh.querySelector(selector1) || {}).value;
  
        // if answer is correct
        
        if(userAnswer1 === undefined){
          
          flag2++;
          // console.log(flag2);
        }
        coo++;
        if(userAnswer1 != undefined && coo===10){
          
          $('#btn10').css({"background-color":"#47ff73"});
        }
       
        console.log(coo);
        
      }
      );
      if(flag2 === 0){
        console.log(flag2)
        submitButton.addEventListener('click',showResults);
        

      }else if(flag2 > 1){
        alert('You have to attempt all the questions');
        flag2=1;
       
      }else if( flag2 === 1){
        showResults();
      }
    }
 
    


  // Kick things off

  // Pagination
 
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  const hintid= document.getElementById("hint");
  const hintbtnid = document.getElementById("hintbtnid");
  const bt1 = document.getElementById("btn1");
  const bt2 = document.getElementById('btn2');
  const bt3 = document.getElementById('btn3');
  const bt4 = document.getElementById('btn4');
  const bt5 = document.getElementById('btn5');
  const bt6 = document.getElementById('btn6');
  const bt7 = document.getElementById('btn7');
  const bt8 = document.getElementById('btn8');
  const bt9 = document.getElementById('btn9');
  const bt10 = document.getElementById('btn10');

  showSlide(currentSlide);

  // Show the first slide

  // Event listeners
  if(flag2===1){

    submitButton.addEventListener('click', check);
  }

  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  bt1.addEventListener("click", function () {
    showSlide(0);
  });
  bt2.addEventListener("click", function () {
    showSlide(1);
  });
  bt3.addEventListener("click", function () {
    showSlide(2);
  });
  bt4.addEventListener("click", function () {
    showSlide(3);
  });
  bt5.addEventListener("click", function () {
    showSlide(4);
  });
  bt6.addEventListener("click", function () {
    showSlide(5);
  });
  bt7.addEventListener("click", function () {
    showSlide(6);
  });
  bt8.addEventListener("click", function () {
    showSlide(7);
  });
  bt9.addEventListener("click", function () {
    showSlide(8);
  });
  bt10.addEventListener("click", function () {
    showSlide(9);
  });

  const startingminutes = 10;
  let time = startingminutes * 60;
  const countdownEl = document.getElementById('countdown');

  setInterval(updateCountdown, 1000);

  function updateCountdown() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 0) {
      // Chnage your redirection link here
      showResults();
      return;
    }
    if (flag == 1) {
      countdownEl.innerHTML = "0:00";

      return;
    }
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

  }
  });
 

});