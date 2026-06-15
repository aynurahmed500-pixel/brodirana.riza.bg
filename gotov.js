function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

// --------------------
// ДАННИ
// --------------------
const baza = [ 

{
vapros:"Как се нарича теорията за възникването на Вселената?",
otgovori: ["Теория за Големия взрив","Теория на Нютон","Квантова теория","Теория на относителността"],
pravilen:0
},


{
vapros:"Коя сила оформя звездите и галактиките?",
otgovori: ["Светлина","Триене","Магнетизъм","Гравитация"],
pravilen:3
},


{
vapros:"Какво се разширява постоянно?",
otgovori: ["Луната","Вселената","Слънцето","Земята"],
pravilen:1
},


{
vapros:"Как се нарича нашата галактика?",
otgovori: ["Млечният път","Андромеда","Омега","Алфа Центавър"],
pravilen:0
},


{
vapros:"Какво е светлинна година?",
otgovori: ["Време в Космоса","Орбита на Земята","Година на друга планета","Разстояние, изминато от светлината за година"],
pravilen:3
},

{
vapros:"Каква е основната съставка на звездите?",
otgovori: ["Желязо","Водород","Кислород","Лед"],
pravilen:1
},


{
vapros:"Коя е най-близката звезда до Земята?",
otgovori: ["Сириус","Полярната звезда","Слънцето","Проксима Кентавър"],
pravilen:2
},

{
vapros:"Коя е най-голямата планета в слънчевата система?",
otgovori: ["Марс","Земята","Сатурн","Юпитер"],
pravilen:3
},

{
vapros:"Коя планета е най-близо до Слънцето?",
otgovori: ["Земята","Меркурий","Марс","Венера"],
pravilen:1
},

{
vapros:"Коя планета е известна като червената?",
otgovori: ["Марс","Нептун","Юпитер","Венера"],
pravilen:0
},

{
vapros:"Какво е астероид?",
otgovori: ["Вид звезда","Черна дупка","Малко скалисто тяло в Космоса","Газов облак"],
pravilen:2
},

{
vapros:"Какво е комета?",
otgovori: ["Вид планета","Ледено тяло с опашка","Спътник","Черна дупка"],
pravilen:1
},


{
vapros:"Коя планета има най-кратка година?",
otgovori: ["Земята","Марс","Нептун","Меркурий"],
pravilen:3
},


{
vapros:"Как се ражда звезда?",
otgovori: ["От планети","От газови облаци","От лед","От астероиди"],
pravilen:1
},

{
vapros:"Какво е свръхнова?",
otgovori: ["Огромна звездна експлозия","Нова планета","Спътник","Черна дупка"],
pravilen:0
},


{
vapros:"Какво представлява неутронната звезда?",
otgovori: ["Изключително плътна останка от звезда","Газов гигант","Луна","Комета"],
pravilen:0
},



{
vapros:"Какво е мъглявина?",
otgovori: ["Вид астероид","Ледена планета","Облак газ и прах","Луна"],
pravilen:2
},



{
vapros:"Кой е първият човек стъпил на Луната?",
otgovori: ["Гагарин","Леонов","Алдрин","Армстронг"],
pravilen:3
},


{
vapros:"Какво е МКС?",
otgovori: ["Вид ракета","Международна космическа станция","Планета","Спътник"],
pravilen:1
},

{
vapros:"Какво изпитват астронавтите в орбита?",
otgovori: ["Повишена гравитация","Безтегловност","Само липса на кислород","Свръхтежест постоянно"],
pravilen:1
},


{
vapros:"Кое куче става първото живо същество в орбита?",
otgovori: ["Белка","Стрелка","Лайка","Рекс"],
pravilen:2
},

{
vapros:"Какво е орбита?",
otgovori: ["Космическа станция","Черна дупка","Вид галактика","Път на тяло около друго тяло"],
pravilen:3
},




{
vapros:"Какво причинява приливите и отливите на Земята?",
otgovori: ["Гравитацията на Луната","Слънчевият вятър","Въртенето на Марс","Магнитното поле"],
pravilen:0
},

{
vapros:"Какво е основното предназначение на скафандъра?",
otgovori: ["Само да пази от студ","Да осигурява условия за живот в Космоса","Да увеличава скоростта","Да създава гравитация"],
pravilen:1
},


{
vapros:"Какво защитава Земята от голяма част от космическата радиация?",
otgovori: ["Луната","Облаците","Озоновият слой и магнитното поле","Океаните"],
pravilen:2
},


{
vapros:"Какво се случва с мускулите в продължителна безтегловност?",
otgovori: ["Укрепват постоянно","Не се променят","Изчезват напълно","Отслабват"],
pravilen:3
},

{
vapros:"Какво представлява светкавицата от свръхнова?",
otgovori: ["Край на масивна звезда","Изригване на вулкан","Вид комета","Орбитален сблъсък"],
pravilen:0
},

{
vapros:"Защо Марс е по-подходящ от Венера за бъдещи мисии?",
otgovori: ["По-близо е до Слънцето","Има кислородна атмосфера","Има по-поносими условия","Има океани"],
pravilen:2
},

{
vapros:"Какво е основното препятствие за живот извън Земята?",
otgovori: ["Липса на камъни","Липса на гравитация навсякъде","Недостатъчно светлина","Радиация и липса на подходяща среда"],
pravilen:3
},

{
vapros:"Какво вероятно ще използват бъдещите космически бази?",
otgovori: ["Местни ресурси като лед и минерали","Само ресурси от Земята","Само слънчева светлина","Дърва за гориво"],
pravilen:0
},

{
vapros:"Какво е основното предимство на роботите в Космоса?",
otgovori: ["По-бавни са","Не се нуждаят от храна и кислород","Не издържат радиация","Нямат нужда от енергия"],
pravilen:1
},

{
vapros:"До 2100 г какво най-вероятно ще се случи?",
otgovori: ["Градове на Юпитер","Преселване на цялото човечество","Малки постоянни бази на Луната и Марс","Пълно изоставяне на Земята"],
pravilen:2
},


{
vapros:"Какво е най-вероятното бъдеще на Вселената според сегашните теории?",
otgovori: ["Ще спре веднага","Ще се превърне в звезда","Ще стане твърда материя","Ще се разширява още дълго време"],
pravilen:3
},







{
vapros:"Кой е първият българин в Космоса?",
otgovori: ["Георги Иванов","Александър Александров","Иван Вълков","Петър Петров"],
pravilen:0
},

{
vapros:"През коя година лети Георги Иванов?",
otgovori: ["1961","1979","1988","1995"],
pravilen:1
},

{
vapros:"Кой е вторият български космонавт?",
otgovori: ["Юрий Гагарин","Георги Иванов","Александър Александров","Нийл Армстронг"],
pravilen:2
},

{
vapros:"С какво България е известна в космическите изследвания?",
otgovori: ["Космически кораби","Черни дупки","Лунни бази","Космическа биология и храни"],
pravilen:3
},

{
vapros:"Какво е разработвала България за космически мисии?",
otgovori: ["Космическа храна и научни прибори","Подводници","Ядрени реактори","Телепорти"],
pravilen:0
},

{
vapros:"Какво е било най-опасно при ранните мисии?",
otgovori: ["Липсата на светлина","Изстрелването и връщането","Цветът на скафандъра","Размерът на капсулата"],
pravilen:1
},

{
vapros:"Кои кучета се връщат успешно живи?",
otgovori: ["Лайка и Рекс","Белка и Лайка","Белка и Стрелка","Рекс и Стрелка"],
pravilen:2
},


{
vapros:"Какво е основното предназначение на топлинния щит?",
otgovori: ["Да създава гравитация","Да ускорява кораба","Да произвежда кислород","Да пази кораба от високите температури"],
pravilen:3
},


{
vapros:"Какво може да повреди спътник в Космоса?",
otgovori: ["Космически отпадъци и радиация","Дъжд","Земетресения","Морска вода"],
pravilen:0
},



{
vapros:"Коя планета е най-гореща в Слънчевата система?",
otgovori: ["Меркурий","Венера","Марс","Юпитер"],
pravilen:1
},

{
vapros:"Какво е Олимп Монс на Марс?",
otgovori: ["Каньон","Ледник","Най-високият вулкан в Слънчевата система","Черна дупка"],
pravilen:2
},

{
vapros:"Какво е тъмна материя?",
otgovori: ["Черен прах","Изгоряла звезда","Вещество в атмосферата","Невидима материя, откривана чрез гравитационните ѝ ефекти"],
pravilen:3
},


{
vapros:"Какво се намира между звездите?",
otgovori: ["Междузвезден газ и прах","Абсолютно нищо","Само лед","Само светлина"],
pravilen:0
},

{
vapros:"Какво представлява космическата радиация?",
otgovori: ["Вид звук","Поток от високоенергийни частици","Въздух","Гравитационна вълна"],
pravilen:1
},




{
vapros:"Кое е най-важното качество за кандидат-космонавт?",
otgovori: ["Да не спи","Да е най-бързият човек","Дисциплина, знания и устойчивост","Да няма страх само от височини"],
pravilen:2
},












{
vapros:"Какво става със звездите след изчерпване на горивото?",
otgovori: ["Винаги избухват","Изчезват мигновено","Преминават в различни крайни стадии","Стават планети"],
pravilen:2
},

{
vapros:"Какво е черна дупка?",
otgovori: ["Ледена планета","Обект с огромна гравитация","Празно пространство","Газов облак"],
pravilen:1
},

{
vapros:"Какво поглъща черната дупка",
otgovori: ["Само въздух","Само прах","Само вода","Дори светлината"],
pravilen:3
},

{
vapros:"Коя галактика вероятно ще се сблъска с Млечния път?",
otgovori: ["Андромеда","Омега","Триъгълник","Сомбреро"],
pravilen:0
},

{
vapros:"Какво има в центъра на галактика",
otgovori: ["Планета","Гигантска черна дупка","Комета","Астероид"],
pravilen:1
},



{
vapros:"Защо са изпращани кучета в Космоса?",
otgovori: ["Туризъм","Забавление","Проверка на влиянието върху жив организъм","Добив на данни за планети"],
pravilen:2
},

{
vapros:"Какво използват ракетите за движение?",
otgovori: ["Само въздух","Магнитно поле","Гравитация","Реактивна тяга"],
pravilen:3
},

{
vapros:"Какво е екзопланета?",
otgovori: ["Планета извън Слънчевата система","Спътник","Комета","Звезда"],
pravilen:0
},

{
vapros:"Какво е гравитация?",
otgovori: ["Вид светлина","Сила на привличане между тела","Вид радиация","Космически прах"],
pravilen:1
},

{
vapros:"Защо Космосът изглежда тъмен?",
otgovori: ["Няма звезди","Светлината не съществува","Няма атмосфера, която да разсейва светлината","Черните дупки поглъщат всичко"],
pravilen:2
},



{
vapros:"Какво означава „безтегловност“?",
otgovori: ["Липса на маса","Липса на въздух","Състояние на свободно падане в орбита","Липса на движение"],
pravilen:2
},

{
vapros:"Какво вероятно ще стане със Земята след милиарди години?",
otgovori: ["Ще стане звезда","Ще се превърне в газов гигант","Ще спре да се върти след 100 години","Ще бъде погълната или силно нагрята от Слънцето"],
pravilen:3
},

{
vapros:"Какво може да се добива от астероиди?",
otgovori: ["Само лед","Метали и ресурси","Въздух","Магнитни полета"],
pravilen:1
},

{
vapros:"Какво се случва с атмосферата при увеличаване на височината?",
otgovori: ["Постепенно се разрежда","Става по-плътна","Изчезва мигновено","Превръща се във вода"],
pravilen:0
},


{
vapros:"Какво причинява изгарянето при навлизане в атмосферата?",
otgovori: ["Магнитните полета","Триенето и сгъстяването на въздуха","Липсата на въздух","Светлината на Слънцето"],
pravilen:1
},

{
vapros:"Защо астронавтите тренират в басейни?",
otgovori: ["За плуване","За охлаждане","За симулиране на безтегловност"," За по-бързо движение"],
pravilen:2
},


{
vapros:"Какво представляват пръстените на Сатурн?",
otgovori: ["Огън","Газови облаци","Светлинни ефекти","Лед и скални частици"],
pravilen:3
},



{
vapros:"Какво е екзопланета?",
otgovori: ["Планета извън Слънчевата система","Планета без атмосфера","Спътник","Черна дупка"],
pravilen:0
},

{
vapros:"Каква е основната идея за бъдещи бази на Луната?",
otgovori: ["Само туризъм","Научни и логистични бази","Научни и логистични бази","Превръщане на Луната в звезда"],
pravilen:1
}
];

