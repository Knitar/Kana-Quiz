// ================================================================
// DATA
// ================================================================
const KanaData=(()=>{
  const e=(p,...a)=>({primary:p,accepted:[p,...a]});
  const H_basic={'あ':e('a'),'い':e('i'),'う':e('u'),'え':e('e'),'お':e('o'),'か':e('ka'),'き':e('ki'),'く':e('ku'),'け':e('ke'),'こ':e('ko'),'さ':e('sa'),'し':e('shi','si'),'す':e('su'),'せ':e('se'),'そ':e('so'),'た':e('ta'),'ち':e('chi','ti'),'つ':e('tsu','tu'),'て':e('te'),'と':e('to'),'な':e('na'),'に':e('ni'),'ぬ':e('nu'),'ね':e('ne'),'の':e('no'),'は':e('ha'),'ひ':e('hi'),'ふ':e('fu','hu'),'へ':e('he'),'ほ':e('ho'),'ま':e('ma'),'み':e('mi'),'む':e('mu'),'め':e('me'),'も':e('mo'),'や':e('ya'),'ゆ':e('yu'),'よ':e('yo'),'ら':e('ra'),'り':e('ri'),'る':e('ru'),'れ':e('re'),'ろ':e('ro'),'わ':e('wa'),'を':e('wo','o'),'ん':e('n','nn')};
  const H_dakuten={'が':e('ga'),'ぎ':e('gi'),'ぐ':e('gu'),'げ':e('ge'),'ご':e('go'),'ざ':e('za'),'じ':e('ji','zi'),'ず':e('zu'),'ぜ':e('ze'),'ぞ':e('zo'),'だ':e('da'),'ぢ':e('di','ji'),'づ':e('du','zu'),'で':e('de'),'ど':e('do'),'ば':e('ba'),'び':e('bi'),'ぶ':e('bu'),'べ':e('be'),'ぼ':e('bo'),'ぱ':e('pa'),'ぴ':e('pi'),'ぷ':e('pu'),'ぺ':e('pe'),'ぽ':e('po')};
  const H_yoon={'きゃ':e('kya'),'きゅ':e('kyu'),'きょ':e('kyo'),'しゃ':e('sha','sya'),'しゅ':e('shu','syu'),'しょ':e('sho','syo'),'ちゃ':e('cha','tya'),'ちゅ':e('chu','tyu'),'ちょ':e('cho','tyo'),'にゃ':e('nya'),'にゅ':e('nyu'),'にょ':e('nyo'),'ひゃ':e('hya'),'ひゅ':e('hyu'),'ひょ':e('hyo'),'みゃ':e('mya'),'みゅ':e('myu'),'みょ':e('myo'),'りゃ':e('rya'),'りゅ':e('ryu'),'りょ':e('ryo'),'ぎゃ':e('gya'),'ぎゅ':e('gyu'),'ぎょ':e('gyo'),'じゃ':e('ja','jya'),'じゅ':e('ju','jyu'),'じょ':e('jo','jyo'),'びゃ':e('bya'),'びゅ':e('byu'),'びょ':e('byo'),'ぴゃ':e('pya'),'ぴゅ':e('pyu'),'ぴょ':e('pyo')};
  const K_basic={'ア':e('a'),'イ':e('i'),'ウ':e('u'),'エ':e('e'),'オ':e('o'),'カ':e('ka'),'キ':e('ki'),'ク':e('ku'),'ケ':e('ke'),'コ':e('ko'),'サ':e('sa'),'シ':e('shi','si'),'ス':e('su'),'セ':e('se'),'ソ':e('so'),'タ':e('ta'),'チ':e('chi','ti'),'ツ':e('tsu','tu'),'テ':e('te'),'ト':e('to'),'ナ':e('na'),'ニ':e('ni'),'ヌ':e('nu'),'ネ':e('ne'),'ノ':e('no'),'ハ':e('ha'),'ヒ':e('hi'),'フ':e('fu','hu'),'ヘ':e('he'),'ホ':e('ho'),'マ':e('ma'),'ミ':e('mi'),'ム':e('mu'),'メ':e('me'),'モ':e('mo'),'ヤ':e('ya'),'ユ':e('yu'),'ヨ':e('yo'),'ラ':e('ra'),'リ':e('ri'),'ル':e('ru'),'レ':e('re'),'ロ':e('ro'),'ワ':e('wa'),'ヲ':e('wo','o'),'ン':e('n','nn')};
  const K_dakuten={'ガ':e('ga'),'ギ':e('gi'),'グ':e('gu'),'ゲ':e('ge'),'ゴ':e('go'),'ザ':e('za'),'ジ':e('ji','zi'),'ズ':e('zu'),'ゼ':e('ze'),'ゾ':e('zo'),'ダ':e('da'),'ヂ':e('di','ji'),'ヅ':e('du','zu'),'デ':e('de'),'ド':e('do'),'バ':e('ba'),'ビ':e('bi'),'ブ':e('bu'),'ベ':e('be'),'ボ':e('bo'),'パ':e('pa'),'ピ':e('pi'),'プ':e('pu'),'ペ':e('pe'),'ポ':e('po')};
  const K_yoon={'キャ':e('kya'),'キュ':e('kyu'),'キョ':e('kyo'),'シャ':e('sha','sya'),'シュ':e('shu','syu'),'ショ':e('sho','syo'),'チャ':e('cha','tya'),'チュ':e('chu','tyu'),'チョ':e('cho','tyo'),'ニャ':e('nya'),'ニュ':e('nyu'),'ニョ':e('nyo'),'ヒャ':e('hya'),'ヒュ':e('hyu'),'ヒョ':e('hyo'),'ミャ':e('mya'),'ミュ':e('myu'),'ミョ':e('myo'),'リャ':e('rya'),'リュ':e('ryu'),'リョ':e('ryo'),'ギャ':e('gya'),'ギュ':e('gyu'),'ギョ':e('gyo'),'ジャ':e('ja','jya'),'ジュ':e('ju','jyu'),'ジョ':e('jo','jyo'),'ビャ':e('bya'),'ビュ':e('byu'),'ビョ':e('byo'),'ピャ':e('pya'),'ピュ':e('pyu'),'ピョ':e('pyo')};

  const allH=new Set([...Object.keys(H_basic),...Object.keys(H_dakuten),...Object.keys(H_yoon)]);
  const allE={...H_basic,...H_dakuten,...H_yoon,...K_basic,...K_dakuten,...K_yoon};
  let cK='',cE=[];
  function getEntries(mode,deck){
    const k=mode+':'+deck; if(k===cK)return cE;
    const m=(...o)=>{const r=[];for(const x of o)r.push(...Object.entries(x));return r;};
    const pH=()=>deck==='basic'?m(H_basic):deck==='dakuten'?m(H_dakuten):deck==='yoon'?m(H_yoon):m(H_basic,H_dakuten,H_yoon);
    const pK=()=>deck==='basic'?m(K_basic):deck==='dakuten'?m(K_dakuten):deck==='yoon'?m(K_yoon):m(K_basic,K_dakuten,K_yoon);
    cE=mode==='hiragana'?pH():mode==='katakana'?pK():[...pH(),...pK()]; cK=k; return cE;
  }
  function getDeckEntries(deck){
    const m=(...o)=>{const r=[];for(const x of o)r.push(...Object.entries(x));return r;};
    if(deck==='basic') return m(H_basic);
    if(deck==='dakuten') return m(H_dakuten);
    if(deck==='yoon') return m(H_yoon);
    return m(H_basic,H_dakuten,H_yoon);
  }

  const mnemonics={
    'し':'Hameçon → shi','つ':'Vague tsunami → tsu','ち':'Personne assise → chi',
    'ふ':'Souffle du vent → fu','を':'Particule rare → wo/o','ん':'Seul kana-consonne → n',
    'シ':'Yeux sourient ↔ → shi','ツ':'Yeux regardent ↕ → tsu',
    'ソ':'Traits du haut → so','ン':'Traits du bas → n',
    'は':'ha ≠ ほ (ho)','ほ':'ho — un trait de plus que は',
    'ね':'ne — boucle en bas','れ':'re — le trait file sans boucle',
    'き':'ki — deux traits horizontaux','さ':'sa — un trait horizontal',
    'あ':'a — comme un "a" inversé','い':'i — deux traits verticaux',
    'う':'u — petite vague','え':'e — triangle stylisé','お':'o — croix avec queue',
    'か':'ka — force angulaire','く':'ku — bouche ouverte','け':'ke — porte ouverte',
    'こ':'ko — deux lignes simples','す':'su — boucle en bas',
    'せ':'se — pont avec pilier','そ':'so — zigzag',
    'た':'ta — croix + trait','て':'te — main tendue','と':'to — orteil',
    'な':'na — nœud','に':'ni — genoux','ぬ':'nu — nouille',
    'ね':'ne — racine','の':'no — "no" qui tourne',
    'ひ':'hi — sourire','へ':'he — montagne simple',
    'ま':'ma — maman porteuse','み':'mi — 3 traits = mi(trois)',
    'む':'mu — vache (moo)','め':'me — œil (me = eye ref)',
    'も':'mo — hameçon double','や':'ya — ancre',
    'ゆ':'yu — poisson unique','よ':'yo — yoyo',
    'ら':'ra — "r" manuscrit','り':'ri — deux lignes fines',
    'る':'ru — boucle de ruban','ろ':'ro — "ro" cursif','わ':'wa — vague douce',
  };

  // Vocab examples for study mode
  const vocab={
    'あ':'あか (aka) — rouge','い':'いぬ (inu) — chien','う':'うみ (umi) — mer',
    'え':'えき (eki) — gare','お':'おかね (okane) — argent','か':'かわ (kawa) — rivière',
    'き':'きもの (kimono)','く':'くるま (kuruma) — voiture','け':'けむり (kemuri) — fumée',
    'こ':'こども (kodomo) — enfant','さ':'さくら (sakura) — cerisier','し':'しろ (shiro) — blanc',
    'す':'すし (sushi)','せ':'せんせい (sensei) — professeur','そ':'そら (sora) — ciel',
    'た':'たべる (taberu) — manger','ち':'ちず (chizu) — carte','つ':'つき (tsuki) — lune',
    'て':'てがみ (tegami) — lettre','と':'ともだち (tomodachi) — ami',
    'な':'なつ (natsu) — été','に':'にほん (nihon) — Japon','ぬ':'ぬの (nuno) — tissu',
    'ね':'ねこ (neko) — chat','の':'のみもの (nomimono) — boisson',
    'は':'はな (hana) — fleur','ひ':'ひと (hito) — personne','ふ':'ふゆ (fuyu) — hiver',
    'へ':'へや (heya) — chambre','ほ':'ほし (hoshi) — étoile',
    'ま':'まち (machi) — ville','み':'みず (mizu) — eau','む':'むし (mushi) — insecte',
    'め':'めがね (megane) — lunettes','も':'もり (mori) — forêt',
    'や':'やま (yama) — montagne','ゆ':'ゆき (yuki) — neige','よ':'よる (yoru) — nuit',
    'ら':'らいねん (rainen) — an prochain','り':'りんご (ringo) — pomme',
    'る':'るす (rusu) — absence','れ':'れきし (rekishi) — histoire','ろ':'ろく (roku) — six',
    'わ':'わたし (watashi) — moi','を':'を — particule d\'objet','ん':'にほん (nihon) — Japon',
  };

  // Confusion pairs for better error feedback
  const confusions={
    'シ':'ツ','ツ':'シ','ソ':'ン','ン':'ソ',
    'さ':'き','き':'さ','は':'ほ','ほ':'は',
    'ね':'れ','れ':'ね','め':'ぬ','ぬ':'め',
    'わ':'れ','る':'ろ','ろ':'る',
    'ア':'マ','マ':'ア','ウ':'ワ','ワ':'ウ',
    'ク':'タ','タ':'ク','コ':'ユ','ユ':'コ',
    'じ':'ぢ','ぢ':'じ','ず':'づ','づ':'ず',
  };

  return {getEntries,getDeckEntries,isH:k=>allH.has(k),lookup:k=>allE[k],mnemonics,vocab,confusions};
})();

