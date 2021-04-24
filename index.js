const fullScreen = get(".msger");
const chatArea = get(".msger-chat");
const inputContainer = get(".msger-input-container");
const msgerForm  = get(".msger-inputarea");
const msgerChat = get(".msger-chat");
const time = get(".msger-header-time");
const blackScreen = get(".full-screen");


const SCRIPT_GROUP = [
// Person speaking; text; image; nextIndex; waitForPlayer
['Ari', 'Super excited to have Longwei join our SWOLE SQUAD !', '', 1, false],
['Wade', 'hey welcome longwei', '',  2, false], //1
['Ari', '🙌🙌🙌🙌🙌🙌🙌', '', 3, false], //2
['Ari', 'We met at the mindfulness retreat last week!', '', 37, false],//5
['Rin', 'Yoooo', '', 5, true], //7
['Longwei', ['Hi folx!!!', 'Yooo motherfuckassss'], '', 6, false], // 6
['Rin', 'Spotted this on my run this morning', '', 7, false], //8
['Rin', '', 'images/artichoke.jpg', 8, false], //9
['Wade', 'nice artichokes', '',  9, false], //10
['Ari', 'I need more greens for my smoothies 🤤', '',  10, false], //11
['Wade', 'hey longwei what kinda fitness r u into?', '',  11, true], //12
['Longwei', ['Whatever gives me a healthy and long life', 'I want to bulk up'], '', 12, false], // 13
['Wade', 'nice', '',  13, false], //14
['Wade', 'so i heard about this thing', '',  14, false],
['Wade', 'its like a bot you can invite to our chat', '',  15, false], 
['Ari', '👀', '',  16, false], 
['Wade', 'and then it can help us keep each other accountable yknow?', '',  17, false], 
['Rin', 'Sure bro', '', 18, false],
['Ari', 'What does it do exactly?', '',  19, false],  //18 
['Ari', 'Like keep track of PRs and stuff?', '',  20, false], 
['Wade', 'yeah probably stuff like that', '', 21, false], 
['Wade', 'its fine we can kick it out if we dont like it', '', 22, false], 
['', 'Fit bot has entered 💪Swole Squad🥊🐜🥗 ', '', 23, false],
['Fit Bot', 'Hi everyone! I\'m Fit Bot, and I\'m here to help you with your fitness goals!', '', 24, false],
['Fit Bot', 'Ari, first tell me your weight and muscle mass goals.', '', 25, false],
['Ari', 'Honestly if I could get to squatting 3x my body weight that would be A+', '', 26, false],
['Fit Bot', 'How much do you weigh?', '', 27, false],
['Ari', '142lbs, currently 30% body fat', '', 28, false],
['Fit Bot', 'Thank you, Ari. I will run the numbers. How about you, Rin?', '', 29, false],
['Rin', 'Currently 130lbs, want to get up to 170lbs so I\'m bulking. 16% body fat.', '', 30, false],
['Fit Bot', 'Very well, Rin. How about you, Wade?', '', 31, false],
['Wade', '300lbs 15p body fat, just wanna get big' ,'', 32, false],
['Fit Bot', 'Very well, Wade. And finally, you, Longwei?', '', 33, true], //32
['Longwei', ['I\'m already perfect, I\'m not answering your questions.', 'I need to lose weight to live a long life.'], '', 35, false], //33
['Longwei', ['NEED TO GET BIGGGG'], '', 35, false],  //34
['Fit Bot', 'How about your weight?', '', 36, true], //35
['Longwei', ['I don\'t own a scale.'], '', 37, false], //36
['EFFECT', 'BLACK SCREEN', '', 38, false],  //37
['EFFECT', 'FADE IN', '', 39, false],  //38
['', 'Date', '', 40, false],
['EFFECT', 'BLOOD', '', 41, false],

];
let INDEX_GROUP = 0;

const SCRIPT_RIN = [

];

// set current script
let SCRIPT = SCRIPT_GROUP
let INDEX = INDEX_GROUP
let WAIT_FOR_PLAYER = false
let last_body_html = '';
blackScreen.style.display = "none";

const PLAYABLE_CHARACTER_NAME = 'Longwei'
const CHARACTERS = {
    "Wade": "images/wade.jpg",
    "Ari": "images/ari.jpg",
    "Longwei": "https://image.flaticon.com/icons/svg/2534/2534254.svg",
    "Rin": "images/rin.jpg",
    "Fit Bot": "https://image.flaticon.com/icons/svg/1616/1616446.svg",
}

