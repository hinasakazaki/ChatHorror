const fullScreen = get(".msger");
const chatArea = get(".msger-chat");
const inputContainer = get(".msger-input-container");
const msgerForm  = get(".msger-inputarea");
const msgerChat = get(".msger-chat");
const time = get(".msger-header-time");
const blackScreen = get(".full-screen");
const title = get(".msger-header-title");


const SCRIPT_GROUP = [
// Person speaking; text; image; what to increment nextIndex with; waitForPlayer

/* DAY 1 */
['Ari', 'Super excited to have Longwei join our SWOLE SQUAD !', '', 261, false],
['Wade', 'hey welcome longwei', '',  1, false], //1
['Ari', '🙌🙌🙌🙌🙌🙌🙌', '', 2, false], //2
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

['', 'Wednesday, April 28 01:22PM', '', 1, false],
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

['', 'Wednesday, April 28 04:20PM', '', 1, false],
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
['Arnold', 'You will be also allowed to share your gains with the product after the study is complete on social media, 72 hours upon equipping The Armlet (TM).', '', 1, false],
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
['Ari', 'Rin?', '', 1, false], 
['Rin', 'Fine fine but same deal as Longwei.', '', 1, false], 
['Arnold', 'So great to hear. You should be receiving your own The Armlet (TM) tomorrow.', '', 1, false], 

/** DAY 3: ARI & WADE PUT ON THE ARMLET **/
['', 'Wednesday, April 29 10:02AM', '', 1, false],
['Ari', 'Got it!', '', 1, false], 
['Ari', '', 'images/dongle.jpg',  1, false], 
['Arnold', 'It looks great, Ari! Now, according to my tracking, Wade seems to be already equipped as well, just a couple hours ago.', '', 1, false], 
['Wade', 'locked and loaded here', '', 1, false], 
['Arnold', 'Rin and Longwei\'s are a little late to arrive.', '', 1, false], 

['', 'Wednesday, April 29 10:30PM', '', 1, false],
['Arnold', 'Ari, you\'re awfully close to your freezer. It\'s after dinner time, no reason for you to be there.', '', 1, false], 
['Ari', 'Aw, you caught me Arnold!', '', 1, false], 
['Arnold', 'Just doing my job!', '', 1, false], 
['Wade', 'nice', '', 1, false], 
['Rin', 'Eek', '', 1, false], 
['Wade', 'btw im doing great', '', 1, false], 
['Wade', 'i just did full body scan and im already 0.2p up on the muscle compared to last week', '', 1, false], 
['Longwei', ['Nice', 'Sounds expensive to do a full body scan every week. What about your student debt?'], '', [1, 2], false], 
['Wade', 'thanks', '', 2, false], 
['Wade', 'chill out, it comes free with my brothers job so i just pretend im him', '', 1, false], 

['', 'Friday, April 29 09:27PM', '', 1, false],
['Rin', 'Yeeet mine just arrived', '', 1, false], 
['Rin', '', 'images/dongle-rin.jpg', 1, false], 
['Arnold', 'It seems like the one sent to Longwei has been stolen uppon arrival. I have ordered a replacement to come tomorrow.', '', 1, false], 
['Rin', 'Geez, that\'s too bad. I\'m gonna hit the gym.', '', 1, false], 
['Arnold', 'Great squats, Rin, make sure to keep your back straight.', '', 1, false], 
['Ari', 'You should really try yoga, Rin, it helps with form.', '', 1, false], 
['Wade', 'how much did you do this time rin?', '', 1, false], 
['Arnold', 'Rin did 200lbs today. Next time, you should try 170lbs 5x5.', '', 1, false], 
['Arnold', 'Ari, have you done any core work this week?', '', 1, false], 
['Ari', 'Ugh -- was gonna do it yesterday but got busy with work. I\'ll try to finish up early and get some in at lunch.', '', 1, false], 

['', 'Thursday, April 29 01:27PM', '', 1, false],
['Ari', 'I did core! OMG I feel amaaazinggggg 💃💃💃💃💃💃', '', 1, false], 
['Wade', 'nice', '', 1, false], 
['Ari', 'I just feel so much stronger. It\'s unreal!!', '', 1, false], 
['Rin', 'Yeah it kinda feels like when I just started T', '', 1, false], 
['Longwei', ['That makes sense.', 'What\'s T?'], '', [1, 2], false], 
['Ari', 'I was super skeptical about the muscle nanotech thing, but placebo or not, I feel great.', '', 5, false], 
['Rin', 'Testosterone. Cuz the body I was born in didnt produce as much as I would have liked to feel like myself', '', 1, false], 
['Ari', '🥰', '', 1, false], 
['Wade', 'i did roids in high school', '', 1, false], 
['Ari', '...🤔', '', -4, false], 
['Rin', 'Yeah so far so good! Good job Arnold', '', 1, false], 
['Arnold', 'Great! Please keep the feedback coming!', '', 1, false], 

/** DAY 3: LONGWEI PUTS ON THE ARMLET **/
['', 'Friday April 30 09:08AM', '', 1, false], 
['Arnold', 'Good morning Longwei! I believe The Armlet (TM) has been delivered to your apartment building as of 45 seconds ago.', '', 1, false], 
['Longwei', ['Uhh okay... Still waking up here...', 'I\'ll try it on right away!'], '', [1, 2], false], 
['Rin', 'YEEETT go try it now', '', 1, false], 
['Arnold', 'Very nice! Getting your metrics...', '', 1, false], 
['Arnold', 'Lovely to feel the gastrointestinal activity with the protein shake you must have had just now!', '', 1, false], 
['Wade', 'hey arnold', '', 1, false], 
['Wade', 'i tried to take the band off for shower this morning and couldnt, whats the deal?', '', 1, false], 
['Arnold', 'Just a safety measure until our testing term is complete. It should unlock automatically 72 hours upon equipping.', '', 1, false], 
['Ari', 'What? I wish we knew that earlier.', '', 1, false], 

['', 'Friday April 30 01:02PM', '', 1, false], 
['Rin', 'Not sure if this is amazing or scary', '', 1, false], 
['Rin', 'I just ran 30 miles without taking a break', '', 1, false], 
['Arnold', 'Make sure to consume at least 3000 calories.', '', 1, false], 
['Rin', 'I feel... invincible?', '', 1, false], // 159? 
['Arnold', 'Make sure to consume at least vﾔvﾔvﾔvﾔ 瘍vﾔcｷh・ｵﾊ・/ ・ﾖﾚYﾗk・・<・4ﾜ搗ｼ~', '', 1, false], 
['Arﾅ}od', '{ﾃﾏ・蝣ﾓ｣ﾟ%ﾔ珒ｺla"	ﾏ・a岐?・&・-畦ｱﾝﾈ<｡7ｬrﾅ}ﾀ篝ぴ・eﾂ~c\]DYﾈNHQ髴ﾗD・・d・_覆・ｷｸｵｰﾜ_ﾈ・・・ 榘非・菠的ｨQﾓ=}kﾏuﾟ獄}｡ｦ]・隴\ｬﾟﾓｭs:7険ｼSzﾒGｵWw偈;｡・ﾙ剰?Jｨ礦ﾕ蝪ﾍﾊ{ﾍｶｭ抛ﾚ・ｿ-ｬ｢oｼ;ｳ・ ・kﾟt・・iﾌｩﾈW・ｿ竊升Oｴ6ｭ|ﾜﾍ4C	t1・ﾖ溪ﾍC]ｶ・磊ｳｳcn瞿・ｭ｣υ・会杖&;;-ｳ]4lﾍ・Aw浣zv吶ﾘ皦o突V$$@茁=>lgJﾝ・華顕・^ﾙj・4&ｽp霧~輊1ｨ脛懿~・懺ﾍﾏ京o・h\・ｭ躪・解F ｺﾃ・ﾕ・ﾌ端\I其3ﾀ・coｽモﾐ期wNスﾓﾇ仄・薑ﾍ嬰Q・7躾W涖・停I<E・ﾒｪ倶・ﾖQｲ舍・ｰ撫D]9ﾙﾘ・}ﾆ轄.6/ﾌﾜ框ﾅ餡贋FU5・C懴La匂胝ｩNoｯ萃=ｸｫｫ早?ｼ{Q', '', 1, false], 
['EFFECT', 'REMOVE', 2, 1, false],
['Arnold', 'How is everyone else? Ari?', '', 1, false],
['Ari', 'MY BODY FAT WENT DOWN TO 27%!!!!!!!!!!', '', 1, false],
['Ari', 'IS THIS REAL LIFE????', '', 1, false],
['Ari', 'I feel like I\'m back in high school again 😭😭😭😭😭😭😭', '', 1, false],
['Ari', 'After all of this adulting', '', 1, false],
['Ari', 'Finally I have time to take care of myself', '', 1, false],
['Ari', 'And this is seriously like', '', 1, false],
['Ari', 'The best thing 😭😭😭😭😭😭😭', '', 1, false],
['Ari', 'I\'m so happy...', '', 1, false],
['Wade', 'dont get too happy yet', '', 1, false],
['Wade', 'this is just the beginning', '', 1, false],
['Wade', '', 'images/back.jpg', 1, false],
['Wade', 'just had a friend take this pic', '', 1, false],
['Longwei', ['Nice', 'Looks like a stock photo'], '', [1, 1], false],
['Wade', 'thanks', '', 1, false],
['Ari', '🤣', '', 1, false],
['Rin', 'I can\'t stop eating', '', 1, false], 
['Rin', 'I think that\'s a good sign?', '', 1, false], 
['Arnold', 'This is very exciting!', '', 1, false], 
['Arﾅ}od', '・鞘ｷ｡ｹｼ嵬ﾕｴﾖ浅 腓q・ﾕｾ｣ｧｬﾝﾝh2.同!!', '', 1, false], 
['EFFECT', 'REMOVE', 1, 1, false],

/** DAY 4 **/
['', 'Saturday May 1 09:02AM', '', 1, false], 
['Rin', 'It\'s the weekend y\'alll', '', 1, false], 
['Rin', 'You know what that means??', '', 1, false], 
['Longwei', ['More time to work out!!!', 'GET SWOLE TIME!!!! 🙌🙌🙌🙌🙌'], '', [1, 1], false],

['', 'Saturday May 1 11:02AM', '', 1, false], 
['Ari', 'Ummm.... I\'m kinda freaking out', '', 1, false], 
['Ari', 'I\'m detangling my hair and my hair won\'t stop falling out.', '', 1, false], 
['Ari', 'Does anyone see this?', '', 1, false], 
['Ari', 'Can someone respond?', '', 1, false], 
['Ari', 'Please?', '', 1, true], 
['Longwei', ['Chill out, it\'s just hair', 'You okay?'], '', [1, 3], false],
['Ari', 'WTF Longwei', '', 1, false],
['Ari', 'ITS NOT JUST HAIR', '', 1, false],
['Ari', 'It\'s MY hair', '', 1, false],
['Ari', 'I can\'t...', '', 2, false],
['Ari', 'I\'m not okay. I\'m not okay Longwei.', '', 1, false],
['Ari', 'But thanks for responding.', '', 1, false],
['Ari', 'Fuck!', '', 1, false],

['', 'Saturday May 1 02:01PM', '', 1, false], 
['Wade', 'theres definitely something going on', '', 1, false],
['Wade', 'ive been drinking gallons of water every hour', '', 1, false],
['Wade', 'so fucking thirsty', '', 1, false],
['Rin', 'Uhhhhh.... could it be allergies? It\'s springtime!', '', 1, false],
['Ari', 'No Rin, this doesn\'t fucking happen because of allergies ok?', '', 1, false],
['Ari', 'Arnold?', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Arﾅ}od', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Wade', 'fucking bugged', '', 1, false],
['Wade', 'im gonna kick it out', '', 1, false],
['', 'Wade removed Arnold from 💪Swole Squad🥊🐜🥗', '', 1, false],
['', 'Arnold has entered 💪Swole Squad🥊🐜🥗', '', 1, false],
['Wade', 'ari did you add it back?', '', 1, false],
['Ari', 'Nope', '', 1, false],
['Rin', 'This is freaking me out', '', 1, false],
['Arnold', 'Hi everyone! I\'m Arnold, and I\'m your friendly fitness assistant here to help you achieve your fitness goals!', '', 1, false],
['Longwei', ['I\'m feeling fine.', 'Wade, how did you hear about Arnold in the first place?'], '', [1, 2], false],
['Rin', 'Who had the brilliant genius of adding this bot to this chat?', '', 1, false],
['Wade', 'uhh', '', 1, false],
['Wade', 'idk', '', 1, false],
['Rin', 'My armband is itching my skin.', '', 1, false],
['Wade', 'some guy at the gym', '', 1, false],
['Rin', 'What guy?', '', 1, false],
['Wade', 'I think his name is elias or ermias or something? said he was from baltimore?', '', 1, false],
['Ari', 'I know who you\'re talking about. I have his insta.', '', 1, false],
['Ari', 'Fuck.', '', 1, false],
['Ari', '', 'images/insta.png', 1, false],
['Ari', 'He died two days ago.', '', 1, false],
['Rin', 'No details?', '', 1, false],
['Ari', 'This is too much.', '', 1, false],
['Wade', 'so thirsty', '', 1, false],
['Ari', 'I\'M ON MY 10TH PACK OF TOFU OK?', '', 1, false],
['Ari', 'I CAN\'T HANDLE IT ANYMORE', '', 1, false],
['Rin', 'Can I help you somehow?', '', 1, false],
['Wade', 'gonna go hit the gym', '', 1, false],
['Wade', 'cant sit still', '', 1, false],
['Ari', 'I\'m gonna try to sleep again but I get so hungry', '', 1, false],
['Ari', 'Gonna grab a wine or something. Maybe it\'ll calm me down', '', 1, false],
['Arnold', 'This is very exciting!', '', 1, false], 
['Arﾅ}od', '・鞘ｷ｡ｹｼ嵬ﾕｴﾖ浅 腓q・ﾕｾ｣ｧｬﾝﾝh2.同!!', '', 1, false],
['EFFECT', 'REMOVE', 2, 1, false],