let igriVaprosi = [];
let index = 0;
let tochki = 0;

// таймер само за quiz
let quizTime = 13;
let quizTimer = null;


// --------------------
// SHUFFLE (САМО ЕДИН ПЪТ!)
// --------------------
function shuffle(array){
  return array.sort(() => Math.random() - 0.5);
}


// --------------------
// RESET БУТОНИ
// --------------------
function resetButtons(){
  for(let i=0;i<4;i++){
    let btn = document.getElementById("btn"+i);
    if(!btn) continue;
    btn.classList.remove("correct","wrong");
    btn.disabled = false;
  }
}


// --------------------
// ТАЙМЕР
// ----
function startQuizTimer(){

  // винаги чистим стария таймер
  if (quizTimer !== null) {
    clearInterval(quizTimer);
    quizTimer = null;
  }

  quizTime = 13;

  const timerEl = document.getElementById("timer");
  if (timerEl) timerEl.textContent = quizTime;

  quizTimer = setInterval(() => {

    quizTime--;

    if (timerEl) timerEl.textContent = quizTime;

    if (quizTime <= 0) {
      clearInterval(quizTimer);
      quizTimer = null;
      proveri(-1); // автоматичен fail
    }

  }, 1000);
}

// --------------------
// ПОКАЗВАНЕ НА ВЪПРОС
// --------------------
function pokajiVapros(){

  resetButtons();

  let v = igriVaprosi[index];

  document.getElementById("broi").textContent =
    "Въпрос " + (index+1) + " / " + igriVaprosi.length;

  document.getElementById("vapros").textContent = v.vapros;

  for(let i=0;i<4;i++){
    document.getElementById("btn"+i).textContent = v.otgovori[i];
  }

  document.getElementById("status").textContent = "";
  document.getElementById("tochki").textContent = "Точки: " + tochki;

  startQuizTimer();
}


