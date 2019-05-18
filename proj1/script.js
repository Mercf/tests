var money = +prompt('Ваш бюджет на месяц'),
 time = prompt('Введите дату в формате YYYY-MM-DD'),
 expName = prompt('Введите обязательную статью расходов в этом месяце'),
 exp = +prompt('Во сколько это обойдется'),
 appData = {
   budget:money,
   timeData:time,
   expenses:{},
   optionalExpenses:{},
   income:[],
   savings:false
 };
appData.expenses[expName] = exp;
console.log('Бюджет на 1 день ' + (appData.budget - appData.expenses[expName])/30 );