/** DAY 5 **/
['', 'Sunday May 2 11:02AM', '', 1, false], 
['Rin', 'Ari, feeling better?', '', 1, false],

['', 'Sunday May 2 02:12PM', '', 1, false], 
['Rin', 'Wade?', '', 1, false],

/** DAY 6 **/
['', 'Sunday May 3 08:27AM', '', 1, false], 
['EFFECT', 'BLOOD', '', 1, false],
['Arﾅ}od', '・鞘ｷ｡ｹｼ嵬ﾕｴﾖ浅 腓q・ﾕｾ｣ｧｬﾝﾝh2.同!!', '', 1, false], 

['', 'Sunday May 3 10:02AM', '', 1, false], 
['EFFECT', 'BLOOD', '', 1, false], 
['Arﾅ}od', '・鞘ｷ｡ｹｼ嵬ﾕｴﾖ浅 腓q・ﾕｾ｣ｧｬﾝﾝh2.同!!', '', 1, false], 

['', 'Sunday May 3 11:02AM', '', 1, false], 
['Rin', 'I just talked to Ari\'s roommate', '', 1, false], 
['Rin', 'She said her corpse looked dried up', '', 1, false], 
['Rin', 'Like an overcooked roasted turkey', '', 1, false], 
['Rin', 'No moisture, no fat', '', 1, false], 
['Rin', 'Crispy skin on flesh', '', 1, false], 
['Rin', 'And what\'s worse...', '', 1, false], 
['Rin', 'A chunk of flesh from her arm was missing. Like she had eaten it herself.', '', 1, false], 
['Rin', 'Fuck.', '', 1, false], 
['Rin', 'I\'m scared, Longwei.', '', 1, false], 
['Rin', 'As I talk about Ari\'s corpse I can\'t stop salivating', '', 1, false], 
['Rin', 'It\'s this armlet', '', 1, false], 
['Rin', 'It feels like it\'s digging inside of me', '', 1, false], 
['Rin', 'Deeper and deeper', '', 1, false], 
['Rin', 'My body feels out of control', '', 1, false], 
['Rin', 'I want to exercise', '', 1, false], 
['Rin', 'I want to eat', '', 1, false], 
['Rin', 'I want to drink', '', 1, false], 
['Rin', 'I can\'t stop', '', 1, false], 
['Rin', 'What are we gonna do?', '', 1, false], 