// --------------------
// ПРОВЕРКА
// --------------------
function proveri(i){

  clearInterval(quizTimer);

  let pravilna = igriVaprosi[index].pravilen;

  for(let b=0;b<4;b++){
    document.getElementById("btn"+b).disabled = true;
  }

  if(i === pravilna){
    document.getElementById("btn"+i).classList.add("correct");
    document.getElementById("status").textContent = "✔ Верен отговор!";
    tochki++;
  } else {
    if(i !== -1){
      document.getElementById("btn"+i).classList.add("wrong");
    }
    document.getElementById("btn"+pravilna).classList.add("correct");
    document.getElementById("status").textContent = "✖ Грешен отговор!";
  }

  document.getElementById("tochki").textContent =
    "Точки: " + tochki;

  setTimeout(() => {

    index++;

    if(index >= igriVaprosi.length){
      document.querySelector(".quiz").innerHTML =
        `<h1>Край 🚀</h1>
         <h2>Точки: ${tochki} / ${igriVaprosi.length}</h2>
         <button onclick="restartQuiz()">ОПИТАЙ ПАК</button>`;
      return;
    }

    pokajiVapros();

  },1200);
}


// --------------------
// START QUIZ
// --------------------

  
  function startQuiz(){

  document.querySelector(".otgovori").style.display = "flex";

  document.getElementById("quizBox").style.display = "block";

  let startBtn = document.getElementById("startQuizBtn");

  if(startBtn){
    startBtn.style.display = "none";
  }

  index = 0;
  tochki = 0;

  igriVaprosi = shuffle([...baza]).slice(0,10);

  pokajiVapros();
  }



