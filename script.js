window.onload = () => {
  chrome.tabs.executeScript(
    {
      code:
        'const body = document.querySelector("body");const el = document.getElementsByClassName("st");console.log(el);if(window.location.protocol == "http:" || "http:") {body.style.color = "black";for(let i = 0; i < el.length; i++){el[i].style.color = "black";}}'
    },
    () => {
      document.querySelector('body').innerHTML =
        '<img src="./icons/title.png"/><p/><div>Successful font color change to "BLACK"</div>';
    }
  );
};
