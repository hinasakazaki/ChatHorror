
const chatArea = get(".msger-chat");
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const time = get(".msger-header-time");

const SCRIPT = [
// Person speaking; text; nextIndex; waitForPlayer
['Mike', 'Yooooo', 2, false], //1
['Ari', '🙌🙌🙌🙌🙌🙌🙌', 3, false], //2
['Ari', 'We met in mindfulness camp!', 4, false], //3
];

let INDEX = 0;

// Icons made by Darius Dan from www.flaticon.com
const CHARACTERS = {
    "Mike": "https://image.flaticon.com/icons/svg/1616/1616446.svg",
    "Ari": "images/ari.jpg",
    "Longwei": "https://image.flaticon.com/icons/svg/2534/2534254.svg"
}

function updateClock() {
    var now = new Date();
    time.innerHTML = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes();
    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call

chatArea.addEventListener("click", event=> {
  const charName = SCRIPT[INDEX][0];
  const msgText = SCRIPT[INDEX][1];
  const delay = msgText.split(" ").length * 10;
  setTimeout(() => {
    appendMessage(charName, CHARACTERS[charName], "left", msgText);
  }, delay);
  INDEX += 1;
});

msgerForm.addEventListener("submit", event => {
  charName = "Longwei"
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(charName, CHARACTERS[charName],"right", msgText);
  msgerInput.value = "";
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}


// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}