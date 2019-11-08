    let songButton = document.querySelectorAll('.songButton');
    let songImg = document.querySelectorAll('.songImg');

    function hideAll() {
      songButton.forEach(function(el) {
        el.style.display = 'none';
      });
    }

    hideAll();

    songImg.forEach(function(el) {
      el.onclick = (e) => {

        hideAll();


        switch (e.target.getAttribute('id')) {
          case 'loveImg':
            document.querySelector('#love')
            	.style.display = 'block';
            break;
          case 'ghostImg':
            document.querySelector('#ghost')
            	.style.display = 'block';
            break;
          case 'dreamsImg':
            document.querySelector('#dreams')
            .style.display = 'block';
            break;
          case 'poolsImg':
            document.querySelector('#pools')
            .style.display = 'block';
            break;
        }

        let players = document.querySelectorAll('audio');
        players.forEach(function(el) {
                el.pause();
                el.currentTime = 0;
            });
      }

    });