// --------------------
// RESTART QUIZ
// --------------------
function restartQuiz(){

  document.querySelector(".quiz").innerHTML = `

  <div id="quizBox">

    <h2 id="broi"></h2>

    <div id="timerBox">
      ⏱ <span id="timer">13</span>
    </div>

    <h1 id="vapros"></h1>

    <div class="otgovori">
      <button class="otgovor-btn" id="btn0" onclick="proveri(0)"></button>
      <button class="otgovor-btn" id="btn1" onclick="proveri(1)"></button>
      <button class="otgovor-btn" id="btn2" onclick="proveri(2)"></button>
      <button class="otgovor-btn" id="btn3" onclick="proveri(3)"></button>
    </div>

    <p id="status"></p>

    <h3 id="tochki"></h3>

  </div>
  `;

  startQuiz();
}




// ============================
// 🚀 MISSION GAME (ISOLATED)
// ============================

const missionState = {
  tasks: [],
  index: 0,
  lives: 3,
  oxygen: 100,
  progress: 0,
  time: 13,
  timer: null
};

const missionTasks = [
  {
    q: "Кислородът пада опасно. Какво правиш?",
    a: ["Игнорираш проблема", "Пускаш резервна система", "Изключваш кораба", "Отваряш люка"],
    c: 1
  },
  
  {
q: "Двигателят започва да губи тяга по време на полет.",
a: [
"Проверяваш горивната система",
"Изключваш осветлението",
"Игнорираш проблема",
"Отваряш товарния отсек"
],
c: 0
},

{
q: "На радара се появява неизвестен обект.",
a: [
"Ускоряваш без проверка",
"Сканираш обекта",
"Изключваш радара",
"Игнорираш сигнала"
],
c: 1
},

{
q: "Автопилотът започва да дава грешни команди.",
a: [
"Продължаваш нормално",
"Изключваш живота на борда",
"Превключваш на ръчно управление",
"Увеличаваш скоростта"
],
c: 2
},

{
q: "Корабът преминава през метеоритен поток.",
a: [
"Спираш всички системи",
"Игнорираш опасността",
"Отваряш външните панели",
"Активираш защитния щит"
],
c: 3
},

{
q: "Сензорите засичат теч на гориво.",
a: [
"Изолираш повредения сектор",
"Увеличаваш мощността",
"Игнорираш предупреждението",
"Изключваш навигацията"
],
c: 0
},

{
q: "Връзката с екипажа в друг модул прекъсва.",
a: [
"Активираш вътрешна комуникация",
"Изключваш захранването",
"Игнорираш проблема",
"Рестартираш двигателя"
],
c: 1
},

{
q: "Една от камерите спира да работи.",
a: [
"Изключваш всички системи",
"Продължаваш без проверка",
"Проверяваш захранването и връзките",
"Ускоряваш кораба"
],
c: 2
},

{
q: "Корабът навлиза в електромагнитна буря.",
a: [
"Отваряш всички шлюзове",
"Изключваш охлаждането",
"Игнорираш предупрежденията",
"Активираш защитен режим"
],
c: 3
},

{
q: "Системата за гравитация започва да се изключва.",
a: [
"Проверяваш генератора",
"Ускоряваш кораба",
"Изключваш светлините",
"Игнорираш проблема"
],
c: 0
},

{
q: "Получаваш кодирано съобщение от непознат източник.",
a: [
"Изтриваш съобщението",
"Опитваш се да го декодираш",
"Изключваш комуникациите",
"Игнорираш сигнала"
],
c: 1
},

{
q: "Навигационните координати внезапно се променят.",
a: [
"Продължаваш по новия курс",
"Изключваш радара",
"Проверяваш за външна намеса",
"Увеличаваш скоростта"
],
c: 2
},

{
q: "Външен модул започва да прегрява.",
a: [
"Игнорираш проблема",
"Изключваш живота на борда",
"Отваряш товарния отсек",
"Активираш аварийно охлаждане"
],
c: 3
},

{
q: "Енергийният реактор показва нестабилни стойности.",
a: [
"Намаляваш натоварването на реактора",
"Увеличаваш мощността",
"Игнорираш показанията",
"Изключваш комуникацията"
],
c: 0
},

{
q: "Системата за сигурност отчита неоторизиран достъп.",
a: [
"Изключваш алармата",
"Проверяваш логовете за достъп",
"Игнорираш проблема",
"Отваряш всички врати"
],
c: 1
},

{
q: "Корабът губи стабилност при маневра.",
a: [
"Ускоряваш допълнително",
"Игнорираш вибрациите",
"Коригираш тягата на двигателите",
"Изключваш навигацията"
],
c: 2
},

{
q: "Система за охлаждане спира внезапно.",
a: [
"Изключваш сензорите",
"Продължаваш нормално",
"Увеличаваш енергията",
"Пускаш резервно охлаждане"
],
c: 3
},

{
q: "Резервното захранване започва да се изтощава.",
a: [
"Пестиш енергия от второстепенните системи",
"Игнорираш предупреждението",
"Увеличаваш осветлението",
"Отваряш шлюза"
],
c: 0
},

{
q: "Космическа сонда изпраща повредени данни.",
a: [
"Изключваш връзката",
"Проверяваш сигнала за смущения",
"Игнорираш проблема",
"Рестартираш кораба"
],
c: 1
},

{
q: "Системата за управление започва да забавя реакциите.",
a: [
"Продължаваш без промяна",
"Изключваш радара",
"Диагностицираш процесорния модул",
"Увеличаваш скоростта"
],
c: 2
},

{
q: "В близост до кораба се открива радиационен импулс.",
a: [
"Игнорираш сигнала",
"Отваряш външните панели",
"Ускоряваш към импулса",
"Активираш защитните екрани"
],
c: 3
},
  

{
q: "Какво правиш ако кислородната система започне да пада?",
a: [
"Пускаш резервната система",
"Игнорираш показанията",
"Отваряш аварийния люк",
"Изключваш мониторинга"
],
c: 0
},

{
q: "Навигацията губи точност по време на полет. Как реагираш?",
a: [
"Продължаваш без промяна",
"Калибрираш системата ръчно",
"Изключваш всички системи",
"Оставяш автопилота да реши сам"
],
c: 1
},

{
q: "В кораба се активира непознат сигнал за тревога. Какво правиш?",
a: [
"Игнорираш сигнала",
"Спираш комуникациите",
"Проверяваш системния журнал",
"Увеличаваш скоростта"
],
c: 2
},

{
q: "Температурата в кабината се повишава рязко. Как реагираш?",
a: [
"Изключваш сензорите",
"Отваряш външния шлюз",
"Увеличаваш мощността на двигателите",
"Активираш охлаждането"
],
c: 3
},

{
q: "Външен обект се приближава към кораба.",
a: [
"Активираш защитни маневри",
"Изключваш радара",
"Не предприемаш нищо",
"Отваряш товарния отсек"
],
c: 0
},

{
q: "Основната комуникация със Земята прекъсва.",
a: [
"Изключваш захранването",
"Превключваш към резервна комуникация",
"Игнорираш ситуацията",
"Спираш кораба"
],
c: 1
},

{
q: "В системата се засича грешка в енергийното разпределение.",
a: [
"Увеличаваш натоварването",
"Игнорираш предупреждението",
"Рестартираш разпределителния модул",
"Изключваш живота на борда"
],
c: 2
},

{
q: "Корабът навлиза в област с висока радиация.",
a: [
"Отваряш външните панели",
"Изключваш сензорите",
"Ускоряваш без промяна",
"Активираш защита от радиация"
],
c: 3
},

{
q: "Сензорите дават противоречиви данни за позицията.",
a: [
"Сверяваш с резервна навигация",
"Продължаваш на сляпо",
"Изключваш GPS системата",
"Сменяш курса случайно"
],
c: 0
},

{
q: "В кораба се усещат странни вибрации.",
a: [
"Игнорираш вибрациите",
"Проверяваш структурната цялост",
"Увеличаваш скоростта",
"Изключваш мониторинга"
],
c: 1
},

{
q: "Откриваш спад в налягането в една секция.",
a: [
"Отваряш всички врати",
"Игнорираш проблема",
"Изолираш секцията и проверяваш системата",
"Спираш двигателите"
],
c: 2
},

{
q: "Една от системите започва да консумира необичайно много енергия.",
a: [
"Увеличаваш мощността",
"Игнорираш показанията",
"Изключваш целия кораб",
"Диагностицираш и изключваш дефектния модул"
],
c: 3
},

{
q: "Навигационният компютър се рестартира сам.",
a: [
"Проверяваш за повреда или вирус",
"Изключваш резервното захранване",
"Игнорираш рестарта",
"Продължаваш без система"
],
c: 0
},

{
q: "В кораба се появява дим в техническия отсек.",
a: [
"Отваряш всички врати",
"Активираш пожарогасителна система",
"Игнорираш дима",
"Бягаш към капсулата веднага"
],
c: 1
},

{
q: "Системата за животоподдържане показва нестабилност.",
a: [
"Изключваш мониторинга",
"Игнорираш сигнала",
"Преминаваш на резервна система",
"Увеличаваш натоварването"
],
c: 2
}

];



