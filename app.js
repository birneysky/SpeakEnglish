const lessons = [
  {
    category:'home', unit:'家庭生活 · 早晨', title:'Good Morning!', zhTitle:'起床问早安', goal:'学会起床后问候家人，并回答自己的状态。', image:'assets/images/lesson-01.webp',
    intro:'第一课发生在早晨。我们要学会向家人说早安，问对方睡得怎么样，还要说自己已经准备好起床了。',
    questions:['Who can you see?','Is it morning?','How does the child feel?'],
    lines:[['Mom','Good morning, Mia.','早上好，米娅。'],['Mia','Good morning, Mom.','早上好，妈妈。'],['Mom','Did you sleep well?','你睡得好吗？'],['Mia','Yes, I did.','是的，睡得很好。'],['Mom','Time to get up.','该起床了。'],['Mia',"Okay. I'm ready!",'好的，我准备好了！']],
    tips:[['good','不是“古德”。嘴唇放松，短短地说 /gʊd/。'],['morning','重音在前面：MOR-ning，后半部分要轻。'],['Good morning','两词连起来说，good 的 d 轻轻碰到 morning。']],
    tipAudio:[['中文','Good 里的元音要短，嘴唇稍微收圆。'],['英文','good'],['中文','Morning 的重音在第一个音节。'],['英文','morning'],['中文','现在把两个词连起来。'],['英文','Good morning.']],
    pattern:'Good morning, ____!', swaps:['Mom','Dad','Grandma','Grandpa'],
    steps:['看图猜时间，用中文说出人物正在做什么。','教师播放中文讲解，再播放慢速对话。','师生分角色读两遍，然后交换角色。','替换家人称呼，孩子独立完成一次问候。'],
    check:'不看文字，能自然说出“Good morning”并完成至少两轮问答。'
  },
  {
    category:'home', unit:'家庭生活 · 早餐', title:'Can I Have Some Milk?', zhTitle:'早餐礼貌请求', goal:'在餐桌上礼貌地要食物，并表达感谢。', image:'assets/images/lesson-02.webp',
    intro:'第二课发生在早餐桌。我们练习用 Can I have 来提出请求，用 Here you are 来递东西，最后别忘了说谢谢。',
    questions:['What is on the table?','What does the child want?','What do you like for breakfast?'],
    lines:[['Child','Can I have some milk, please?','请给我一些牛奶，可以吗？'],['Dad','Sure. Here you are.','当然，给你。'],['Child','Thank you, Dad.','谢谢你，爸爸。'],['Dad',"You're welcome.",'不客气。'],['Dad','Do you want some bread?','你想吃些面包吗？'],['Child','Yes, please.','好的，谢谢。']],
    tips:[['Can I','自然说话时 can 常读得很轻：/kən aɪ/。'],['please','中间是长音 /iː/，嘴角微微向两边。'],['thank','轻咬舌尖送气，再收回，不要读成 sank。']],
    tipAudio:[['中文','Can I 连起来时，can 要读轻一点。'],['英文','Can I?'],['中文','Please 中间的音要拉长一点。'],['英文','please'],['中文','Thank 的开头，舌尖轻轻放在上下牙齿之间送气。'],['英文','thank you']],
    pattern:'Can I have some ____, please?', swaps:['milk','bread','water','fruit'],
    steps:['看图指出食物，复习四个食物词。','听慢速对话，孩子听到 please 就举手。','两人用实物或卡片练习递物品。','孩子自己选择食物，完成一轮真实请求。'],
    check:'能用完整句提出请求，并在收到物品后主动说 Thank you。'
  },
  {
    category:'home', unit:'家庭生活 · 穿衣', title:"It's Raining Today", zhTitle:'天气与穿衣', goal:'说出天气，并用 put on 提醒穿戴。', image:'assets/images/lesson-03.webp',
    intro:'第三课是下雨天出门。我们要说今天的天气，还要学会提醒别人穿雨衣、带雨伞。',
    questions:['What is the weather like?','What should the child wear?','Can you find the umbrella?'],
    lines:[['Mom',"It's raining today.",'今天下雨。'],['Child','I see the rain.','我看到雨了。'],['Mom','Put on your raincoat.','穿上你的雨衣。'],['Child','Where are my boots?','我的雨靴在哪里？'],['Mom',"They're by the door.",'它们在门边。'],['Child',"Got them. Let's go!",'拿到了，我们走吧！']],
    tips:[["It's","It is 缩短成 It's，结尾 /ts/ 要轻快。"],['raining','rain 是主干，rain-ing 两拍说清楚。'],['put on','两个词连起来，像 put_on，中间不要停。']],
    tipAudio:[['中文',"It's 是 It is 的缩写，结尾要听见轻轻的 ts。"],['英文',"It's raining."],['中文','Raining 分成 rain 和 ing 两部分。'],['英文','rain-ing'],['中文','Put on 连起来，中间不要停。'],['英文','put on your raincoat']],
    pattern:'Put on your ____.', swaps:['raincoat','boots','hat','jacket'],
    steps:['看图找出三件雨天用品。','教师说天气，孩子做穿衣动作。','播放三档语速，对比哪些词始终听得清。','用自己的衣物替换练习并表演出门。'],
    check:'能说出 It’s raining，并听懂、说出至少两个 Put on your… 句子。'
  },
  {
    category:'home', unit:'家庭生活 · 帮忙', title:'Can I Help?', zhTitle:'主动帮助家人', goal:'主动询问能否帮忙，并听懂简单家务指令。', image:'assets/images/lesson-04.webp',
    intro:'第四课是在家准备晚餐。我们练习主动问 Can I help，再听懂摆盘子、拿杯子这样的简单任务。',
    questions:['What are they doing?','What can the child carry?','How do you help at home?'],
    lines:[['Child','Can I help?','我可以帮忙吗？'],['Mom','Yes, please.','可以，谢谢。'],['Mom','Set the table, please.','请摆好餐桌。'],['Child','Okay. I can do it.','好的，我能做到。'],['Mom','Please bring two cups.','请拿两个杯子来。'],['Child','Here they are!','拿来了！']],
    tips:[['help','结尾的 p 要收住，嘴唇合上再轻轻送气。'],['the','舌尖轻碰牙齿，轻声说 /ðə/。'],['can do','重读 do，表示“我能做到”。']],
    tipAudio:[['中文','Help 的最后要让双唇合起来，发出轻轻的 p。'],['英文','help'],['中文','The 的开头，舌尖轻轻放在牙齿之间。'],['英文','the table'],['中文','I can do it 里，do 可以读得更有力。'],['英文','I can do it.']],
    pattern:'Please bring ____.', swaps:['two cups','the plates','a spoon','a napkin'],
    steps:['看图数一数杯子和盘子。','跟动作学 help、set、bring。','两人扮演家长和孩子，使用餐具卡片。','让孩子自己提出一件今天能帮忙做的事。'],
    check:'能主动说 Can I help，并正确完成一个英语家务指令。'
  },
  {
    category:'home', unit:'家庭生活 · 找东西', title:'Where Is My Teddy?', zhTitle:'寻找物品', goal:'询问物品在哪里，并使用 in、on、under 回答。', image:'assets/images/lesson-05.webp',
    intro:'第五课要在客厅找玩具。我们练习 Where is my，和用 on、in、under 说清楚位置。',
    questions:['What is the child looking for?','What is under the chair?','Where is the blue book?'],
    lines:[['Child','Where is my teddy bear?','我的泰迪熊在哪里？'],['Dad','Is it on the sofa?','它在沙发上吗？'],['Child',"No, it isn't.",'不，它不在那里。'],['Dad','Look under the chair.','看看椅子下面。'],['Child','There it is!','它在那里！'],['Child','Thank you for helping me.','谢谢你帮我。']],
    tips:[['Where is','自然连读成 where_is，不要在中间停。'],['under','重音在前：UN-der。'],["isn't","is not 缩短，结尾 t 轻轻收住。"]],
    tipAudio:[['中文','Where is 连起来说，中间不要停。'],['英文','Where is my teddy bear?'],['中文','Under 的重音在第一个音节。'],['英文','under the chair'],['中文',"Isn't 是 is not 的缩写。"],['英文',"No, it isn't."]],
    pattern:'It is ____ the ____.', swaps:['on / sofa','in / box','under / chair','by / door'],
    steps:['把一个玩具藏在教室里，先用中文描述位置。','听对话并指向图中相应位置。','用 on、in、under 做动作口令。','孩子藏物品，教师或同伴提问寻找。'],
    check:'能提出 Where is…，并用一个完整位置句回答。'
  },
  {
    category:'home', unit:'家庭生活 · 感受', title:'How Do You Feel?', zhTitle:'表达感受', goal:'询问和表达开心、难过、疲倦等日常感受。', image:'assets/images/lesson-06.webp',
    intro:'第六课是在放学回家以后。我们学会问对方感觉怎么样，也学会说自己累了、饿了或很开心。',
    questions:['How does the child feel?','What can the parent do?','How do you feel now?'],
    lines:[['Dad','How do you feel?','你感觉怎么样？'],['Child',"I'm a little tired.",'我有一点累。'],['Dad','Do you want to rest?','你想休息一下吗？'],['Child','Yes, please.','好，谢谢。'],['Dad',"I'll get you some water.",'我给你拿些水。'],['Child','Thanks, Dad.','谢谢，爸爸。']],
    tips:[['How do you','正常语速会连成 /haʊ də jə/，先慢慢分开练。'],['tired','像 tire 后面轻加 d，不要多加一个音节。'],['little','美式口语中间的 t 很轻，先清楚读再加速。']],
    tipAudio:[['中文','How do you 在自然语速里会连起来。'],['英文','How do you feel?'],['中文','Tired 通常读成一个音节。'],['英文','tired'],['中文','A little 表示一点点。'],['英文',"I'm a little tired."]],
    pattern:"I'm a little ____.", swaps:['tired','hungry','sad','cold'],
    steps:['用表情和动作猜 tired、hungry、sad、happy。','听中文讲解和慢速对话。','抽取情绪卡，表演并回答 How do you feel。','联系真实生活，说出现在的感受和一个需要。'],
    check:'能用 I’m… 表达一种真实感受，并听懂对方提出的帮助。'
  },
  {
    category:'school', unit:'学校生活 · 见面', title:'Nice to Meet You', zhTitle:'认识新同学', goal:'介绍姓名、问候新同学，并礼貌回应。', image:'assets/images/lesson-07.webp',
    intro:'第七课来到教室，认识一位新同学。我们要会说自己的名字，问别人叫什么，并说很高兴认识你。',
    questions:['Where are the children?','Are they meeting for the first time?','What would you say first?'],
    lines:[['Ben',"Hi! I'm Ben.",'你好！我是本。'],['Mia',"Hi, Ben. I'm Mia.",'你好，本。我是米娅。'],['Ben',"What's your name?",'你叫什么名字？'],['Mia','My name is Mia.','我叫米娅。'],['Ben','Nice to meet you.','很高兴认识你。'],['Mia','Nice to meet you, too.','我也很高兴认识你。']],
    tips:[["I'm","I am 缩成 I'm，m 要收在嘴唇上。"],['name','中间是 /eɪ/，嘴形从扁慢慢放松。'],['meet','长音 /iː/，嘴角稍向两边。']],
    tipAudio:[['中文',"I'm 是 I am 的缩写。"],['英文',"I'm Mia."],['中文','Name 中间的音像字母 A 的名字。'],['英文','name'],['中文','Meet 中间的音要稍微拉长。'],['英文','Nice to meet you.']],
    pattern:"Hi! I'm ____.", swaps:['Mia','Ben','Amy','Leo'],
    steps:['教师用玩偶演示第一次见面的对话。','孩子拍手跟读姓名句和问句。','全班走动，和三位同学互相介绍。','请两组到前面脱稿表演。'],
    check:'能完成“问姓名—答姓名—礼貌结束”的三步对话。'
  },
  {
    category:'school', unit:'学校生活 · 文具', title:'May I Borrow a Pencil?', zhTitle:'借用文具', goal:'礼貌借文具、递出物品并归还致谢。', image:'assets/images/lesson-08.webp',
    intro:'第八课练习向同桌借文具。May I borrow 是非常实用的礼貌问法，借到以后要说谢谢。',
    questions:['What does the child need?','What school things can you see?','How do we ask politely?'],
    lines:[['Mia','May I borrow a pencil?','我可以借一支铅笔吗？'],['Ben','Sure. Here you are.','当然，给你。'],['Mia','Thank you.','谢谢。'],['Ben',"You're welcome.",'不客气。'],['Mia','Here is your pencil.','这是你的铅笔。'],['Ben','Thanks!','谢谢！']],
    tips:[['May I','连起来说 /meɪ aɪ/，两个元音之间不断开太久。'],['borrow','重音在前：BOR-row，第二部分轻。'],['pencil','第一拍重，第二拍轻：PEN-cil。']],
    tipAudio:[['中文','May I 连起来说会更自然。'],['英文','May I borrow a pencil?'],['中文','Borrow 的重音在第一个音节。'],['英文','borrow'],['中文','Pencil 也是前重后轻。'],['英文','pencil']],
    pattern:'May I borrow a ____?', swaps:['pencil','ruler','crayon','eraser'],
    steps:['看图快速指出四种文具。','教师故意少一支笔，演示真实借用。','四人一组轮流借、递、还文具。','遮住文字，让孩子只看物品完成对话。'],
    check:'能礼貌借一种文具，并完整说出感谢与回应。'
  },
  {
    category:'school', unit:'学校生活 · 求助', title:"I Don't Understand", zhTitle:'课堂上请求帮助', goal:'听不懂时敢于说明，并请老师再说一遍。', image:'assets/images/lesson-09.webp',
    intro:'第九课教孩子在课堂上真正有用的一句话：听不懂时不要沉默，可以礼貌地请老师再说一次。',
    questions:['Who needs help?','What is the teacher doing?','What can you say when you do not understand?'],
    lines:[['Teacher','Open your book, please.','请打开书。'],['Child',"Sorry, I don't understand.",'对不起，我没听懂。'],['Teacher',"That's okay.",'没关系。'],['Child','Can you say it again, please?','请您再说一遍，可以吗？'],['Teacher','Open your book.','打开你的书。'],['Child','Oh, I understand now.','哦，我现在明白了。']],
    tips:[["don't",'重读 don’t，让别人马上知道你没有听懂。'],['understand','重音在最后一段：under-STAND。'],['again','美式常读 /əˈɡen/，第二拍重。']],
    tipAudio:[['中文',"I don't understand 里，don't 和 stand 更清楚。"],['英文',"I don't understand."],['中文','Understand 的重音在最后。'],['英文','understand'],['中文','Again 的第二个音节更重。'],['英文','Can you say it again, please?']],
    pattern:'Can you ____ again, please?', swaps:['say it','show me','read it','help me'],
    steps:['教师给一个孩子听不懂的假指令，引出求助。','逐句练习 Sorry、I don’t understand。','用清楚、含糊两种说法做听辨游戏。','让孩子在真实课堂指令中主动请求重复。'],
    check:'遇到没听懂的内容，能主动使用至少一句求助表达。'
  },
  {
    category:'school', unit:'学校生活 · 课间', title:'Can I Play with You?', zhTitle:'加入同伴游戏', goal:'礼貌加入游戏，并使用轮流、一起玩的表达。', image:'assets/images/lesson-10.webp',
    intro:'第十课发生在课间。我们练习怎样礼貌加入同学的游戏，以及怎样说轮到你、轮到我。',
    questions:['What game are they playing?','Does someone want to join?','How can we invite a friend?'],
    lines:[['Mia','Can I play with you?','我可以和你们一起玩吗？'],['Ben','Sure! Come and play.','当然！来一起玩吧。'],['Mia','What are you playing?','你们在玩什么？'],['Ben','We are playing catch.','我们在玩接球。'],['Ben',"It's your turn.",'轮到你了。'],['Mia','Great! Here I go!','太好了！我要开始了！']],
    tips:[['with','结尾是有声音的 /ð/，舌尖轻触牙齿。'],['your','轻读时很短，不要每次都读得很重。'],['your turn','重音落在 turn，信息最重要。']],
    tipAudio:[['中文','With 的结尾，舌尖轻放在牙齿之间并让声带振动。'],['英文','with you'],['中文','Your turn 里 turn 读得更重。'],['英文',"It's your turn."],['中文','问句末尾语调可以稍微上扬。'],['英文','Can I play with you?']],
    pattern:'Can I ____ with you?', swaps:['play','draw','read','sit'],
    steps:['看图判断谁正在邀请、谁正在回应。','用球做传递游戏，每次说 Your turn。','三人一组练习“申请加入—欢迎—开始”。','更换 play、draw、read 创作新对话。'],
    check:'能礼貌申请加入活动，并理解 Your turn。'
  },
  {
    category:'school', unit:'学校生活 · 午餐', title:'What Do You Have for Lunch?', zhTitle:'聊聊午餐', goal:'说出自己的午餐，并询问、回应食物喜好。', image:'assets/images/lesson-11.webp',
    intro:'第十一课是在学校吃午餐。我们要会说自己带了什么，也可以问同学喜不喜欢某种食物。',
    questions:['What food can you see?','What does each child have?','What do you have for lunch?'],
    lines:[['Ben','What do you have for lunch?','你的午餐有什么？'],['Mia','I have rice and chicken.','我有米饭和鸡肉。'],['Mia','What about you?','你呢？'],['Ben','I have a sandwich and an apple.','我有一个三明治和一个苹果。'],['Mia','Do you like apples?','你喜欢苹果吗？'],['Ben','Yes, I do!','是的，我喜欢！']],
    tips:[['What do you','正常语速会连得很紧，先抓住 What 和 have。'],['rice','结尾是 /s/，不要加成 rice-uh。'],['and','句子中常轻读成 /ən/，连接两种食物。']],
    tipAudio:[['中文','What do you 在自然语速中会连起来。'],['英文','What do you have for lunch?'],['中文','Rice 结尾直接停在 s，不要多加声音。'],['英文','rice'],['中文','And 在句子中可以读轻一点。'],['英文','rice and chicken']],
    pattern:'I have ____ and ____.', swaps:['rice / chicken','bread / milk','noodles / eggs','fruit / yogurt'],
    steps:['看图说食物，允许先用单词回答。','听对话，孩子把听到的食物卡排好。','打开自己的午餐盒或使用图片介绍。','两人互问午餐，并追问一种喜好。'],
    check:'能用 I have… 说出两种食物，并向同伴提出一个问题。'
  },
  {
    category:'school', unit:'学校生活 · 放学', title:'How Was School?', zhTitle:'讲讲今天在学校', goal:'用简短句回顾一天，表达感受和最喜欢的部分。', image:'assets/images/lesson-12.webp',
    intro:'最后一课把学校生活带回家。我们练习回答今天怎么样、学到了什么，以及最喜欢哪一部分。',
    questions:['Where are they now?','How does the child feel?','What might the child talk about?'],
    lines:[['Mom','How was school today?','今天在学校怎么样？'],['Child','It was great!','很棒！'],['Mom','What did you learn?','你学了什么？'],['Child','I learned about animals.','我学了动物的知识。'],['Mom','What was your favorite part?','你最喜欢哪一部分？'],['Child','Art class was my favorite.','美术课是我最喜欢的。']],
    tips:[['How was','连起来说时，was 读得轻，How 更清楚。'],['learned','词尾 d 要轻轻收住，不要漏掉。'],['favorite','美式常读三拍：FAV-er-ite，第一拍重。']],
    tipAudio:[['中文','How was 连起来时，was 可以读轻一点。'],['英文','How was school today?'],['中文','Learned 结尾要保留轻轻的 d。'],['英文','I learned about animals.'],['中文','Favorite 的重音在第一个音节。'],['英文','favorite']],
    pattern:'____ was my favorite.', swaps:['Art class','Lunch','The story','The game'],
    steps:['用三张图回顾上课、午餐和课间。','听正常语速，圈出 great、learned、favorite。','亲子或师生完成三问三答。','孩子用今天真实发生的事替换答案。'],
    check:'能用2至3句说出今天的感受、学习内容或最喜欢的活动。'
  }
];