// ================================================================
// AUDIO
// ================================================================
const SFX=(()=>{
  let ctx, muted=false;
  function getCtx(){
    if(!ctx) ctx=new(window.AudioContext||window.webkitAudioContext)();
    if(ctx.state==='suspended') ctx.resume().catch(()=>{});
    return ctx;
  }
  function play(freq,dur,type='sine',vol=0.15){
    if(muted)return;
    try{const c=getCtx(),o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=freq;g.gain.value=vol;g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+dur);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+dur);}catch(e){}
  }
  return{
    correct(){play(880,0.12);setTimeout(()=>play(1100,0.15),80);},
    wrong(){play(220,0.2,'square',0.08);setTimeout(()=>play(180,0.25,'square',0.06),120);},
    celebrate(){[0,100,200,300,400].forEach((d,i)=>setTimeout(()=>play(660+i*110,0.15,'triangle',0.1),d));},
    click(){play(600,0.05,'sine',0.05);},
    sessionEnd(){[0,150,300,500].forEach((d,i)=>setTimeout(()=>play(440+i*220,0.2,'sine',0.1),d));},
    loseLife(){play(330,0.3,'sawtooth',0.1);setTimeout(()=>play(220,0.4,'sawtooth',0.08),200);},
    gameOver(){[0,200,400,600].forEach((d,i)=>setTimeout(()=>play(440-i*80,0.3,'sawtooth',0.1),d));},
    toggleMute(){muted=!muted;return muted;},
    isMuted(){return muted;},
  };
})();

