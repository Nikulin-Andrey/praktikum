const tests = [{
   name: "Минск",
   description: "О Беларуси очень мало известно даже ближайшим соседям.А люди из стран подальше часто интересуются, где она находится, и является ли Беларусь вообще страной.",
   picture: "https://magazine.startus.cc/wp-content/uploads/2018/03/minsk-1.jpg",
   time: 1000 * 60,
   questions: [{
      text: "1. На какой реке располагается город Минск?",
      rightans: [1],
      points: 2,
      answers: ["Свислочь", "Птичь", "Припять"]
   }, {
      text: "2. Почему минск назвали городом героем?",
      rightans: [1, 3],
      points: 1,
      answers: ["Потому что многие жвущие являются героями", "потому что живут герои советского союза", "за выдающиеся заслуги перед Родиной", "потому что это столица"]
   }, {
      text: "3. К какому году относится первое упоминание города?",
      rightans: [1],
      points: 3,
      answers: ["1067", "1125", "1386"]
   }, {
      text: "4. Сколько линий в метрополитене Минска?",
      rightans: [2],
      points: 1,
      answers: ["3", "2", "5"]
   }, {
      text: "5. Правда ли что Минский ботанический сад по площади занимает 3-е место в Европе после Королевского ботанического сада Кью в Лондоне и парка в Мадриде?",
      rightans: [1],
      points: 3,
      answers: ["да", "нет"]
   }]
}, {
   name: "Физика",
   description: "Большинству из нас школьные предметы давались не так просто, как хотелось бы.Сейчас даже отличники не помнят многое из школьной программы. Почему? Мы редко применяем школьные знания во взрослой жизни.",
   picture: "https://ki.ill.in.ua/m/670x450/24483745.jpg",
   time: 1000 * 100,
   questions: [{
      text: "1. Какой термометр появился раньше?",
      rightans: [1],
      points: 2,
      answers: ["Термометр Фаренгейта", "Термометр Цельсия", "Первый термометр был рука"]
   }, {
      text: "2. Какая жидкость легче?",
      rightans: [1],
      points: 2,
      answers: ["Сжиженный водород", "Перекись водорода", "Холодная вода"]
   }, {
      text: "3. Кто создал первый паровой двигатель в мире?",
      rightans: [2],
      points: 3,
      answers: ["Иван Гончаров", "Иван Ползунов", "Иван Иванов"]
   }, {
      text: "4. Чему равна скорость света?",
      rightans: [3],
      points: 3,
      answers: ["500 000 км/с", "150 000 км/с", "300 000 км/с"]
   }]
}, {
   name: "Гигиена",
   description: "медицинская наука, изучающая влияние факторов внешней среды на организм человека с целью оптимизации благоприятных и профилактики неблагоприятных воздействий.",
   time: 1000 * 50,
   picture: "https://lh3.googleusercontent.com/proxy/Vhnqn2xg5kU_Avu3nENdDH9SbGgHRAn-IjS1ZpUkvqRcak5_CAbYI2SNPMbkyT9gGoRLZZ6Jvxe1RCx4EjLC03EL65upISKe",
   questions: [{
      text: "1.Гигиена питания (определение)",
      rightans: [1],
      points: 4,
      answers: ["наука о закономерностях и принципах организации рационального (оптимального) питания здорового и больного человека", "наука о закономерностях формирования рациона питания здорового и больного человека", "наука о принципах организации профилактического питания здорового человека"]
   }, {
      text: "2. Очистка воздуха на бактериальных фильтрах в приточных системах вентиляции должна быть предусмотрена для следующих помещений больницы",
      rightans: [3],
      points: 3,
      answers: ["инфекционного бокса", "бактериологических лабораторий", "операционного блока и палат ожоговых больных", "палат терапевтического отделения"]
   }, {
      text: "3.Как правильно мыть руки?",
      rightans: [1, 2],
      points: 3,
      answers: ["невероятно хорошо!", "очень хорошо!", "плохо("]
   }]
}];
function renderTests(tests) {
   const testsConteiner = document.getElementById('tests-container');
   testsConteiner.innerHTML = '<h1 class="choice">ВЫБОР ТЕСТА</h1>';
   let html = '';
   tests.forEach((test) => {
      html = `
   <div class="all">
      <li>
         <a href="#" data-category='${test.name}' class="name">${test.name}</a>
      </li> 
      <p>${test.description}</p>
   </div> 
   `;
      testsConteiner.insertAdjacentHTML('beforeend', html);
   });
   testsConteiner.addEventListener('click', function (e) {
      if (e.target.nodeName.toLowerCase() === 'a') {
         e.preventDefault();
         const testName = e.target.getAttribute('data-category');
         openTest(testName);
      }
   })
};
function openTest(testName) {
   const testsConteiner = document.getElementById('tests-container');
   testsConteiner.innerHTML = '';
   const selectedTest = tests.find((test) => test.name === testName);
   const oTest = document.getElementById('open-test');
   oTest.innerHTML = `
   <h3 ><span id="timer">${selectedTest.time / 1000}</span></h3>
   <h1 class="test">ТЕСТ</h1>
   <div class="imtext">
      <div>
         <img src="${selectedTest.picture}">
      </div>
      <div>
         <h2>${selectedTest.name}</h2>
         <p>${selectedTest.description}</p>
      </div>
   </div>
   `;
   let html = '';
   selectedTest.questions.forEach((question, qnumber) => {
      html = `
      <div class="question">
      <h3>${question.text}</h3>
      `;
      oTest.insertAdjacentHTML('beforeend', html);
      question.answers.forEach((answer, number) => {
         html = `
         <p><input type="checkbox" name="${question.text}" value="${number + 1}" id="${qnumber + 1}-${number + 1}" >${answer}</p>
         `;
         oTest.insertAdjacentHTML('beforeend', html);
      });
      oTest.insertAdjacentHTML('beforeend', "</div>");
   });
   const timer = document.getElementById('timer');
   let a = selectedTest.time / 1000;
   const second = setInterval(() => {
      timer.innerText = `${--a}`;
   }, 1000);
   oTest.insertAdjacentHTML('beforeend', `<input type="button" id="go" value="Завершить">`);
   const button = document.getElementById('go');
   const timerId = setTimeout(endTest, selectedTest.time, selectedTest, oTest, second);
   button.addEventListener('click', function () {
      let right = 0, right1 = 0, counter = 0, counter1 = 0, mark = 0;
      for (let i = 0; i < selectedTest.questions.length; i++) {
         for (let k = 0; k < selectedTest.questions[i].rightans.length; k++) {
            const chbox = document.getElementById(`${i + 1}-${selectedTest.questions[i].rightans[k]}`);
            if (chbox.checked) {
               right1++;
            }
         }
         if (right1 === selectedTest.questions[i].rightans.length) {
            right++;
            mark += selectedTest.questions[i].points;
         }
         for (let j = 0; j < selectedTest.questions[i].answers.length; j++) {
            const somech = document.getElementById(`${i + 1}-${j + 1}`);
            if (somech.checked) {
               counter1++;
               if (!(selectedTest.questions[i].rightans.includes(j + 1)) && right1 === selectedTest.questions[i].rightans.length) {
                  right--;
                  mark -= selectedTest.questions[i].points;
                  break;
               }
            }
         };
         if (!(counter1 === 0)) {
            counter += 1;
            counter1 = 0;
         }
         right1 = 0;
      };
      if (counter >= selectedTest.questions.length) {
         clearTimeout(timerId);
         clearInterval(second);
         oTest.innerHTML = `
         <h1>Результат: ${right} правильно и ${selectedTest.questions.length - right} неправильно</h1>
         <h2>Оценка: ${mark} / 10</h2>
         `;
      } else {
         alert("Ответьте на все вопросы!");
      }
   });
};
function endTest(selectedTest, oTest, second) {
   let right = 0, right1 = 0, mark = 0;
   for (let i = 0; i < selectedTest.questions.length; i++) {
      for (let k = 0; k < selectedTest.questions[i].rightans.length; k++) {
         const chbox = document.getElementById(`${i + 1}-${selectedTest.questions[i].rightans[k]}`);
         if (chbox.checked) {
            right1++;
         }
      }
      if (right1 === selectedTest.questions[i].rightans.length) {
         right++;
         mark += selectedTest.questions[i].points;
      }
      for (let j = 0; j < selectedTest.questions[i].answers.length; j++) {
         const somech = document.getElementById(`${i + 1}-${j + 1}`);
         if (somech.checked) {
            if (!(selectedTest.questions[i].rightans.includes(j + 1)) && right1 === selectedTest.questions[i].rightans.length) {
               right--;
               mark -= selectedTest.questions[i].points;
               break;
            }
         }
      };
      right1 = 0;
   };
   clearInterval(second);
   oTest.innerHTML = `
      <h1>Результат: ${right} правильно и ${selectedTest.questions.length - right} неправильно</h1>
      <h2>Оценка: ${mark} / 10</h2>
      `;
};
renderTests(tests);