let current = 0;
let filter = 'all';
let playingButton = null;
let playbackVersion = 0;
let recordingLine = 0;
let mediaRecorder = null;
let recordingStream = null;
let recordingChunks = [];
let recordingStartedAt = 0;
let recordingClock = null;
let recordingLimitTimer = null;
let recordingRequestVersion = 0;
let activeRecordingKey = null;
const savedRecordings = new Map();
const $ = id => document.getElementById(id);

function filteredIndexes(){
  return lessons.map((_, i) => i).filter(i => filter === 'all' || lessons[i].category === filter);
}

function renderList(){
  const indexes = filteredIndexes();
  $('lessonList').innerHTML = indexes.map(i => {
    const l = lessons[i];
    return `<li class="lesson-item"><button data-index="${i}" class="${i===current?'active':''}"><span class="lesson-index">${String(i+1).padStart(2,'0')}</span><span class="lesson-label"><strong>${l.zhTitle}</strong><small>${l.title}</small></span></button></li>`;
  }).join('');
  document.querySelectorAll('.lesson-item button').forEach(btn => btn.addEventListener('click', () => selectLesson(Number(btn.dataset.index))));
}

function renderLesson(){
  const l = lessons[current];
  stopSpeech(false);
  $('lessonKicker').textContent = l.unit;
  $('lessonTitle').textContent = l.title;
  $('lessonGoal').textContent = l.zhTitle + '｜' + l.goal;
  $('lessonNumber').textContent = String(current+1).padStart(2,'0');
  $('sceneImage').src = l.image;
  $('sceneImage').alt = `${l.zhTitle}场景图：${l.questions[0]}`;
  $('sceneQuestions').innerHTML = l.questions.map((q, idx) => `<button class="question-chip" data-question="${idx}" aria-pressed="false">${q}</button>`).join('');
  $('dialogue').innerHTML = l.lines.map((line, idx) => `<button class="dialogue-line" data-line="${idx}" aria-pressed="false"><span class="speaker">${line[0]}</span><span><span class="english">${line[1]}</span><span class="chinese-text">${line[2]}</span></span><span class="play-mark" aria-hidden="true"><span class="play-triangle">▶</span><span class="playing-bars"><i></i><i></i><i></i></span></span></button>`).join('');
  $('pronunciationTips').innerHTML = l.tips.map(t => `<div class="pronunciation-item"><span class="sound-word">${t[0]}</span><p>${t[1]}</p></div>`).join('');
  $('swapPattern').textContent = l.pattern;
  $('swapWords').innerHTML = l.swaps.map(w => `<button class="swap-word">${w}</button>`).join('');
  $('teacherSteps').innerHTML = l.steps.map(s => `<li>${s}</li>`).join('');
  $('successCheck').textContent = l.check;
  $('prevLesson').disabled = current === 0;
  $('nextLesson').disabled = current === lessons.length - 1;
  $('progressText').textContent = `${current+1} / ${lessons.length}`;
  recordingLine = Math.min(recordingLine, l.lines.length - 1);
  renderRecordingPractice();
  document.querySelectorAll('.question-chip').forEach(btn => {
    const question = l.questions[Number(btn.dataset.question)];
    btn.dataset.spokenText = question;
    btn.setAttribute('aria-label', `朗读：${question}`);
    btn.addEventListener('click', () => speakEnglish(question, .9, btn, 'Teacher'));
  });
  document.querySelectorAll('.dialogue-line').forEach(btn => {
    const lineIndex = Number(btn.dataset.line);
    const line = l.lines[lineIndex];
    btn.dataset.spokenText = line[1];
    btn.setAttribute('aria-label', `播放：${line[1]}`);
    btn.addEventListener('click', () => {
      selectRecordingLine(lineIndex);
      const lessonNo = String(current + 1).padStart(2, '0');
      const lineNo = String(lineIndex + 1).padStart(2, '0');
      playAudioFiles(
        [`assets/audio/lesson-${lessonNo}/line-${lineNo}.m4a`],
        btn,
        version => speakEnglish(line[1], .96, btn, line[0], version),
        {status:'正在播放 Qwen3-TTS 角色音频…', missing:'这句 AI 音频尚未生成，已使用系统声音。'}
      );
    });
  });
  document.querySelectorAll('.swap-word').forEach(btn => btn.addEventListener('click', () => speakEnglish(btn.textContent, .9, btn, 'Teacher')));
  renderList();
  window.scrollTo({top:0, behavior:'smooth'});
}