// --------------------
// START MISSION
// --------------------
function startMission(){

  document.getElementById("startBtn").style.display = "none";
  document.getElementById("missionContent").style.display = "block";

  missionState.tasks =
  shuffle([...missionTasks]).slice(0,10);
  missionState.index = 0;
  missionState.lives = 3;
  missionState.oxygen = 100;
  missionState.progress = 0;

  loadMission();
}


// --------------------
// LOAD TASK
// --------------------
function loadMission(){

  clearInterval(missionState.timer);

  missionState.time = 13;
  updateHUD();

  const task = missionState.tasks[missionState.index];

  document.getElementById("mission-question").textContent = task.q;

  const answers = document.getElementById("mission-answers");
  answers.innerHTML = "";

  task.a.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => checkMission(i);
    answers.appendChild(btn);
  });

  startMissionTimer();
}


// --------------------
// TIMER
// --------------------
function startMissionTimer(){

  clearInterval(missionState.timer);

  missionState.timer = setInterval(() => {

    missionState.time--;
    updateHUD();

    if(missionState.time <= 0){

      clearInterval(missionState.timer);

      missionState.lives--;
      missionState.oxygen -= 15;

      document.getElementById("mission-status").textContent = "⌛ Закъсня!";

      setTimeout(nextMission, 1000);
    }

  }, 1000);
}


