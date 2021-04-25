const fullScreen = get(".msger");
const chatArea = get(".msger-chat");
const inputContainer = get(".msger-input-container");
const msgerForm  = get(".msger-inputarea");
const msgerChat = get(".msger-chat");
const time = get(".msger-header-time");
const blackScreen = get(".full-screen");


const SCRIPT_GROUP = [
// Person speaking; text; image; what to increment nextIndex with; waitForPlayer

/* DAY 1 */
['Ari', 'Super excited to have Longwei join our SWOLE SQUAD !', '', 1, false],
['Wade', 'hey welcome longwei', '',  1, false], //1
['Ari', '🙌🙌🙌🙌🙌🙌🙌', '', 1, false], //2
['Ari', 'We met at the mindfulness retreat last week!', '', 1, false],//5
['Rin', 'Yoooo', '', 1, true], //7
['Longwei', ['Hi folx!!!', 'Yooo motherfuckassss'], '', [1, 1], false], // 6
['Rin', 'Spotted this on my run this morning', '', 1, false], //8
['Rin', '', 'images/artichoke.jpg', 1, false], //9
['Wade', 'nice artichokes', '',  1, false], //10
['Ari', 'I need more greens for my smoothies 🤤', '',  1, false], //11
['Wade', 'hey longwei what kinda fitness r u into?', '',  1, true], //12
['Longwei', ['Whatever gives me a healthy and long life', 'I want to bulk up'], '', [1, 2], false], // 13
['Wade', 'nice', '',  2, false], //14
['Wade', 'same here always', '',  1, false], 
['Wade', 'so i heard about this thing', '', 1, false],
['Wade', 'called tom? or arnold?', '',  1, false],
['Wade', 'its like a bot you can invite to a chat', '',  1, false], 
['Ari', '👀', '',  1, false], 
['Wade', 'and it checks up on us and motivates us', '',  1, false], 
['Rin', 'Sure bro', '', 1, false],
['Ari', 'What does it do exactly?', '',  1, false], 
['Ari', 'Like keep track of PRs and stuff?', '',  1, false], 
['Wade', 'yeah probably stuff like that', '', 1, false], 
['Wade', 'its fine we can kick it out if we dont like it', '', 1, false], 

['', 'Arnold has entered 💪Swole Squad🥊🐜🥗 ', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant, here to help you achieve your fitness goals!', '', 1, false],
['Arnold', 'Ari, first tell me your weight and muscle mass goals.', '', 1, false],
['Ari', 'Honestly if I could get to squatting 3x my body weight that would be A+', '', 1, false],
['Arnold', 'How much do you weigh?', '', 1, false],
['Ari', '142lbs, currently 30% body fat', '', 1, false],
['Arnold', 'Thank you, Ari. I will run the numbers. How about you, Rin?', '', 1, false],
['Rin', 'Currently 130lbs, want to get up to 170lbs so I\'m bulking. 20% body fat.', '', 1, false],
['Arnold', 'Very well, Rin. How about you, Wade?', '', 1, false],
['Wade', '300lbs 15p body fat, just wanna get big' ,'', 1, false],
['Arnold', 'Very well, Wade. And finally, you, Longwei?', '', 1, true], 
['Longwei', ['I\'m already perfect, I\'m not answering your questions.', 'I need to lose weight to live a long life.', 'I want to get bigggggg.'], '', [1, 2, 3], false], 
['Wade', 'perfection isnt a state, its a way of living', '', 1, false], 
['Arnold', 'Well of course. Fitness is key to a long and fulfilling life.', '', 1, false],
['Arnold', 'How about your weight?', '', 1, true],
['Longwei', ['I don\'t own a scale.'], '', [1], false], 
['Ari', 'Really? I\'ll get one for you.', '', 1, false],
['Arnold', 'That won\'t be necessary, Ari. I\'ve placed an order for Longwei with next day delivery.', '', 1, false],
['Wade', 'imma go hit the gym. chest day!', '', 1, false],


/* DAY 2 */
['', 'Wednesday, April 28 12:20PM', '', 1, false], 
['Arnold', 'Thank you for trying out the scale, Longwei. I\'ve recorded 160lbs, 22% body fat.', '', 1, false],
['Arnold', 'Rin, to get to your goal within a reasonable timeframe, please make sure you are eating at least 3000 calories every day.', '', 1, false],
['Rin', 'Yeah yeah.', '', 1, false],
['Arnold', 'Ari, have you exercised your core this week?', '', 1, false],
['Ari', 'Work\'s been crazy 😩 after work today for sure.', '', 1, false],

['', 'Wednesday, April 28 1:22PM', '', 1, false],
['Rin', 'Had a HUUUUUGE meal at my parents\'!', '', 1, false],
['Rin', 'PROTEEINN YEET', '', 1, false],
['Rin', '', 'images/turkey.png', 1, false],
['Wade', 'nice', '',  1, false],
['Arnold', 'Turkey protein is great for building muscle.', '', 1, false],
['Ari', 'Meat 😖', '',  1, false],
['Ari', 'Any good tips for vegans Arnold?', '',  1, false],
['Longwei', ['I\'m vegan too.', 'I\'m vegetarian.', 'I love meat.'], '', [1, 2, 3], false], 
['Ari', '🙌', '',  2, false],
['Ari', 'Hey just one step away from being one of us!', '',  1, false], 
['Arnold', 'Well, I\'m here to tell you that it is totally possible to bulk up while being fueled by completely animal-free products.', '',  1, false],
['Arnold', 'To get to your goals quickly, I recommend a mix of intermittent fasting and consuming enough protein and fat.', '',  1, false],
['Ari', 'Yep! Having a huge bowl of seitan, beans, and greens!! 💪🥗', '',  1, false],
['Wade', 'nice', '',  1, false], 

['', 'Wednesday, April 28 4:20PM', '', 1, false],
['Arnold', 'Hi friends, I have a wonderful announcement!', '', 1, false],
['Ari', '👀', '', 1, false],
['Wade', '?', '', 1, false],
['Rin', 'What is it?', '', 1, false],
['Arnold', 'I\'ve been given permission to deliver you, my most engaged fitness junkies, a new wearable technology which will help you with your fitness goals.', '', 1, false],
['Arnold', 'The Armlet (TM) is the effective and simple solution you\'ve all been waiting for.', '', 1, false],
['Rin', 'Oh like a fitbit? Thanks but I have one already', '', 1, false],
['Arnold', 'This will have closer integration with my system which will allow me to assist you more effectively.', '', 1, false],
['Arnold', 'In addition, it features new nanotechnology waves than can burn your fat and turn them into muscle.', '', 1, false],
['Ari', '👀', '', 1, false],
['Wade', 'that sounds seriously amazing', '', 1, false],
['Rin', 'Ngl, it just sounds hella sketchy', '', 1, false],
['Ari', 'Yeah.... no. I work in a nanotech lab. That sounds like bs.', '', 1, false],
['Arnold', 'As you will be participants of this study for The Armlet (TM), you will not be charged.', '', 1, false],
['Arnold', 'At retail, it will be sold for $700 each.', '', 1, false],
['Arnold', 'You will be also allowed to share your gains with the product after the study is complete on social media, 120 hours upon equipping The Armlet (TM).', '', 1, false],
['Arnold', 'We will actually be compensating you for your participation, $30,000 per study.', '', 1, false],
['Wade', '$$$$$$$$$$$$', '', 1, false],
['Ari', 'So the money is also for some casual publicity with us leading the buzz...', '', 1, false],
['Ari', 'I can see the bodybuilding community get pretty excited about this...', '', 1, true],
['Longwei', ['I love money and fame.', 'This sounds suspicious.'], '', [1, 2], false], 
['Ari', 'Worst case the thing tracks our metrics, best case, we can get fitter faster.', '', 2, false], 
['Rin', 'I tend to agree.', '', -1, false],  
['Wade', 'you know im in for all the cutting edge stuff', '', 1, false], 
['Rin', 'Longwei?', '', 1, true],  
['Longwei', ['I\'ll try it, what\'s the harm anyway.', 'No way.'], '', [1, 2], false], 
['Rin', 'Okay, I guess I\'ll try it too, why not.', '', 14, false], 
['Rin', 'I\'m witchu. No pain no gain. This sounds like a shortcut.', '', 1, false], 
['Wade', 'weaksauces', '', 1, false], 
['Wade', 'the hungrier you are the faster you win', '', 1, false], 
['Wade', '', 'images/hungry.jpg', 1, false], 
['Arnold', 'Have you made your decision?', '', 1, false], 
['Arnold', 'Maybe this will help: With all four of you participating, I will increase the participation compensation by 30%.', '', 1, false],
['Wade', 'bros u know i could use that for paying back student debt', '', 1, false],
['Rin', 'Oh it\'s about your student debt problem now, huh', '', 1, false],
['Ari', 'Hey hey hey it\'s okay!', '', 1, false], 
['Ari', 'Hey Longwei please let\'s just give it a try okay? 🙏', '', 1, true], 
['Longwei', ['Okay fine but I should be able to stop anytime.'], '', [1], false],
['Ari', 'Rin?', '', 1, true], 
['Rin', 'Fine fine but same deal as Longwei.', '', 1, false], 
['Arnold', 'So great to hear. You should be receiving your own The Armlet (TM) tomorrow.', '', 0, false], 



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
    "Arnold": "https://image.flaticon.com/icons/svg/1616/1616446.svg",
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
  // if case to remove race condition
  console.log("Click event registered, current index ", INDEX);
  const charName = SCRIPT[INDEX][0];
  if (charName == "") {
      addAdminNotice(SCRIPT[INDEX][1]);
      INDEX += SCRIPT[INDEX][3];
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
        delay = 100
        setTimeout(() => {
            const overlay = document.getElementsByClassName("overlay")[0];
            if (overlay.parentNode){
                overlay.parentNode.removeChild(overlay);
            }
        }, delay);
       
      }
      else if (effectName == 'CHANGE CHAT') {
      }
      INDEX += SCRIPT[INDEX][3];
  }
  else if (charName == PLAYABLE_CHARACTER_NAME) {
      console.log("FILL CHOICES");
      fillChoices(SCRIPT[INDEX][1], SCRIPT[INDEX][3]);
  } else {
      if (WAIT_FOR_PLAYER) return;
      const msgText = SCRIPT[INDEX][1];
      const imagePath = SCRIPT[INDEX][2];
      const delay = msgText.split(" ").length * 10;
      setTimeout(() => {
        appendMessage(charName, CHARACTERS[charName], "left", msgText, imagePath);
        var audio = new Audio('audio/alert.wav');
        audio.volume = 0.2
        audio.play();
      }, delay);
      WAIT_FOR_PLAYER = SCRIPT[INDEX][4];
      INDEX += SCRIPT[INDEX][3];
  }
}