function selectLesson(index){
  recordingRequestVersion += 1;
  recordingLine = 0;
  current = index;
  renderLesson();
}

function currentRecordingKey(){
  return `${current + 1}:${recordingLine + 1}`;
}

function renderRecordingPractice(statusMessage=null){
  const line = lessons[current].lines[recordingLine];
  const saved = savedRecordings.get(currentRecordingKey());
  $('recordingLineMeta').textContent = `第 ${recordingLine + 1} 句 · ${line[0]}`;
  $('recordingProgress').textContent = `${recordingLine + 1} / ${lessons[current].lines.length}`;
  $('recordingEnglish').textContent = line[1];
  $('recordingChinese').textContent = line[2];
  $('recordingPrev').disabled = recordingLine === 0;
  $('recordingNext').disabled = recordingLine === lessons[current].lines.length - 1;
  $('recordingPlayback').disabled = !saved;
  document.querySelectorAll('.dialogue-line').forEach((button, index) => {
    button.classList.toggle('practice-target', index === recordingLine);
  });
  if (statusMessage !== null) {
    $('recordingStatus').textContent = statusMessage;
  } else if (saved) {
    $('recordingStatus').textContent = `本句已有 ${saved.duration.toFixed(1)} 秒录音，可以播放自己的录音，再播放原句对比。`;
  } else {
    $('recordingStatus').textContent = '先播放原句，再录下孩子的跟读，最后交替播放进行对比。';
  }
}

