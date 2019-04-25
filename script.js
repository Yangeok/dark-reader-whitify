window.onload = () => {
  chrome.tabs.executeScript(
    {
      code: `
        const body = document.querySelector('body');
        const ps = document.querySelectorAll('p');
        const googles = document.getElementsByClassName('st');
        const feedlies = document.getElementsByClassName('summary');
        const oneBoons = document.getElementsByClassName('detail_editor');

        if(window.location.protocol == 'http:' || 'http:') {
          body.style.color = 'black';
        }
        
        for(p of ps) {
          p.style.color = 'black'
        }

        for(google of googles) {
          google.style.color = 'black';
        }

        for(feedly of feedlies) {
          feedly.style.color = 'black';
        }

        for(oneBoon of oneBoons) {
          oneBoon.style.color = 'black';
        }
        `
    },
    () => {
      document.querySelector('body').innerHTML = `
          <img src='./icons/title.png'/>
          <p/>
          <div>
            Successful font color change to 'BLACK'
          </div>
        `;
    }
  );
};