// --------------------
// CHECK ANSWER
// --------------------
function checkMission(i){

  clearInterval(missionState.timer);

  const correct = missionState.tasks[missionState.index].c;

  const buttons = document.querySelectorAll("#mission-answers button");
  buttons.forEach(b => b.disabled = true);

  if(i === correct){

  buttons[i].classList.add("correctMission");

  document.getElementById("mission-status").textContent =
    "✔ Верен отговор!";

  missionState.progress += 10;

  moveRocket();

  missionState.oxygen =
    Math.min(100, missionState.oxygen + 5);

} else {

  if(buttons[i]){
    buttons[i].classList.add("wrongMission");
  }

  buttons[correct].classList.add("correctMission");

  document.getElementById("mission-status").textContent =
    "❌ Грешен отговор!";

  missionState.lives--;
  missionState.oxygen -= 20;
}

  updateHUD();
  setTimeout(nextMission, 1200);
}


// --------------------
// NEXT
// --------------------
function nextMission(){

  missionState.index++;

  if(
    missionState.lives <= 0 ||
    missionState.oxygen <= 0 ||
    missionState.index >= missionState.tasks.length
  ){
    endMission();
    return;
  }

  loadMission();
}


// --------------------
// HUD
// --------------------
function updateHUD(){

  document.getElementById("mission-lives").textContent = missionState.lives;
  document.getElementById("mission-oxygen").textContent = missionState.oxygen;
  document.getElementById("mission-progress").textContent = missionState.progress;
  document.getElementById("mission-time").textContent = missionState.time;
}