function selectRecordingLine(index){
  if (mediaRecorder && mediaRecorder.state === 'recording') return;
  recordingLine = Math.max(0, Math.min(index, lessons[current].lines.length - 1));
  renderRecordingPractice();
}

function changeRecordingLine(offset){
  stopSpeech(false);
  selectRecordingLine(recordingLine + offset);
}

function setRecordingControls(recording){
  const toggle = $('recordingToggle');
  toggle.disabled = false;
  toggle.classList.toggle('recording', recording);
  toggle.setAttribute('aria-pressed', String(recording));
  toggle.querySelector('.record-label').textContent = recording ? '停止录音' : '开始录音';
  document.querySelectorAll('.audio-btn, .question-chip, .dialogue-line, .swap-word, .lesson-item button, .nav-tab, #prevLesson, #nextLesson, #recordingOriginal, #recordingPlayback, #recordingPrev, #recordingNext').forEach(button => {
    button.disabled = recording;
  });
  if (!recording) {
    $('prevLesson').disabled = current === 0;
    $('nextLesson').disabled = current === lessons.length - 1;
    $('recordingPrev').disabled = recordingLine === 0;
    $('recordingNext').disabled = recordingLine === lessons[current].lines.length - 1;
    $('recordingPlayback').disabled = !savedRecordings.has(currentRecordingKey());
  }
}

