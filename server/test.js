let date = new Date().toLocaleDateString().split("/");

let curr = new Date().getTime();
let later = new Date(`${date[2]}-0${date[1]}-0${date[0]} 15:30:00`).getTime();

console.log(new Date("2022-07-21").getTime());

console.log(1689897600000 - 1658361600000)

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