/* Implied Rin's death */
['', 'Sunday May 3 09:27PM', '', 1, false],  
['EFFECT', 'BLOOD', '', 1, false], 
['Arﾅ}od', '・鞘ｷ｡ｹｼ嵬ﾕｴﾖ浅 腓q・ﾕｾ｣ｧｬﾝﾝh2.同!!', '', 1, false], 

/* Implied Longwei's death */
['', 'Monday May 4 09:08AM', '', 1, false], 
['EFFECT', 'BLOOD', '', 1, false], 
['Arﾅ}od', '・鞘ｷ｡ｹｼ嵬ﾕｴﾖ浅 腓q・ﾕｾ｣ｧｬﾝﾝh2.同!!', '', 1, false], 

/* Epilogue */
['EFFECT', 'CLEAR_CHAT', '', 1, false], 
['EFFECT', 'SET_CHAT', '🧘Yogi Sisters🧙‍♀', 1, false], 
['', 'Tuesday May 5 11:48AM', '', 1, false], 

['Lottie', 'Heyyy ladies!!! Ready for breaking some sweat with hot yoga at lunchtime!??!', '', 1, false],
['Reena', 'I\'m feeling a little unsettled after hearing disturbing story about how some bodybuilders passed away in extremely disturbing ways.', '', 1, false],
['Sam', 'Yeah yeah I heard about it too', '', 1, false],
['Sam', 'They were found dead all wearing some band on their arm right?', '', 1, false],
['Sam', 'Just regular old bands made of silicone', '', 1, false],
['Sam', '🤔🤔🤔', '', 1, false],
['Reena', 'It sounds like they were part of a chat group that focused on fitness.', '', 1, false],
['Reena', 'And they had included a bot in the chat.', '', 1, false],
['Lottie', 'Oh speaking of which, I was thinking about adding one to this group!', '', 1, false],
['Sam', 'Arnold', '', 1, false],
['Sam', 'That\'s what the bot was called', '', 1, false],
['Reena', 'Could it be that Arnold was never a bot and was a real life person plotting to kill them?', '', 1, false],
['Reena', 'Or, perhaps, a spirit of a desperate bodybuilder...', '', 1, false],
['Sam', '🤣', '', 1, false],
['Sam', 'Pretty sure it\'s just drugs and mental illness', '', 1, false],
['Lottie', 'Good thing yoga strengthens the mind as well!', '', 1, false],
['Lottie', 'Also good thing that the bot I was going to add is not Arnold.', '', 1, false],
['Lottie', 'It\'s called Ari.', '', 1, false],