function preferredRecordingMimeType(){
  if (!window.MediaRecorder || typeof MediaRecorder.isTypeSupported !== 'function') return '';
  return [
    'audio/webm;codecs=opus',
    'audio/mp4',
    'audio/webm',
  ].find(type => MediaRecorder.isTypeSupported(type)) || '';
}

function stopRecordingTracks(stream){
  if (stream) stream.getTracks().forEach(track => track.stop());
}

function clearRecordingTimers(){
  if (recordingClock) clearInterval(recordingClock);
  if (recordingLimitTimer) clearTimeout(recordingLimitTimer);
  recordingClock = null;
  recordingLimitTimer = null;
}

async function startRecording(){
  if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
    $('recordingStatus').textContent = location.protocol === 'file:'
      ? '录音需要通过本地服务器打开。请运行 python3 -m http.server 8000 后访问 localhost:8000。'
      : '当前浏览器不支持录音，请使用最新版 Safari、Chrome 或 Edge。';
    return;
  }

  stopSpeech(false);
  const requestVersion = ++recordingRequestVersion;
  const requestedKey = currentRecordingKey();
  const toggle = $('recordingToggle');
  toggle.disabled = true;
  toggle.querySelector('.record-label').textContent = '请求麦克风…';
  $('recordingStatus').textContent = '请允许浏览器使用麦克风；录音不会上传。';

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {echoCancellation: true, noiseSuppression: true, autoGainControl: true},
      video: false,
    });
    if (requestVersion !== recordingRequestVersion || requestedKey !== currentRecordingKey()) {
      stopRecordingTracks(stream);
      toggle.disabled = false;
      toggle.querySelector('.record-label').textContent = '开始录音';
      renderRecordingPractice();
      return;
    }

    const mimeType = preferredRecordingMimeType();
    recordingStream = stream;
    const recorder = new MediaRecorder(stream, mimeType ? {mimeType} : undefined);
    mediaRecorder = recorder;
    recordingChunks = [];
    recordingStartedAt = performance.now();
    activeRecordingKey = requestedKey;

    recorder.ondataavailable = event => {
      if (event.data && event.data.size > 0) recordingChunks.push(event.data);
    };
    recorder.onerror = () => {
      $('recordingStatus').textContent = '录音发生错误，请检查麦克风后重试。';
    };
    recorder.onstop = () => {
      const duration = Math.max(.1, (performance.now() - recordingStartedAt) / 1000);
      const blob = new Blob(recordingChunks, {type: recorder.mimeType || mimeType || 'audio/webm'});
      const key = activeRecordingKey;
      clearRecordingTimers();
      stopRecordingTracks(recordingStream);
      recordingStream = null;
      mediaRecorder = null;
      recordingChunks = [];
      activeRecordingKey = null;
      setRecordingControls(false);

      if (blob.size > 0 && key) {
        const previous = savedRecordings.get(key);
        if (previous) URL.revokeObjectURL(previous.url);
        savedRecordings.set(key, {url: URL.createObjectURL(blob), duration, type: blob.type});
        renderRecordingPractice(`录音完成，共 ${duration.toFixed(1)} 秒。现在播放自己的录音，再播放原句进行对比。`);
      } else {
        renderRecordingPractice('没有录到声音，请靠近麦克风后重试。');
      }
    };

    recorder.start(250);
    setRecordingControls(true);
    $('recordingStatus').textContent = '正在录音 0.0 秒；朗读完成后点击“停止录音”。';
    recordingClock = setInterval(() => {
      const seconds = (performance.now() - recordingStartedAt) / 1000;
      $('recordingStatus').textContent = `正在录音 ${seconds.toFixed(1)} 秒；朗读完成后点击“停止录音”。`;
    }, 100);
    recordingLimitTimer = setTimeout(stopRecording, 15000);
  } catch (error) {
    toggle.disabled = false;
    toggle.querySelector('.record-label').textContent = '开始录音';
    stopRecordingTracks(recordingStream);
    recordingStream = null;
    mediaRecorder = null;
    const messages = {
      NotAllowedError: '麦克风权限未开启，请在浏览器设置中允许本页面使用麦克风。',
      NotFoundError: '没有找到可用的麦克风，请连接麦克风后重试。',
      NotReadableError: '麦克风正被其他应用占用，请关闭占用麦克风的应用后重试。',
    };
    $('recordingStatus').textContent = messages[error.name] || '无法开始录音，请检查浏览器和麦克风设置。';
  }
}