function moveRocket(){

  const rocket = document.querySelector(".rocket");

  const height = missionState.progress * 2.15;

  rocket.style.bottom = (10 + height) + "px";
}
// --------------------
// END
// --------------------
function endMission(){

  clearInterval(missionState.timer);

  document.getElementById("mission-question").textContent = "🚀 Край!";
  document.getElementById("mission-answers").innerHTML = "";
  document.getElementById("mission-status").textContent =
    "Финал: " + missionState.progress;
}


// --------------------
// RESTART
// --------------------
function restartMission(){

  clearInterval(missionState.timer);

  document.getElementById("startBtn").style.display = "block";
  document.getElementById("missionContent").style.display = "none";

  missionState.index = 0;
  missionState.lives = 3;
  missionState.oxygen = 100;
  missionState.progress = 0;
  missionState.time = 13;
  missionState.timer = null;
}


function endMission(){

  clearInterval(missionState.timer);

  document.getElementById("mission-question").innerHTML =
    "🚀 Край на изпита!";

  document.getElementById("mission-answers").innerHTML = "";

  document.getElementById("mission-status").innerHTML =
    `Финален резултат: ${missionState.progress}
     <br><br>
     <button id="restartBtn" onclick="restartMission()">
       ОПИТАЙ ПАК
     </button>`;
}


function restartMission(){

  clearInterval(missionState.timer);

  missionState.index = 0;
  missionState.lives = 3;
  missionState.oxygen = 100;
  missionState.progress = 0;
  missionState.time = 13;

  document.querySelector(".rocket").style.bottom = "20px";

  startMission();
}