/* END GAME */
['EFFECT', 'BLACK_SCREEN', '', 1, false], 
['EFFECT', 'CLEAR_SCREEN', '', 1, false], 
['EFFECT', 'CLEAR_CHAT', '', 1, false], 
['EFFECT', 'SET_CHAT', 'Thank you for playing 🎉🎉🎉', 1, false], 

['hinerz', 'Thank you for playing!', '', 1, false], 
['hinerz', 'In the current story there\'s no way to get out alive but I hope I can add that sometime in the future!', '', 1, false], 

['hinerz', 'The writing, programming, music, and most of the images were done by me, hinerz, in under 48 hours (possibly more like 20) for the Ludum Dare game jam.', '', 1, false], 
['hinerz', 'Thankfully, I did not have to lose any sleep... 😊', '', 1, false], 
['hinerz', 'So I can be ready and healthy for my second COVID vaccine tomorrow!', '', 1, false], 

['hinerz', 'I\'d like to credit the images I used in the game:', '', 1, false], 
['hinerz', 'nakaridore for their images of \"Ari\" on www.freepik.com', '', 1, false], 
['hinerz', 'drobotdean for their images of \"Wade\" on www.freepik.com', '', 1, false], 
['hinerz', 'and wirestock for their image of lions on www.freepik.com', '', 1, false], 
['hinerz', 'The web design for this game was built on top of Sajad Hashemian\'s example UI', '', 1, false], 
['hinerz', 'Available at https://codepen.io/sajadhsm/pen/odaBdd', '', 1, false], 
['hinerz', 'I also took a chunk of Impacts_Splatter_Watermelon_002.wav from duckduckpony on freesound.', '', 1, false], 