function stopRecording(){
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
    $('recordingStatus').textContent = '正在保存录音…';
  }
}

function toggleRecording(){
  if (mediaRecorder && mediaRecorder.state === 'recording') stopRecording();
  else startRecording();
}

function playRecordingOriginal(){
  const line = lessons[current].lines[recordingLine];
  const lessonNo = String(current + 1).padStart(2, '0');
  const lineNo = String(recordingLine + 1).padStart(2, '0');
  playAudioFiles(
    [`assets/audio/lesson-${lessonNo}/line-${lineNo}.m4a`],
    $('recordingOriginal'),
    version => speakEnglish(line[1], .96, $('recordingOriginal'), line[0], version),
    {
      statusElement: $('recordingStatus'),
      status: '正在播放原句，请仔细听语音和节奏…',
      complete: '原句播放完成。现在点击“开始录音”进行跟读。',
      stopped: '原句播放已停止。',
    }
  );
}

function playSavedRecording(){
  const saved = savedRecordings.get(currentRecordingKey());
  if (!saved) {
    $('recordingStatus').textContent = '请先录下本句跟读。';
    return;
  }
  playAudioFiles(
    [saved.url],
    $('recordingPlayback'),
    () => {
      stopSpeech(false);
      $('recordingStatus').textContent = '无法播放这段录音，请重新录制。';
    },
    {
      statusElement: $('recordingStatus'),
      status: '正在播放我的录音…',
      complete: '我的录音播放完成。现在再播放原句进行对比。',
      stopped: '我的录音播放已停止。',
    }
  );
}

const voiceProfiles = {
  childGirl: ['Sandy', 'Flo', 'Shelley', 'Ava', 'Samantha', 'Zoe'],
  childBoy: ['Eddy', 'Junior', 'Reed', 'Nathan', 'Aaron', 'Daniel'],
  adultWoman: ['Samantha', 'Ava', 'Shelley', 'Karen', 'Moira'],
  adultMan: ['Reed', 'Daniel', 'Aaron', 'Alex', 'Grandpa'],
  chinese: ['Tingting', 'Meijia', 'Sandy', 'Flo', 'Shelley']
};

const noveltyVoicePattern = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox/i;

function voiceProfileFor(speaker, lang){
  if (lang.toLowerCase().startsWith('zh')) return 'chinese';
  if (['Mia', 'Child'].includes(speaker)) return 'childGirl';
  if (speaker === 'Ben') return 'childBoy';
  if (['Mom', 'Teacher'].includes(speaker)) return 'adultWoman';
  if (speaker === 'Dad') return 'adultMan';
  return 'adultWoman';
}

function chooseVoice(lang, speaker='Teacher'){
  const language = lang.toLowerCase();
  const family = language.slice(0, 2);
  const preferred = voiceProfiles[voiceProfileFor(speaker, lang)];
  const voices = speechSynthesis.getVoices().filter(v => {
    const voiceLang = v.lang.toLowerCase();
    return !noveltyVoicePattern.test(v.name) && (voiceLang === language || voiceLang.startsWith(family));
  });
  return voices.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const aPreference = preferred.findIndex(name => aName.includes(name.toLowerCase()));
    const bPreference = preferred.findIndex(name => bName.includes(name.toLowerCase()));
    const aScore = (a.lang.toLowerCase() === language ? 30 : 0) + (a.localService ? 5 : 0) + (aPreference < 0 ? 0 : 100 - aPreference);
    const bScore = (b.lang.toLowerCase() === language ? 30 : 0) + (b.localService ? 5 : 0) + (bPreference < 0 ? 0 : 100 - bPreference);
    return bScore - aScore;
  })[0] || null;
}

