window.onload = () => {
  chrome.tabs.executeScript(
    {
      code:
        'const body = document.querySelector("body");const html = document.querySelector("html");body.style.color = "black";html.style.color = "black";'
    },
    () => {
      document.querySelector('body').innerHTML =
        '<img src="./icons/title.png"/><p/><div>Successful font color change to "BLACK"</div>';
    }
  );
};
