let date = new Date().toLocaleDateString().split("/");

let curr = new Date().getTime();
let early = new Date(`2018-07-24`).getTime();

// console.log(new Date("2022-07-21").getTime());

// console.log(1689897600000 - 1658361600000)


// 1 Month = 2629800
// 3 Month = 7889400
// 6 Month = 15778800
// 1 Year = 31557600
// 5 Year = 157788000

console.log(curr/1000 - 157788000);
console.log(curr);
console.log(early);
console.log(curr/1000 - early/1000);

// console.log(curr);
// console.log(later - curr);

//

/*

Portfolio:-
stocks
    - name
    - symbol
    - buy_price
    - no_of_shares

mutual_funds
    - name
    - symbol
    - buy_price
    - type: SIP or Lumpsum
    - years (lock period)
    - year_of_sell
ETF
    - name
    - symbol
    - buy_price


SoldTickers:-
stocks
    - name
    - symbol
    - buy_price
    - no_of_shares
    - sell_price
    - profit

mutual_funds
    - name
    - symbol
    - buy_price
    - type: SIP or Lumpsum
    - years (lock period)
    - year_of_sell
    - sell_price
    - profit

etf
    - name
    - symbol
    - buy_price
    - sell_price
    - profit


*/