function makeUtterance(text, lang, rate=.95, speaker='Teacher'){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = rate;
  const profile = voiceProfileFor(speaker, lang);
  u.pitch = profile === 'childGirl' ? 1.08 : profile === 'childBoy' ? 1.02 : 1;
  u.volume = 1;
  const voice = chooseVoice(lang, speaker);
  if (voice) u.voice = voice;
  return u;
}

function updatePlaybackButton(button, playing){
  if (!button) return;
  button.classList.toggle('playing', playing);
  button.setAttribute('aria-pressed', String(playing));
  if (button === $('recordingOriginal')) {
    button.querySelector('.practice-label').textContent = playing ? '停止播放' : '播放原句';
    button.setAttribute('aria-label', playing ? '停止播放原句' : '播放原句');
  }
  if (button === $('recordingPlayback')) {
    button.querySelector('.practice-label').textContent = playing ? '停止播放' : '播放我的录音';
    button.setAttribute('aria-label', playing ? '停止播放我的录音' : '播放我的录音');
  }
  if (button.classList.contains('dialogue-line')) {
    const text = button.dataset.spokenText || '';
    button.setAttribute('aria-label', `${playing ? '停止播放' : '播放'}：${text}`);
  }
  if (button.classList.contains('question-chip')) {
    const text = button.dataset.spokenText || '';
    button.setAttribute('aria-label', `${playing ? '停止朗读' : '朗读'}：${text}`);
  }
}

function setPlaying(button, on){
  document.querySelectorAll('.playing').forEach(el => updatePlaybackButton(el, false));
  playingButton = on ? button : null;
  if (playingButton) updatePlaybackButton(playingButton, true);
  $('stopBtn').disabled = !(on && button && button.classList.contains('audio-btn'));
}

function startPlayback(button, continuationVersion=null){
  if (continuationVersion !== null) {
    if (continuationVersion !== playbackVersion) return null;
    setPlaying(button, true);
    return continuationVersion;
  }
  if (playingButton === button) {
    stopSpeech();
    return null;
  }
  recordingRequestVersion += 1;
  stopSpeech(false);
  setPlaying(button, true);
  return playbackVersion;
}

function isCurrentPlayback(version){
  return version === playbackVersion;
}

function stopSpeech(announce=true){
  const stoppedButton = playingButton;
  playbackVersion += 1;
  if (window.currentCourseTimer) {
    clearTimeout(window.currentCourseTimer);
    window.currentCourseTimer = null;
  }
  if (window.currentCourseAudio) {
    const audio = window.currentCourseAudio;
    window.currentCourseAudio = null;
    audio.onplaying = null;
    audio.onended = null;
    audio.onerror = null;
    audio.pause();
    try { audio.currentTime = 0; } catch (_) {}
  }
  if ('speechSynthesis' in window && (speechSynthesis.speaking || speechSynthesis.pending || speechSynthesis.paused)) {
    speechSynthesis.cancel();
  }
  setPlaying(null, false);
  if (stoppedButton === $('recordingOriginal')) {
    $('recordingStatus').textContent = '原句播放已停止。';
  } else if (stoppedButton === $('recordingPlayback')) {
    $('recordingStatus').textContent = '我的录音播放已停止。';
  }
  if (announce && $('voiceStatus')) $('voiceStatus').textContent = '已停止。点击按钮可重新播放。';
}

function speakEnglish(text, rate, button, speaker='Teacher', continuationVersion=null){
  if (!('speechSynthesis' in window)) return unsupported();
  const version = startPlayback(button, continuationVersion);
  if (version === null) return;
  const u = makeUtterance(text, 'en-US', rate, speaker);
  $('voiceStatus').textContent = `正在播放 ${speaker} 的自然美式英语…`;
  u.onend = () => {
    if (!isCurrentPlayback(version)) return;
    setPlaying(null, false);
    $('voiceStatus').textContent = '播放完成。可以再听一次或换一种速度。';
  };
  u.onerror = () => {
    if (isCurrentPlayback(version)) unsupported();
  };
  speechSynthesis.speak(u);
}

function speakSequence(items, button, continuationVersion=null){
  if (!('speechSynthesis' in window)) return unsupported();
  const version = startPlayback(button, continuationVersion);
  if (version === null) return;
  let idx = 0;
  const next = () => {
    window.currentCourseTimer = null;
    if (!isCurrentPlayback(version)) return;
    if (idx >= items.length) { setPlaying(null, false); $('voiceStatus').textContent = '播放完成。轮到孩子开口啦！'; return; }
    const item = items[idx++];
    const u = makeUtterance(item.text, item.lang, item.rate, item.speaker);
    u.onend = () => {
      if (!isCurrentPlayback(version)) return;
      window.currentCourseTimer = setTimeout(next, item.pause || 180);
    };
    u.onerror = () => {
      if (!isCurrentPlayback(version)) return;
      unsupported();
    };
    speechSynthesis.speak(u);
  };
  next();
}

function unsupported(){
  stopSpeech(false);
  $('voiceStatus').textContent = '当前浏览器没有可用的朗读声音。请用最新版 Safari、Chrome 或 Edge 打开。';
}