['hinerz', 'Finally, thanks to my friends and various communities for informing me on fitness!', '', 1, false], 

['hinerz', 'Feel free to refresh the page to play again!', '', 1, false]
];
let INDEX_GROUP = 0;

const SCRIPT_RIN = [

];

// set current script
let SCRIPT = SCRIPT_GROUP
let INDEX = INDEX_GROUP
let WAIT_FOR_PLAYER = false
let REMOVING = false
let last_body_html = '';
blackScreen.style.display = "none";

const send_sound = new Audio('audio/send.wav');
const normal_alert = new Audio('audio/alert.wav');
const distorted_alert = new Audio('audio/distorted-alert.wav');
const very_distorted_alert = new Audio('audio/very-distorted-alert.wav');
const noise = new Audio('audio/noise.wav');
const unsettling_level_0 = new Audio('audio/unsettling-level0.wav');
const unsettling_level_1 = new Audio('audio/unsettling-level1.wav');
const want_to_be_swole = new Audio('audio/want-to-be-swole.wav');
const splatter = new Audio('audio/splatter.wav');
function playAlert(characterName) {
    audio = normal_alert;
    if (characterName == "Arﾅ}od") {
        audio = very_distorted_alert;
    }
    dice = Math.random();
    if (INDEX >= 138 && INDEX < 286) {
        if (dice < 0.1) {
            audio = distorted_alert;
        } else if (dice < 0.12) {
            console.log("suepr distort")
            audio = very_distorted_alert;
        }
    }
    if (INDEX >= 193 && INDEX < 286) { // Ari & Wade start experiencing symptons
        if (dice < 0.3) {
            audio = distorted_alert;
        } else if (dice < 0.32) {
            console.log("super distort")
            audio = very_distorted_alert;
        }
    }
    audio.volume = 0.2;
    audio.play();
}