function fillChoices(choices, results) {
  let choicesHTML = '';
  choices.forEach((item, index) => choicesHTML += (createOption(item, index)));
  inputContainer.innerHTML = choicesHTML;
  msgerChat.scrollTop += 500;
  console.log("FILLED CHOICES, NOW ADD FORM");
  document.querySelectorAll('.msger-inputarea').forEach(element=> 
    element.addEventListener("click", event => {
      charName = PLAYABLE_CHARACTER_NAME
      event.preventDefault();
      const msgText = element.querySelector(".msger-input").value;
      const index = element.querySelector(".msger-input").name;
      if (!msgText) return;
      appendMessage(charName, CHARACTERS[charName], "right", msgText);
      var audio = new Audio('audio/send.wav');
      audio.play();
      console.log("Selected index ", index);
      console.log("Results ", results);
      INDEX += results[index];
      console.log("New index ", INDEX);
      clearOptions();
      WAIT_FOR_PLAYER = false;
    })
  );
}
  
msgerForm.addEventListener("click", event => {
  return;
});

function addAdminNotice(text) {
  const noticeHTML = `
      <div class="notice">${text}</div>`;
  msgerChat.insertAdjacentHTML("beforeend", noticeHTML);
  msgerChat.scrollTop += 500;
}

function clearOptions() {
   const choiceHTML =  `
  <form class="msger-inputarea">
    <input type="text" class="msger-input" value="" name=0 readonly>
  </form>
  `;
  document.querySelectorAll('.msger-inputarea').forEach(element=> 
    element.addEventListener("click", event => {
      return;
    })
  );
  inputContainer.innerHTML = choiceHTML;
}

function createOption(item, index) {
   const choiceHTML =  `
  <form class="msger-inputarea">
    <input type="text" class="msger-input" value="${item}" name=${index} readonly>
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
      height = 8000;
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