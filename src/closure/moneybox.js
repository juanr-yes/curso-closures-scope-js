function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

const moneyBoxAna = moneyBox();

moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)

function family() {
  let family = [];
  function addMember(member) {
    family.push(member)
    console.log(`Esta familia está compuesta por ${family}`)
  }
  return addMember;
}

let petersFamily = family();
petersFamily('Peter');
petersFamily('Camille');
petersFamily('John');
let emilysFamily = family();
emilysFamily('Emily') 
emilysFamily('Carl')
emilysFamily('Sophy')