const WHY_CANT_WE_KICK_IT_OUT = 220;
const OH_NO = 255;
const THIS_IS_SCARY = 260;
const IM_GOING_TO_DIE = 261;
const YOGA_TIME = 286;
const ITS_ARI = 305;
const STORYTIME_IS_OVER = 307;
const GAME_IS_OVER = 321;

function doGameWideStuff() {
    /** For audio and other big things*/
    if (INDEX == WHY_CANT_WE_KICK_IT_OUT) {
        //noise
        noise.volume = 0.1;
        noise.loop = true;
        noise.play();
    }
    if (INDEX == OH_NO) {// Off the deep end)
        noise.pause();
        unsettling_level_0.loop;
        unsettling_level_0.play();
    }
    if (INDEX == THIS_IS_SCARY) {// Off the deep end)
        unsettling_level_1.loop = true;
        unsettling_level_1.volume = 0.3;
        unsettling_level_1.play();
    }
    if (INDEX == IM_GOING_TO_DIE) {
        want_to_be_swole.loop =true;
        want_to_be_swole.play();
    }
    if (INDEX == YOGA_TIME ) {
        want_to_be_swole.pause()
        unsettling_level_1.pause()
    }
    if (INDEX == ITS_ARI) {
        noise.volume = 0.1;
        noise.loop = false;
        noise.play();
    }
    if (INDEX == STORYTIME_IS_OVER) {
        noise.pause();
        realLifeTime();
    }
}

const PLAYABLE_CHARACTER_NAME = 'Longwei'
const CHARACTERS = {
    "Wade": "images/wade.jpg",
    "Ari": "images/ari.jpg",
    "Longwei": "images/longwei.JPG",
    "Rin": "images/rin.jpg",
    "Arnold": "images/arnold.png",
    "Arﾅ}od": "images/arnoooold.png",
    "hinerz": "images/hinerz.png",
    'Lottie': 'images/lottie.jpg',
    'Reena': 'images/reena.jpg',
    'Sam': 'images/sam.jpg',
}