function ChangeChat() {
  // Show black screen meanwhile
  saveChat(); // save current chat
  changeColors(); // change the setting
  fillChat(); // fill with texts
  // Remove black screen
}

function updateClock() {
    var now = new Date();
    time.innerHTML = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes();
    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call

let currScrollTop = 0;

fullScreen.addEventListener("click", event=> {
  clickEvent();
});

blackScreen.addEventListener("click", event => {
  clickEvent();
});

function clickEvent() {
  console.log(INDEX)
  console.log(SCRIPT[INDEX])
  console.log(WAIT_FOR_PLAYER)
  const charName = SCRIPT[INDEX][0];
  if (charName == "") {
      addAdminNotice(SCRIPT[INDEX][1]);
  }
  else if (charName == "EFFECT") {
      const effectName = SCRIPT[INDEX][1]
      if (effectName == 'BLACK SCREEN') {
        delay = 0;
        setTimeout(() => {
            fullScreen.style.display="none";
            blackScreen.style.display="block";
            blackScreen.style.zIndex = "1";
        }, delay);
      }
      else if (effectName == 'FADE IN') {
          console.log('fading in')
          blackScreen.style.display= "none";
          fullScreen.style.display="block";
          blackScreen.style.zIndex = "-1";
      }  
      else if (effectName == 'BLOOD') {
        bloodHTML = `<div class="overlay"><img src="images/blood.png"></div>`;
        fullScreen.insertAdjacentHTML("beforebegin", bloodHTML);
        /**
        setTimeout(() => {
            const overlay = document.getElementsByClassName("overlay")[0];
            if (overlay.parentNode){
                overlay.parentNode.removeChild(overlay);
            }
        }, delay);
        **/
      }
      else if (effectName == 'CHANGE CHAT') {
      }
  }
  else if (charName == PLAYABLE_CHARACTER_NAME) {
      fillChoices(SCRIPT[INDEX][1]);
  } else {
      if (WAIT_FOR_PLAYER) return;
      const msgText = SCRIPT[INDEX][1];
      const imagePath = SCRIPT[INDEX][2];
      const delay = msgText.split(" ").length * 10;
      setTimeout(() => {
        appendMessage(charName, CHARACTERS[charName], "left", msgText, imagePath);
      }, delay);
      WAIT_FOR_PLAYER = SCRIPT[INDEX][4]
  }
  INDEX = SCRIPT[INDEX][3]
}

function fillChoices(choices) {
  let choicesHTML = '';
  choices.forEach((item, index) => choicesHTML += (createOption(item, index)));
  inputContainer.innerHTML = choicesHTML;
  msgerChat.scrollTop += 500;
  document.querySelectorAll('.msger-inputarea').forEach(element=> 
    element.addEventListener("submit", event => {
      charName = PLAYABLE_CHARACTER_NAME
      event.preventDefault();
      const msgText = element.querySelector(".msger-input").value;
      const index = element.querySelector(".msger-input").index;
      console.log(index);
      if (!msgText) return;
      appendMessage(charName, CHARACTERS[charName],"right", msgText);
      clearOptions();
      WAIT_FOR_PLAYER = false;
    })
  );
}

msgerForm.addEventListener("submit", event => {
  return;
});

function addAdminNotice(text) {
    console.log('HINA ADMIN' + text);
  const noticeHTML = `
      <div class="notice">${text}</div>`;
  msgerChat.insertAdjacentHTML("beforeend", noticeHTML);
  msgerChat.scrollTop += 500;
}

function clearOptions() {
   const choiceHTML =  `
  <form class="msger-inputarea">
    <input type="text" class="msger-input" value="" index=0 readonly>
    <button type="submit" class="msger-send-btn">Send</button>
  </form>
  `;
  document.querySelectorAll('.msger-inputarea').forEach(element=> 
    element.addEventListener("submit", event => {
      return;
    })
  );
  inputContainer.innerHTML = choiceHTML;
}

function createOption(item, index) {
   const choiceHTML =  `
  <form class="msger-inputarea">
    <input type="text" class="msger-input" value="${item}" index=${index} readonly>
    <button type="submit" class="msger-send-btn">Send</button>
  </form>
  `;
  return choiceHTML;
}

function appendMessage(name, img, side, text, image_path) {
  //   Simple solution for small apps
  let height = 500;
  let msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>`;
  console.log(image_path);
  if (image_path) {
      msgHTML += `<div class="msg-text-img"><img src=${image_path}></div>`;
      height = 1500;
  } else {
      msgHTML += `<div class="msg-text">${text}</div>`;
  }
  msgHTML += `
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += height;
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