function playMode(mode, button){
  const l = lessons[current];
  const lessonNo = String(current + 1).padStart(2, '0');
  const fallback = version => playSynthMode(mode, button, version);
  if (mode === 'chinese') {
    return playAudioFiles(
      [`assets/audio/lesson-${lessonNo}/chinese.m4a`],
      button,
      fallback,
      {status:'正在播放中文讲解…', missing:'本课中文讲解音频缺失，已使用系统声音。'}
    );
  }
  if (['slow', 'normal', 'fast'].includes(mode)) {
    const files = l.lines.map((_, index) =>
      `assets/audio/lesson-${lessonNo}/line-${String(index + 1).padStart(2, '0')}.m4a`
    );
    const playbackRates = {slow:.86, normal:1, fast:1.1};
    const pauses = {slow:720, normal:400, fast:230};
    const labels = {
      slow:'正在播放 Qwen3-TTS 慢速角色对话…',
      normal:'正在播放 Qwen3-TTS 自然角色对话…',
      fast:'正在播放 Qwen3-TTS 快速挑战…'
    };
    return playAudioFiles(files, button, fallback, {
      playbackRate:playbackRates[mode],
      pauseBetween:pauses[mode],
      status:labels[mode],
      missing:'本课 AI 音频尚未完整生成，已使用系统声音。'
    });
  }
  if (mode === 'tips') {
    return playAudioFiles([
      `assets/audio/lesson-${lessonNo}-tips-cn.m4a`,
      `assets/audio/lesson-${lessonNo}-tips-en.m4a`
    ], button, fallback);
  }
  return playAudioFiles([`assets/audio/lesson-${lessonNo}-${mode}.m4a`], button, fallback);
}

function playAudioFiles(files, button, fallback, options={}){
  const statusElement = options.statusElement || $('voiceStatus');
  const wasPlaying = playingButton === button;
  const version = startPlayback(button);
  if (version === null) {
    if (wasPlaying && options.stopped) statusElement.textContent = options.stopped;
    return;
  }
  let index = 0;
  let started = false;
  let fallbackCalled = false;
  const useFallback = () => {
    if (fallbackCalled || !isCurrentPlayback(version)) return;
    fallbackCalled = true;
    fallback(version);
  };
  const playNext = () => {
    window.currentCourseTimer = null;
    if (!isCurrentPlayback(version)) return;
    if (index >= files.length) {
      window.currentCourseAudio = null;
      setPlaying(null, false);
      statusElement.textContent = options.complete || '播放完成。轮到孩子开口啦！';
      return;
    }
    const audio = new Audio(files[index++]);
    audio.onplaying = () => {
      started = true;
      statusElement.textContent = options.status || '正在播放课程包内的本地音频…';
    };
    audio.playbackRate = options.playbackRate || 1;
    audio.preservesPitch = true;
    audio.webkitPreservesPitch = true;
    audio.onended = () => {
      if (!isCurrentPlayback(version)) return;
      window.currentCourseAudio = null;
      if (options.pauseBetween && index < files.length) {
        window.currentCourseTimer = setTimeout(playNext, options.pauseBetween);
      } else {
        playNext();
      }
    };
    audio.onerror = () => {
      if (!isCurrentPlayback(version)) return;
      window.currentCourseAudio = null;
      if (!started) {
        useFallback();
      } else {
        stopSpeech(false);
        statusElement.textContent = options.missing || '部分本地音频缺失，请重新生成本课音频。';
      }
    };
    window.currentCourseAudio = audio;
    audio.play().catch(() => {
      if (!isCurrentPlayback(version)) return;
      window.currentCourseAudio = null;
      useFallback();
    });
  };
  playNext();
}

function playSynthMode(mode, button, continuationVersion=null){
  const l = lessons[current];
  if (mode === 'chinese') {
    const text = `${l.zhTitle}。${l.intro} 今天的过关标准是：${l.check}`;
    $('voiceStatus').textContent = '正在播放中文讲解…';
    return speakSequence([{text,lang:'zh-CN',rate:.92,speaker:'Teacher'}], button, continuationVersion);
  }
  if (mode === 'tips') {
    $('voiceStatus').textContent = '正在播放发音技巧…';
    return speakSequence(l.tipAudio.map(pair => ({text:pair[1],lang:pair[0]==='中文'?'zh-CN':'en-US',rate:pair[0]==='中文'?.9:.82,pause:300,speaker:'Teacher'})), button, continuationVersion);
  }
  const rates = {slow:.82, normal:.96, fast:1.08};
  const pauses = {slow:700, normal:380, fast:220};
  $('voiceStatus').textContent = mode === 'slow' ? '双角色慢速对话：跟着模仿…' : mode === 'fast' ? '双角色快速挑战：注意抓关键词…' : '正在播放自然美式双角色对话…';
  speakSequence(l.lines.map((line, index) => ({
    text:line[1], lang:'en-US', rate:rates[mode], speaker:line[0],
    pause:pauses[mode] + (index < l.lines.length - 1 && l.lines[index + 1][0] !== line[0] ? 100 : 0)
  })), button, continuationVersion);
}

document.querySelectorAll('[data-audio]').forEach(btn => btn.addEventListener('click', () => playMode(btn.dataset.audio, btn)));
$('stopBtn').addEventListener('click', stopSpeech);
$('recordingPrev').addEventListener('click', () => changeRecordingLine(-1));
$('recordingNext').addEventListener('click', () => changeRecordingLine(1));
$('recordingOriginal').addEventListener('click', playRecordingOriginal);
$('recordingToggle').addEventListener('click', toggleRecording);
$('recordingPlayback').addEventListener('click', playSavedRecording);
$('prevLesson').addEventListener('click', () => selectLesson(Math.max(0,current-1)));
$('nextLesson').addEventListener('click', () => selectLesson(Math.min(lessons.length-1,current+1)));
$('teacherToggle').addEventListener('click', e => {
  const show = $('teacherCard').hidden;
  $('teacherCard').hidden = !show;
  e.currentTarget.setAttribute('aria-pressed', String(show));
});
$('printBtn').addEventListener('click', () => window.print());
document.querySelectorAll('.nav-tab').forEach(btn => btn.addEventListener('click', () => {
  filter = btn.dataset.filter;
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.toggle('active', b===btn));
  const indexes = filteredIndexes();
  if (!indexes.includes(current)) {
    current = indexes[0];
    recordingLine = 0;
    recordingRequestVersion += 1;
  }
  renderLesson();
}));

window.addEventListener('beforeunload', () => {
  clearRecordingTimers();
  stopRecordingTracks(recordingStream);
  savedRecordings.forEach(recording => URL.revokeObjectURL(recording.url));
});

if ('speechSynthesis' in window) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}
renderLesson();
