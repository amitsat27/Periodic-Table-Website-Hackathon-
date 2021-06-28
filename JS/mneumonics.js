var mnemo = {'H' : 'Hello', 'Li' : 'List', 'Na' : 'NaNaNa', 'K' : 'KK', 'Rb' : 'RbRbRb', 'Cs' : 'CsCsCs', 'Fr' : 'FrFrFr'}

$('document').ready(function() {

  const sleep = (delay) => {
    return new Promise(resolve => {
      setTimeout(resolve, delay)
    });
  }

  function getBigger(element) {
    $(element).css({
      'z-index' : '10',
      'transform' : 'scale(1.5, 1.5)'
    });
  }

  function animateText(element) {
    var sym = $(element).find('.symbol').text();
    $(element).find('.symbol').after(function() {
      $(element).find('.symbol').text(mnuemo[sym]);
    });
  }

  function getNormal(element) {
    $(element).css({
      'transform' : 'scale(1, 1)',
      'z-index' : '1'
    });
  }

  function getElement(ele) {
    var element = document.createElement('div');
    var classEle = ele.classList[1];
    
    var top = ele.offsetTop;
    var left = ele.offsetLeft;
    var width = ele.offsetWidth;
    var height = ele.offsetHeight;

    if (classEle != 'group18' && classEle != 'group17') {
      $(element).css({
        'position' : 'absolute',
        'padding' : '0.5% 1%',
        'top' : top + height / 3 - 10,
        'left' : left + width * 1.5,
        'text-align' : 'center',
        'background' : 'blue',
        'color' : 'white',
        'border-radius' : '5px'
      });
      $(element).text('Hello World');
    } else {
      $(element).css({
        'position' : 'absolute',
        'padding' : '0.5% 1%',
        'top' : top + height / 3,
        'left' : left - width * 3,
        'text-align' : 'center',
        'background' : 'grey',
        'border-radius' : '5px'
      });
    }

    return element;
  }

  async function startMnuemo(groupName) {

    var group = document.getElementsByClassName(groupName);

    $('.cell').css({
      'opacity' : '0.2'
    });

    $(group).css({
      'opacity' : '1'
    });

    for (i = 0; i < group.length; i++) {

      element = group[i];
      ele = $(element).find('.symbol').text();

      await sleep(500);
      getBigger(element);
      await sleep(500);

      var cell = getElement(element);
      document.body.appendChild(cell);

      for (j = 0; j < mnemo[ele].length; j++) {
        $(cell).text(mnemo[ele].slice(0, j + 1));
        await sleep(150);
      }

      await sleep(1000);
      $(cell).hide();

      getNormal(element);
      await sleep(500);
    }

    $('.cell').css({
      'opacity' : '1'
    });
  }

  $('.cell').click(function(event) {
    var group = this.classList[1];
    startMnuemo(group);
  });
});