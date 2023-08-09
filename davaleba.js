//2
var ricxvebi = [2, 5, 100,234,6,3,25,7,3,56,4]
var gadamravlebaTavze = ricxvebi.map(x => x * x);
console.log(gadamravlebaTavze);

//3

var asaki = [2,5,18,14,22,56,4,33]
var tvrametipliusi = asaki.filter(tvrametiplius => tvrametiplius > 18)
console.log(tvrametipliusi);

//4

var gvarebi = ['kapanadze',"nozadze","meladze","sturua","yifshidze","darchia"]
var filteri = gvarebi.filter(x => x.length > 5 && x.includes('dze'))
console.log(filteri);

//5

var produqtebi =[["vashli","msxali"],["pomidori","stafilo","kombosto"],["shaqari","marili"]]
console.log(produqtebi[1][1]);
console.log(produqtebi[2][0]);

//6

var produqtebii = [["vashli","msxali"],["pomidori","stafilo","kombosto"],["shaqari","marili"]]

var sayidlebi = produqtebii.reduce((a,b) =>
a.concat(b) )

console.log(sayidlebi)