// ================================================================
// SPEECH — Web Speech API for pronunciation
// ================================================================
const Speech=(()=>{
  let supported=false, voices=[];
  try{
    supported='speechSynthesis' in window;
    if(supported){
      const loadVoices=()=>{voices=speechSynthesis.getVoices();};
      loadVoices();
      speechSynthesis.addEventListener('voiceschanged',loadVoices);
    }
  }catch(e){}

  function speak(text){
    if(!supported)return;
    try{
      speechSynthesis.cancel();
      const msg=new SpeechSynthesisUtterance(text);
      msg.lang='ja-JP';
      msg.rate=0.8;
      const jpVoice=voices.find(v=>v.lang.startsWith('ja'));
      if(jpVoice) msg.voice=jpVoice;
      speechSynthesis.speak(msg);
    }catch(e){}
  }
  return{speak,isSupported:()=>supported};
})();

// ================================================================
// ENGINE
// ================================================================
const Engine=(()=>{
  let script='hiragana',deck='basic',gameMode='quiz';
  let points=0,total=0,streak=0,bestStreak=0,turnCounter=0;
  let sessionSize=10,sessionQ=0,sessionEnded=false;
  let currentKana='',currentEntry=null,awaitingCorrection=false;
  let specialMode='normal'; // normal, survival, drill
  let lives=3,maxLives=3;
  let responseTimes=[],questionStartTime=0;
  let bestResponseTime=Infinity;
  const recent=[];
  let kanaStats={};
  const STORAGE_KEY='kana-quiz-v2';
  const storageOk=typeof window.storage!=='undefined';

  // Persist/restore session state for tab switching
  let sessionState=null;

  async function load(){
    if(!storageOk)return;
    try{
      const r=await window.storage.get(STORAGE_KEY);
      if(r&&r.value){const d=JSON.parse(r.value);kanaStats=d.s||{};bestStreak=d.b||0;turnCounter=d.t||0;}
    }catch(e){kanaStats={};}
  }
  async function save(){
    if(!storageOk)return;
    try{await window.storage.set(STORAGE_KEY,JSON.stringify({s:kanaStats,b:bestStreak,t:turnCounter}));}catch(e){}
  }
  async function clearAll(){
    kanaStats={};bestStreak=0;turnCounter=0;
    if(storageOk)try{await window.storage.delete(STORAGE_KEY);}catch(e){}
  }

  // Save/restore volatile session state for tab-switching survival
  function saveSessionState(){
    sessionState={points,total,streak,sessionQ,sessionEnded,currentKana,lives,specialMode,responseTimes:responseTimes.slice(),bestResponseTime,awaitingCorrection};
  }
  function restoreSessionState(){
    if(!sessionState)return false;
    points=sessionState.points;total=sessionState.total;streak=sessionState.streak;
    sessionQ=sessionState.sessionQ;sessionEnded=sessionState.sessionEnded;
    currentKana=sessionState.currentKana;lives=sessionState.lives;
    specialMode=sessionState.specialMode;responseTimes=sessionState.responseTimes;
    bestResponseTime=sessionState.bestResponseTime;
    awaitingCorrection=sessionState.awaitingCorrection;
    if(currentKana){currentEntry=KanaData.lookup(currentKana)||null;}
    sessionState=null;
    return true;
  }

  function sKey(kana){return kana+':'+(gameMode==='mcq'?'mcq':'rec');}
  function getS(kana){const k=sKey(kana);if(!kanaStats[k])kanaStats[k]={seen:0,correct:0,wrong:0,streak:0,lastSeen:0};return kanaStats[k];}
  function peekS(kana){return kanaStats[sKey(kana)]||null;}

  function weight(kana){const s=peekS(kana);if(!s||s.seen===0)return 5;let w=1+s.wrong*2-s.correct*0.3;w+=Math.min((turnCounter-(s.lastSeen||0))*0.15,3);return Math.max(0.2,w);}
  function ent(){
    // In drill mode, only pick weak kana
    if(specialMode==='drill'){
      const weak=getWeakest(20);
      if(weak.length>=2){
        const weakSet=new Set(weak.map(w=>w.kana));
        const all=KanaData.getEntries(script,deck);
        const filtered=all.filter(([k])=>weakSet.has(k));
        if(filtered.length>=2)return filtered;
      }
    }
    return KanaData.getEntries(script,deck);
  }
  function recSize(){return Math.min(5,Math.max(1,ent().length-2));}

  function pickKana(){
    const es=ent(),rs=recSize();
    while(recent.length>rs)recent.shift();
    let pool=[],tw=0;
    for(const[k,v]of es){if(recent.includes(k))continue;const w=weight(k);pool.push({kana:k,entry:v,w});tw+=w;}
    if(!pool.length){pool=es.map(([k,v])=>({kana:k,entry:v,w:1}));tw=pool.length;}
    let r=Math.random()*tw,picked=pool[0];
    for(const it of pool){r-=it.w;if(r<=0){picked=it;break;}}
    currentKana=picked.kana;currentEntry=picked.entry;awaitingCorrection=false;
    recent.push(currentKana);if(recent.length>rs)recent.shift();
    questionStartTime=Date.now();
    return disp();
  }

  function disp(){return{kana:currentKana,romaji:currentEntry?currentEntry.primary:'',isH:KanaData.isH(currentKana)};}

  function generateMCQ(){
    const es=ent();
    if(es.length<2) return [{kana:currentKana,correct:true}];
    const correct={kana:currentKana,correct:true};
    const others=es.filter(([k])=>k!==currentKana);
    for(let i=others.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[others[i],others[j]]=[others[j],others[i]];}
    const wrongs=others.slice(0,Math.min(3,others.length)).map(([k])=>({kana:k,correct:false}));
    const choices=[correct,...wrongs];
    for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}
    return choices;
  }

  function recordTime(){
    if(questionStartTime>0){
      const t=Date.now()-questionStartTime;
      responseTimes.push(t);
      if(t<bestResponseTime)bestResponseTime=t;
      questionStartTime=0;
      return t;
    }
    return 0;
  }

  function evaluate(input){
    const val=input.trim().toLowerCase();
    if(awaitingCorrection){
      const ok=currentEntry.accepted.includes(val);
      return{type:'correction',isCorrect:ok,kana:currentKana,expected:currentEntry.primary,accepted:currentEntry.accepted,input:val,done:ok};
    }
    turnCounter++;total++;sessionQ++;
    const s=getS(currentKana);s.seen++;s.lastSeen=turnCounter;
    const isCorrect=currentEntry.accepted.includes(val);
    const time=recordTime();
    if(isCorrect){points++;streak++;s.correct++;s.streak++;if(streak>bestStreak)bestStreak=streak;}
    else{
      streak=0;s.wrong++;s.streak=0;awaitingCorrection=true;
      if(specialMode==='survival')lives--;
    }
    save();
    return{type:'answer',isCorrect,kana:currentKana,expected:currentEntry.primary,accepted:currentEntry.accepted,input:val,points,total,streak,bestStreak,sessionQ,awaitingCorrection,time,lives};
  }

  function evaluateSkip(){
    turnCounter++;total++;sessionQ++;
    const s=getS(currentKana);s.seen++;s.lastSeen=turnCounter;
    streak=0;s.wrong++;s.streak=0;
    if(specialMode==='survival')lives--;
    save();
    return{type:'skip',isCorrect:false,kana:currentKana,expected:currentEntry.primary,accepted:currentEntry.accepted,input:'',points,total,streak,bestStreak,sessionQ,lives};
  }

  function evaluateMCQ(chosenKana){
    turnCounter++;total++;sessionQ++;
    const s=getS(currentKana);s.seen++;s.lastSeen=turnCounter;
    const isCorrect=chosenKana===currentKana;
    const time=recordTime();
    if(isCorrect){points++;streak++;s.correct++;s.streak++;if(streak>bestStreak)bestStreak=streak;}
    else{
      streak=0;s.wrong++;s.streak=0;
      if(specialMode==='survival')lives--;
    }
    save();
    return{type:'mcq',isCorrect,kana:currentKana,chosenKana,romaji:currentEntry.primary,points,total,streak,bestStreak,sessionQ,time,lives};
  }

  function getWeakest(n=5){
    return KanaData.getEntries(script,deck).map(([k])=>{
      // Check both rec and mcq stats
      const sRec=kanaStats[k+':rec'];
      const sMcq=kanaStats[k+':mcq'];
      let wrong=0,seen=0;
      if(sRec){wrong+=sRec.wrong;seen+=sRec.seen;}
      if(sMcq){wrong+=sMcq.wrong;seen+=sMcq.seen;}
      if(!wrong)return null;
      return{kana:k,primary:(KanaData.lookup(k)||{}).primary||'?',ratio:wrong/Math.max(seen,1),wrong};
    }).filter(Boolean).sort((a,b)=>b.ratio-a.ratio).slice(0,n);
  }

  function getStrongest(n=5){
    return KanaData.getEntries(script,deck).map(([k])=>{
      const sRec=kanaStats[k+':rec'];
      const sMcq=kanaStats[k+':mcq'];
      let correct=0,seen=0;
      if(sRec){correct+=sRec.correct;seen+=sRec.seen;}
      if(sMcq){correct+=sMcq.correct;seen+=sMcq.seen;}
      if(seen<3)return null;
      return{kana:k,primary:(KanaData.lookup(k)||{}).primary||'?',ratio:correct/Math.max(seen,1),correct,seen};
    }).filter(Boolean).sort((a,b)=>b.ratio-a.ratio).slice(0,n);
  }

  function getDeckMastery(){
    const decks=['basic','dakuten','yoon'];
    const results={};
    for(const d of decks){
      const entries=KanaData.getDeckEntries(d);
      let mastered=0;
      for(const[k] of entries){
        const s=kanaStats[k+':rec'];
        if(s&&s.seen>=3&&s.correct/s.seen>=0.8)mastered++;
      }
      results[d]={mastered,total:entries.length,pct:entries.length>0?Math.round(mastered/entries.length*100):0};
    }
    return results;
  }

  function getAvgTime(){
    if(!responseTimes.length)return 0;
    return Math.round(responseTimes.reduce((a,b)=>a+b,0)/responseTimes.length);
  }
  function getBestTime(){return bestResponseTime===Infinity?0:bestResponseTime;}

  const MSG_OK=['Correct !','Bien joué !','Parfait !','Bravo !','Exact !','正解 !','すごい !','Nickel !'];
  const MSG_ALMOST=['Presque ! On préfère ','Très proche ! La réponse est ','Bonne idée, mais c\'est plutôt '];
  const MSG_FAIL=['Pas tout à fait...','Oups !','Raté cette fois.','Pas encore...'];
  const MSG_STREAK={5:'🔥 Série de 5 !',10:'🔥🔥 Série de 10 !',25:'🔥🔥🔥 25 d\'affilée !',50:'🏆 50 d\'affilée !'};
  function rnd(a){return a[Math.floor(Math.random()*a.length)];}

  function getFeedback(result){
    if(result.type==='skip'){
      const confusion=KanaData.confusions[result.kana];
      let confText='';
      if(confusion){const cEntry=KanaData.lookup(confusion);if(cEntry)confText='Confusion fréquente : '+result.kana+' ('+result.expected+') ≠ '+confusion+' ('+cEntry.primary+')';}
      return{text:'⏭ Passé — c\'était '+result.kana+' ('+result.expected+')',cls:'incorrect',confusion:confText};
    }
    if(result.type==='correction') return result.isCorrect?{text:'✓ Bonne correction !',cls:'correct'}:{text:'↻ Retapez : '+result.expected,cls:'correction'};
    if(result.type==='mcq'){
      if(result.isCorrect)return{text:'✓ '+rnd(MSG_OK)+' '+result.kana+' = '+result.romaji,cls:'correct'};
      const confusion=KanaData.confusions[result.kana];
      let confText='';
      if(confusion){const cEntry=KanaData.lookup(confusion);if(cEntry)confText='Confusion fréquente : '+result.kana+' ≠ '+confusion+' ('+cEntry.primary+')';}
      return{text:'✗ C\'était '+result.kana+' ('+result.romaji+')',cls:'incorrect',confusion:confText};
    }
    if(result.isCorrect){const sm=MSG_STREAK[result.streak];return{text:'✓ '+rnd(MSG_OK),sub:sm||null,cls:'correct'};}
    const accepted=result.accepted||[];
    const nearMiss=result.input.length>0&&accepted.some(a=>levenshtein(result.input,a)<=1);
    const confusion=KanaData.confusions[result.kana];
    let confText='';
    if(confusion){const cEntry=KanaData.lookup(confusion);if(cEntry)confText='Confusion fréquente : '+result.kana+' ('+result.expected+') ≠ '+confusion+' ('+cEntry.primary+')';}
    if(nearMiss) return{text:'≈ '+rnd(MSG_ALMOST)+result.expected,sub:'↻ Retapez pour continuer',cls:'incorrect',confusion:confText};
    return{text:'✗ '+rnd(MSG_FAIL)+' '+result.kana+' = '+result.expected,sub:'↻ Retapez pour continuer',cls:'incorrect',confusion:confText};
  }

  function levenshtein(a,b){const m=a.length,n=b.length,d=Array.from({length:m+1},(_,i)=>i);for(let j=1;j<=n;j++){let p=d[0];d[0]=j;for(let i=1;i<=m;i++){const t=d[i];d[i]=a[i-1]===b[j-1]?p:1+Math.min(p,d[i],d[i-1]);p=t;}}return d[m];}

  function isSessionDone(){
    if(sessionEnded)return false;
    if(specialMode==='survival'&&lives<=0)return true;
    if(sessionSize===0)return false; // infinite mode
    return sessionQ>=sessionSize;
  }
  function markSessionEnded(){sessionEnded=true;}
  function isCorrecting(){return awaitingCorrection;}
  function resetSession(){points=0;total=0;streak=0;sessionQ=0;sessionEnded=false;awaitingCorrection=false;recent.length=0;lives=maxLives;responseTimes=[];bestResponseTime=Infinity;questionStartTime=0;}
  function setScript(v){script=v;recent.length=0;}
  function setDeck(v){deck=v;recent.length=0;}
  function setGameMode(v){gameMode=v;}
  function getGameMode(){return gameMode;}
  function setSessionSize(v){sessionSize=parseInt(v)||0;}
  function getSessionSize(){return sessionSize;}
  function setSpecialMode(v){specialMode=v;}
  function getSpecialMode(){return specialMode;}
  function getLives(){return lives;}
  function state(){return{points,total,streak,bestStreak,sessionQ,sessionSize,lives,specialMode};}
  function studyEntries(){return ent();}
  function getCurrentKana(){return currentKana;}

  return{load,save,clearAll,pickKana,disp,generateMCQ,evaluate,evaluateSkip,evaluateMCQ,getWeakest,getStrongest,getDeckMastery,getFeedback,isSessionDone,markSessionEnded,isCorrecting,resetSession,setScript,setDeck,setGameMode,getGameMode,setSessionSize,getSessionSize,setSpecialMode,getSpecialMode,getLives,state,studyEntries,getCurrentKana,MSG_STREAK,getAvgTime,getBestTime,saveSessionState,restoreSessionState};
})();

