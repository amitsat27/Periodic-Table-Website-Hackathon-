$('home.html').ready(function () {
  let count = 0, color1, num, current;
  window.onresize = displayWindowSize;
  function displayWindowSize() {
      let myWidth = window.innerWidth;
      let myHeight = window.innerHeight;
      // your size calculation code here
      console.log(myWidth + "x" + myHeight)
  };
  // periodic table info
  $('#tutorials').click(function(){
    window.location.href = 'videos.html';
  });

  $('#nemo').click(function(){
    window.location.href = 'mnuemonics_final.html';
  });

  $('#fill').click(function(){
    window.location.href = 'complete_table.html';
  });

  $('#match').click(function(){
    window.location.href = 'match.html';
  });

  $('#electronicconfig').click(function(){
    window.location.href = 'electronicconfigprac.html'
  });
  
  $('#quiz-mod').click(function(){
    window.location.href = 'quiz.html'
  });

  

 

});


