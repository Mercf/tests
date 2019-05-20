
var appData = {
   budget:+prompt('Ваш бюджет на месяц'),
   timeData:prompt('Введите дату в формате YYYY-MM-DD'),
   expenses:{},
   optionalExpenses:{},
   totalExpenses:0,
   income:[],
   savings:false
 }

function detectDayBudget() {

  for (var i = 0; i < 2; i++) {
   var expName = prompt('Введите обязательную статью расходов в этом месяце'),
       exp = +prompt('Во сколько это обойдется');

   if ( (typeof(expName) === 'string') && (typeof(expName) != null) && (typeof(exp) != null) && expName != '' && exp != '' && expName.length < 50 ){
       console.log('done');
       appData.expenses[expName] = exp;
       appData.totalExpenses += exp;
     } else {
       --i;
     }
}

  appData.moneyPerDay = (appData.budget - appData.totalExpenses) / 30;

};

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Budget is too low (<100/day)');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Middle budget');
  } else if(appData.moneyPerDay > 2000) {console.log('Budget is high')
  } else {console.log('Error');
  };
  console.log('Money per Day: ' + appData.moneyPerDay);
};

function chooseOptExpenses() {

  for (var i = 1; i < 4; i++) {
    appData.optionalExpenses[i] = +prompt('необязательные расходы');
    appData.totalExpenses = appData.totalExpenses + appData.optionalExpenses[i];
  };
};

detectDayBudget();
chooseOptExpenses();
detectLevel();

// console.log('Бюджет на 1 день ' + (appData.budget - appData.expenses[] - appData.expenses[expName_2]) / 30 );