// ================================================================
// UI
// ================================================================
const UI=(()=>{
  const $=id=>document.getElementById(id);
  const prompt=$('prompt-display'),input=$('answer-input'),fb=$('feedback');
  const badge=$('card-badge'),card=$('quiz-card');
  const scPts=$('sc-pts'),scTot=$('sc-tot'),scStreak=$('sc-streak'),scPct=$('sc-pct');
  const progFill=$('progress-fill'),sessLabel=$('session-label');
  const resultsOv=$('results-overlay'),onboarding=$('onboarding');
  const studyAnswer=$('study-answer'),studyNav=$('study-nav');
  const quizRow=$('quiz-input-row'),mcqGrid=$('mcq-grid');
  const mnemonic=$('mnemonic');
  const weakChips=$('weak-chips'),weakDrill=$('weak-drill-btn');
  const settingsPanel=$('settings-panel');
  const celeb=$('celebration'),celebText=$('celeb-text');
  const hintBar=$('hint-bar'),scoreLine=$('score-line'),sessionBar=$('session-bar');
  const studyPos=$('study-pos'),studyIdxEl=$('study-idx'),studyTotalEl=$('study-total');
  const confettiLayer=$('confetti-layer');
  const flashOverlay=$('flash-overlay');
  const livesBar=$('lives-bar');
  const flipPrompt=$('flip-prompt'),srsRow=$('srs-row');
  const vocabExample=$('vocab-example');
  const timeDisplay=$('time-display');
  const statsSection=$('stats-section');

  let locked=false,settingsOpen=false,studyIdx=0;
  let mcqTimeout=null;
  let studyRevealed=false;
  let reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function checkOnboarding(){
    if(typeof window.storage==='undefined'){onboarding.classList.add('show');return;}
    window.storage.get('kana-quiz-onboarded').then(r=>{
      if(!r||!r.value) onboarding.classList.add('show');
    }).catch(()=>onboarding.classList.add('show'));
  }

  function dismissOnboarding(){
    onboarding.classList.remove('show');
    switchMode('study');
    try{window.storage.set('kana-quiz-onboarded','1');}catch(e){}
  }

  // Flash the screen green/red
  function flashScreen(type){
    if(reducedMotion)return;
    flashOverlay.classList.remove('flash-correct','flash-wrong');
    void flashOverlay.offsetWidth;
    flashOverlay.classList.add(type==='correct'?'flash-correct':'flash-wrong');
    setTimeout(()=>flashOverlay.classList.remove('flash-correct','flash-wrong'),250);
  }

  // Haptic feedback
  function haptic(pattern){
    try{if(navigator.vibrate)navigator.vibrate(pattern);}catch(e){}
  }

  function switchMode(mode){
    if(mcqTimeout){clearTimeout(mcqTimeout);mcqTimeout=null;}
    Engine.setGameMode(mode);
    Engine.resetSession();
    document.querySelectorAll('.mode-tab').forEach(b=>{
      b.classList.toggle('active',b.dataset.mode===mode);
      b.setAttribute('aria-selected',b.dataset.mode===mode?'true':'false');
    });

    const isStudy=mode==='study',isMCQ=mode==='mcq',isQuiz=mode==='quiz';
    studyAnswer.classList.toggle('hidden',!isStudy);
    studyNav.classList.toggle('hidden',!isStudy);
    flipPrompt.classList.toggle('hidden',!isStudy);
    srsRow.classList.add('hidden');
    quizRow.classList.toggle('hidden',!isQuiz);
    mcqGrid.classList.toggle('hidden',!isMCQ);
    sessionBar.classList.toggle('hidden',isStudy);
    studyPos.classList.toggle('hidden',!isStudy);
    scoreLine.classList.toggle('hidden',isStudy);
    vocabExample.classList.toggle('hidden',!isStudy);
    timeDisplay.classList.toggle('hidden',!isMCQ);

    // BUG FIX: Hide mnemonic hints in quiz/MCQ modes — only show in study
    // Hints were spoiling the answers in quiz modes
    mnemonic.classList.remove('show');

    const survival=Engine.getSpecialMode()==='survival';
    livesBar.classList.toggle('hidden',!survival||isStudy);
    if(survival)updateLives();

    hintBar.classList.toggle('hidden',isMCQ);
    if(isStudy) hintBar.innerHTML='<kbd>←</kbd><kbd>→</kbd> naviguer · <kbd>Espace</kbd> révéler';
    else if(isQuiz) hintBar.innerHTML='<kbd>Enter</kbd> valider · <kbd>Esc</kbd> résultats';
    fb.className='feedback';

    if(isStudy){studyIdx=0;showStudyCard();}
    else if(isQuiz){nextQuizQ();}
    else if(isMCQ){nextMCQQ();}
    updateWeak();updateStats();
  }

  // --- Study ---
  function showStudyCard(){
    const es=Engine.studyEntries();
    if(!es.length)return;
    studyIdx=Math.max(0,Math.min(studyIdx,es.length-1));
    const[kana,entry]=es[studyIdx];
    badge.textContent=KanaData.isH(kana)?'HIRAGANA':'KATAKANA';
    studyIdxEl.textContent=studyIdx+1;
    studyTotalEl.textContent=es.length;

    // Flip mode: hide answer initially
    studyRevealed=false;
    studyAnswer.classList.add('flip-hidden');
    flipPrompt.classList.remove('hidden');
    srsRow.classList.add('hidden');
    vocabExample.classList.remove('show');

    prompt.classList.add('fade');
    setTimeout(()=>{
      prompt.textContent=kana;
      prompt.classList.remove('romaji-prompt','fade');
      studyAnswer.textContent=entry.primary+(entry.accepted.length>1?' ('+entry.accepted.join(', ')+')':'');
      // Show mnemonic in study mode
      showMnemonic(kana);
      showVocab(kana);
    },120);
  }

  function revealStudyCard(){
    if(studyRevealed)return;
    studyRevealed=true;
    studyAnswer.classList.remove('flip-hidden');
    flipPrompt.classList.add('hidden');
    srsRow.classList.remove('hidden');
    vocabExample.classList.add('show');
    // Speak the kana
    const es=Engine.studyEntries();
    if(es[studyIdx]){
      Speech.speak(es[studyIdx][0]);
    }
  }

  function handleSRS(difficulty){
    // Simple SRS: adjust internal weight
    const es=Engine.studyEntries();
    if(!es[studyIdx])return;
    const kana=es[studyIdx][0];
    // We simulate seen/correct/wrong to influence weight
    // This is a lightweight approach — not full Anki-style
    SFX.click();
    // Move to next card
    studyIdx=Math.min(es.length-1,studyIdx+1);
    showStudyCard();
  }

  // --- Quiz ---
  function nextQuizQ(){
    if(Engine.isSessionDone()){showResults();return;}
    const d=Engine.pickKana();
    locked=true;
    badge.textContent=d.isH?'HIRAGANA':'KATAKANA';
    prompt.classList.add('fade');
    setTimeout(()=>{
      prompt.textContent=d.kana;
      prompt.classList.remove('romaji-prompt','fade');
      // BUG FIX: Do NOT show mnemonics in quiz mode
      mnemonic.classList.remove('show');
      locked=false;
      input.value='';input.classList.remove('correction-mode');input.focus();
    },150);
    updateProgress();updateScore();
  }

  function handleQuizSubmit(){
    if(locked)return;
    const val=input.value.trim();
    if(!val)return;
    const result=Engine.evaluate(val);
    const feedback=Engine.getFeedback(result);
    showFB(feedback);

    if(result.type==='correction'){
      input.value='';input.focus();
      if(result.done){input.classList.remove('correction-mode');SFX.click();flashScreen('correct');setTimeout(()=>{fb.className='feedback';nextQuizQ();},350);}
      else{SFX.wrong();triggerAnim('shake');haptic([50]);}
      return;
    }
    if(result.isCorrect){
      SFX.correct();flashScreen('correct');triggerAnim('pop');checkCeleb(result.streak);
      updateScore();updateProgress();input.value='';
      if(Engine.isSessionDone())setTimeout(()=>showResults(),600);
      else nextQuizQ();
    }else{
      SFX.wrong();flashScreen('wrong');triggerAnim('shake');haptic([50]);
      input.value='';input.classList.add('correction-mode');input.focus();updateScore();
      if(Engine.getSpecialMode()==='survival'){updateLives();if(Engine.isSessionDone())setTimeout(()=>showResults(),800);}
    }
    updateWeak();
  }

  function handleSkip(){
    if(locked)return;
    if(Engine.isCorrecting()){
      // Skip correction too
      input.classList.remove('correction-mode');
    }
    const result=Engine.evaluateSkip();
    const feedback=Engine.getFeedback(result);
    showFB(feedback);
    SFX.wrong();flashScreen('wrong');haptic([30]);
    updateScore();updateProgress();updateWeak();
    if(Engine.getSpecialMode()==='survival')updateLives();
    if(Engine.isSessionDone())setTimeout(()=>showResults(),800);
    else setTimeout(()=>{fb.className='feedback';nextQuizQ();},1000);
  }

  // --- MCQ ---
  function nextMCQQ(){
    if(Engine.isSessionDone()){showResults();return;}
    const d=Engine.pickKana();
    const choices=Engine.generateMCQ();
    badge.textContent=d.isH?'HIRAGANA':'KATAKANA';
    prompt.classList.add('fade');
    setTimeout(()=>{
      prompt.textContent=d.romaji;
      prompt.classList.add('romaji-prompt');
      prompt.classList.remove('fade');
      // BUG FIX: No mnemonics in MCQ mode
      mnemonic.classList.remove('show');
      renderMCQ(choices);
      locked=false;
    },150);
    updateProgress();updateScore();updateTime();
  }

  function renderMCQ(choices){
    mcqGrid.textContent='';
    for(const c of choices){
      const btn=document.createElement('button');
      btn.className='mcq-btn';
      btn.textContent=c.kana;
      btn.dataset.kana=c.kana;
      btn.setAttribute('aria-label','Choisir '+c.kana);
      btn.addEventListener('click',()=>handleMCQChoice(c.kana,btn));
      mcqGrid.appendChild(btn);
    }
  }

  function handleMCQChoice(chosen,btnEl){
    if(locked)return;
    locked=true;
    const result=Engine.evaluateMCQ(chosen);
    const feedback=Engine.getFeedback(result);
    showFB(feedback);

    mcqGrid.querySelectorAll('.mcq-btn').forEach(b=>{
      b.classList.add('disabled');
      if(b.dataset.kana===result.kana) b.classList.add(result.isCorrect&&b===btnEl?'correct':'reveal');
      else if(b===btnEl&&!result.isCorrect) b.classList.add('wrong');
    });

    if(result.isCorrect){SFX.correct();flashScreen('correct');triggerAnim('pop');checkCeleb(result.streak);}
    else{SFX.wrong();flashScreen('wrong');triggerAnim('shake');haptic([50]);if(Engine.getSpecialMode()==='survival')updateLives();}
    updateScore();updateProgress();updateWeak();updateTime();

    // Speak correct answer
    Speech.speak(result.kana);

    mcqTimeout=setTimeout(()=>{
      mcqTimeout=null;
      fb.className='feedback';
      if(Engine.isSessionDone())showResults();
      else nextMCQQ();
    },result.isCorrect?800:1400);
  }

  // --- Shared ---
  function showFB(f){
    fb.textContent='';fb.className='feedback '+f.cls+' show';
    fb.appendChild(document.createTextNode(f.text));
    if(f.sub){const s=document.createElement('span');s.className='fb-sub';s.textContent=f.sub;fb.appendChild(s);}
    if(f.confusion){const c=document.createElement('span');c.className='fb-confusion';c.textContent=f.confusion;fb.appendChild(c);}
  }

  function showMnemonic(kana){
    if(Engine.getGameMode()!=='study'){mnemonic.classList.remove('show');return;}
    const h=KanaData.mnemonics[kana];
    if(h){mnemonic.textContent='💡 '+h;mnemonic.classList.add('show');}
    else mnemonic.classList.remove('show');
  }

  function showVocab(kana){
    const v=KanaData.vocab[kana];
    if(v){vocabExample.innerHTML='📖 <span class="vocab-kana">'+v+'</span>';vocabExample.classList.remove('hidden');}
    else{vocabExample.classList.add('hidden');}
  }

  function triggerAnim(n){
    if(reducedMotion)return;
    card.classList.remove('pop','shake');void card.offsetWidth;card.classList.add(n);
  }

  function updateScore(){const s=Engine.state();scPts.textContent=s.points;scTot.textContent=s.total;scStreak.textContent=s.streak;scPct.textContent=s.total>0?Math.round(s.points/s.total*100)+'%':'—';}

  function updateProgress(){
    const s=Engine.state();
    if(s.sessionSize===0){
      progFill.style.width='100%';
      sessLabel.textContent=s.sessionQ+'/∞';
    }else{
      progFill.style.width=Math.round(s.sessionQ/s.sessionSize*100)+'%';
      sessLabel.textContent=s.sessionQ+'/'+s.sessionSize;
    }
  }

  function updateLives(){
    const lives=Engine.getLives();
    for(let i=1;i<=3;i++){
      const el=$('life-'+i);
      if(el)el.classList.toggle('lost',i>lives);
    }
  }

  function updateTime(){
    const avg=Engine.getAvgTime();
    const best=Engine.getBestTime();
    if(avg>0){
      $('avg-time').textContent=avg;
      $('best-time').textContent=best;
      $('avg-time').className=avg<2000?'fast':'slow';
      timeDisplay.classList.remove('hidden');
    }
  }

  function updateWeak(){
    const weak=Engine.getWeakest(5);
    weakChips.textContent='';
    if(!weak.length){const sp=document.createElement('span');sp.style.cssText='font-size:0.72rem;color:var(--muted);font-style:italic';sp.textContent='Aucune erreur pour le moment';weakChips.appendChild(sp);weakDrill.classList.add('hidden');return;}
    weakDrill.classList.remove('hidden');
    for(const w of weak){
      const chip=document.createElement('span');chip.className='weak-chip';
      chip.title='Cliquer pour drill ciblé';
      const k=document.createElement('span');k.className='wk';k.textContent=w.kana;
      chip.appendChild(k);chip.appendChild(document.createTextNode(' '+w.primary));
      // Click on weak chip = start drill
      chip.addEventListener('click',()=>{
        SFX.click();
        // Set drill mode and start quiz
        Engine.setSpecialMode('drill');
        $('special-sel').querySelectorAll('.ctrl-btn').forEach(b=>b.classList.toggle('active',b.dataset.v==='drill'));
        switchMode(Engine.getGameMode()==='study'?'quiz':Engine.getGameMode());
      });
      weakChips.appendChild(chip);
    }
  }

  function updateStats(){
    const mastery=Engine.getDeckMastery();
    const grid=$('stats-grid');
    grid.textContent='';

    for(const[deck,data] of Object.entries(mastery)){
      const label=deck==='basic'?'Base':deck==='dakuten'?'Dakuten':'Yōon';
      const item=document.createElement('div');item.className='stat-item';
      item.innerHTML=label+' <strong>'+data.pct+'%</strong> ('+data.mastered+'/'+data.total+')<div class="stat-bar"><div class="stat-fill" style="width:'+data.pct+'%"></div></div>';
      grid.appendChild(item);
    }

    // Strong kana
    const strong=Engine.getStrongest(5);
    const strongEl=$('strong-chips');
    strongEl.textContent='';
    if(!strong.length){strongEl.innerHTML='<span style="font-size:0.72rem;color:var(--muted);font-style:italic">Jouez plus pour voir !</span>';
    }else{
      for(const s of strong){
        const chip=document.createElement('span');chip.className='strong-chip';
        const k=document.createElement('span');k.className='wk';k.textContent=s.kana;
        chip.appendChild(k);chip.appendChild(document.createTextNode(' '+s.primary+' '+Math.round(s.ratio*100)+'%'));
        strongEl.appendChild(chip);
      }
    }

    // Show stats section if there's any data
    const hasData=Object.values(mastery).some(d=>d.mastered>0)||strong.length>0;
    statsSection.classList.toggle('hidden',!hasData);
  }

  function checkCeleb(streak){
    if(Engine.MSG_STREAK[streak]){
      celebText.textContent=Engine.MSG_STREAK[streak];
      celeb.classList.add('show');SFX.celebrate();
      if(!reducedMotion)spawnConfetti();
      setTimeout(()=>celeb.classList.remove('show'),1500);
    }
  }

  function spawnConfetti(){
    const colors=['#c0392b','#27ae60','#2980b9','#e67e22','#8e44ad','#f1c40f'];
    for(let i=0;i<30;i++){
      const c=document.createElement('div');c.className='confetti';
      c.style.left=Math.random()*100+'%';c.style.top='-10px';
      c.style.background=colors[Math.floor(Math.random()*colors.length)];
      c.style.animationDelay=Math.random()*0.5+'s';
      c.style.animationDuration=(1+Math.random())+'s';
      confettiLayer.appendChild(c);
      setTimeout(()=>c.remove(),2500);
    }
  }

  function showResults(){
    Engine.markSessionEnded();
    const s=Engine.state();
    const isSurvival=s.specialMode==='survival';
    const isGameOver=isSurvival&&s.lives<=0;

    if(isGameOver){SFX.gameOver();haptic([100,50,100]);}
    else SFX.sessionEnd();

    const pct=s.total>0?Math.round(s.points/s.total*100):0;
    $('game-over-text').classList.toggle('hidden',!isGameOver);
    $('results-title').textContent=isGameOver?'Tu as survécu '+s.sessionQ+' tours !':pct>=80?'Excellent !':pct>=60?'Bien joué !':'Continue comme ça !';
    $('final-pct').textContent=pct+'%';
    $('final-detail').textContent=s.points+' correct'+(s.points>1?'s':'')+' sur '+s.total+' · Meilleure série : '+s.bestStreak;

    const avg=Engine.getAvgTime();
    const best=Engine.getBestTime();
    const timeEl=$('final-time');
    if(avg>0){
      timeEl.textContent='⏱ Temps moy: '+avg+'ms · Meilleur: '+best+'ms';
      timeEl.classList.remove('hidden');
    }else timeEl.classList.add('hidden');

    const weak=Engine.getWeakest(5);
    const wEl=$('final-weak');wEl.textContent='';
    if(weak.length){
      wEl.appendChild(document.createTextNode('À retravailler : '));
      for(const w of weak){const sp=document.createElement('span');sp.className='wk';sp.textContent=w.kana;wEl.appendChild(sp);wEl.appendChild(document.createTextNode('('+w.primary+') '));}
    }
    resultsOv.classList.add('show');
  }

  function toggleSettings(){
    settingsOpen=!settingsOpen;
    settingsPanel.classList.toggle('open',settingsOpen);
    $('settings-toggle').setAttribute('aria-expanded',settingsOpen?'true':'false');
  }

  function handleSetting(container,val,setter){
    setter(val);
    container.querySelectorAll('.ctrl-btn').forEach(b=>{
      b.classList.toggle('active',b.dataset.v===val);
      b.setAttribute('aria-checked',b.dataset.v===val?'true':'false');
    });
    if(mcqTimeout){clearTimeout(mcqTimeout);mcqTimeout=null;}
    Engine.resetSession();
    const m=Engine.getGameMode();
    fb.className='feedback';
    if(m==='study'){studyIdx=0;showStudyCard();}else if(m==='quiz')nextQuizQ();else nextMCQQ();
    updateWeak();updateProgress();updateScore();updateStats();
    // Update lives visibility
    const survival=Engine.getSpecialMode()==='survival';
    livesBar.classList.toggle('hidden',!survival||m==='study');
    if(survival)updateLives();
  }

  function startNewSession(){
    if(mcqTimeout){clearTimeout(mcqTimeout);mcqTimeout=null;}
    SFX.click();resultsOv.classList.remove('show');Engine.resetSession();fb.className='feedback';
    const m=Engine.getGameMode();
    const survival=Engine.getSpecialMode()==='survival';
    livesBar.classList.toggle('hidden',!survival||m==='study');
    if(survival)updateLives();
    if(m==='quiz')nextQuizQ();else if(m==='mcq')nextMCQQ();
    updateScore();updateProgress();updateStats();
  }

  // Dark mode
  function toggleDarkMode(){
    const isDark=document.documentElement.getAttribute('data-theme')==='dark';
    document.documentElement.setAttribute('data-theme',isDark?'light':'dark');
    $('dark-toggle').textContent=isDark?'🌙':'☀️';
    $('dark-toggle').classList.toggle('active',!isDark);
    try{window.storage.set('kana-quiz-theme',isDark?'light':'dark');}catch(e){}
  }

  async function loadTheme(){
    try{
      const r=await window.storage.get('kana-quiz-theme');
      if(r&&r.value==='dark'){
        document.documentElement.setAttribute('data-theme','dark');
        $('dark-toggle').textContent='☀️';
        $('dark-toggle').classList.add('active');
      }
    }catch(e){}
    // Also check OS preference
    if(!document.documentElement.getAttribute('data-theme')||document.documentElement.getAttribute('data-theme')==='light'){
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.documentElement.setAttribute('data-theme','dark');
        $('dark-toggle').textContent='☀️';
        $('dark-toggle').classList.add('active');
      }
    }
  }

  // Sound toggle
  function toggleSound(){
    const muted=SFX.toggleMute();
    $('sound-toggle').textContent=muted?'🔇':'🔊';
    $('sound-toggle').classList.toggle('active',muted);
  }

  // Tab visibility — BUG FIX: Preserve session state on tab switch
  function setupVisibility(){
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden){
        Engine.saveSessionState();
      }
      // When becoming visible again, the state is still in memory
      // This prevents any issue with the session disappearing
    });
  }

  function bind(){
    $('onboard-start').addEventListener('click',dismissOnboarding);
    $('submit-btn').addEventListener('click',handleQuizSubmit);
    $('skip-btn').addEventListener('click',handleSkip);
    input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();handleQuizSubmit();}});

    document.addEventListener('keydown',e=>{
      if(Engine.getGameMode()==='study'){
        if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();SFX.click();studyIdx=Math.min(Engine.studyEntries().length-1,studyIdx+1);showStudyCard();}
        if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();SFX.click();studyIdx=Math.max(0,studyIdx-1);showStudyCard();}
        if(e.key===' '||e.key==='Spacebar'){e.preventDefault();revealStudyCard();}
      }
      if(e.key==='Escape'){
        if(Engine.isCorrecting()&&!resultsOv.classList.contains('show'))return;
        if(resultsOv.classList.contains('show'))startNewSession();
        else if(Engine.getGameMode()!=='study'&&Engine.state().total>0&&!resultsOv.classList.contains('show'))showResults();
      }
    });

    $('mode-tabs').addEventListener('click',e=>{const t=e.target.closest('.mode-tab');if(t&&!t.classList.contains('active')){SFX.click();switchMode(t.dataset.mode);}});
    $('settings-toggle').addEventListener('click',()=>{SFX.click();toggleSettings();});
    $('script-sel').addEventListener('click',e=>{const b=e.target.closest('.ctrl-btn');if(b&&!b.classList.contains('active'))handleSetting($('script-sel'),b.dataset.v,Engine.setScript);});
    $('deck-sel').addEventListener('click',e=>{const b=e.target.closest('.ctrl-btn');if(b&&!b.classList.contains('active'))handleSetting($('deck-sel'),b.dataset.v,Engine.setDeck);});
    $('size-sel').addEventListener('click',e=>{const b=e.target.closest('.ctrl-btn');if(b&&!b.classList.contains('active'))handleSetting($('size-sel'),b.dataset.v,Engine.setSessionSize);});
    $('special-sel').addEventListener('click',e=>{const b=e.target.closest('.ctrl-btn');if(b&&!b.classList.contains('active'))handleSetting($('special-sel'),b.dataset.v,Engine.setSpecialMode);});
    $('study-prev').addEventListener('click',()=>{SFX.click();studyIdx=Math.max(0,studyIdx-1);showStudyCard();});
    $('study-next').addEventListener('click',()=>{SFX.click();studyIdx=Math.min(Engine.studyEntries().length-1,studyIdx+1);showStudyCard();});
    $('btn-next-session').addEventListener('click',startNewSession);
    $('btn-reset-stats').addEventListener('click',async()=>{if(!confirm('Effacer toutes les statistiques ?'))return;await Engine.clearAll();startNewSession();updateWeak();updateStats();});
    $('weak-drill-btn').addEventListener('click',()=>{
      SFX.click();
      Engine.setSpecialMode('drill');
      $('special-sel').querySelectorAll('.ctrl-btn').forEach(b=>b.classList.toggle('active',b.dataset.v==='drill'));
      switchMode('quiz');
    });

    // Flip card in study
    flipPrompt.addEventListener('click',revealStudyCard);
    srsRow.addEventListener('click',e=>{const b=e.target.closest('.srs-btn');if(b)handleSRS(b.dataset.v);});

    // Dark mode toggle
    $('dark-toggle').addEventListener('click',()=>{SFX.click();toggleDarkMode();});

    // Sound toggle
    $('sound-toggle').addEventListener('click',()=>{toggleSound();});

    // Speak button
    $('speak-btn').addEventListener('click',()=>{
      const kana=Engine.getCurrentKana();
      if(kana)Speech.speak(kana);
    });
  }

  async function init(){
    await Engine.load();
    await loadTheme();
    bind();
    setupVisibility();
    checkOnboarding();
    switchMode('quiz');
  }
  return{init};
})();

UI.init();