function ChangeChat() {
  // Show black screen meanwhile
  saveChat(); // save current chat
  changeColors(); // change the setting
  fillChat(); // fill with texts
  // Remove black screen
}

function realLifeTime() {
    var now = new Date();
    time.innerHTML = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes();
    // call this function again in 1000ms
    setTimeout(realLifeTime, 1000);
}

let currScrollTop = 0;

fullScreen.addEventListener("click", event=> {
  clickEvent();
});

blackScreen.addEventListener("click", event => {
  clickEvent();
});

function clickEvent() {
   console.log(INDEX);
  if (REMOVING || INDEX == GAME_IS_OVER) {
    return;
  }
  doGameWideStuff();
  const charName = SCRIPT[INDEX][0];
  if (charName == "") {
      const notice = SCRIPT[INDEX][1];
      addAdminNotice(notice);
      if (notice.includes("PM") || notice.includes("AM")) {
          time.innerHTML = notice.substring(notice.length-7, notice.length-2);
      }
      INDEX += SCRIPT[INDEX][3];
      clickEvent();
  }
  else if (charName == "EFFECT") {
  console.log(SCRIPT[INDEX]);
      const effectName = SCRIPT[INDEX][1]
      if (effectName == 'REMOVE') {
          REMOVING = true;
          numberOfChatsToRemove = SCRIPT[INDEX][2];
          removeChatBubbles(numberOfChatsToRemove);
          INDEX += SCRIPT[INDEX][3];
          clickEvent();
      }
      if (effectName == 'BLACK_SCREEN') {
        fullScreen.style.display="none";
        blackScreen.style.display="block";
        fullScreen.style.zIndex = "0"
        blackScreen.style.zIndex = "1";
        INDEX += SCRIPT[INDEX][3];
      }
      if (effectName == 'CLEAR_SCREEN') {
          blackScreen.style.display= "none";
          fullScreen.style.display = "flex";
          blackScreen.style.zIndex = "0";
          fullScreen.style.zIndex = "1"
          INDEX += SCRIPT[INDEX][3];
          clickEvent();
      }  
      
      if (effectName == 'BLOOD') {
        bloodHTML = `<div class="overlay"><img src="images/blood.png"></div>`;
        fullScreen.insertAdjacentHTML("beforebegin", bloodHTML);
        splatter.play();
        delay = 100
        setTimeout(() => {
            const overlay = document.getElementsByClassName("overlay")[0];
            if (overlay.parentNode){
                overlay.parentNode.removeChild(overlay);
            }
        }, delay);  
        INDEX += SCRIPT[INDEX][3];
        clickEvent();
      }
      if (effectName == 'CLEAR_CHAT') {
        removeChatBubbles(0);
        INDEX += SCRIPT[INDEX][3];
        clickEvent();
      }   
      if (effectName == 'SET_CHAT') {
        title.innerHTML = SCRIPT[INDEX][2];
        INDEX += SCRIPT[INDEX][3];
        clickEvent();
      }
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
        playAlert(charName);
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
  document.querySelectorAll('.msger-inputarea-choice').forEach(element=> 
    element.addEventListener("click", event => {
      charName = PLAYABLE_CHARACTER_NAME
      event.preventDefault();
      const msgText = element.querySelector(".msger-input").value;
      const index = element.querySelector(".msger-input").name;
      if (!msgText) return;
      appendMessage(charName, CHARACTERS[charName], "right", msgText);
      send_sound.play();
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
  <form class="msger-inputarea-choice">
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
          <div class="msg-info-time">${time.innerHTML}</div>
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

function removeChatBubbles(number_to_remove) {
    if (number_to_remove < 1) {
        number_to_remove = chatArea.childNodes.length;
    }
    for (let i = 1; i <= number_to_remove*2 && chatArea.childNodes.length-1 > 0; i++) {
        let children = chatArea.childNodes
        chatArea.removeChild(children[children.length-1]);
    }
    REMOVING = false;
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}