function interest(amount, interestRate, time) {
    return (amount * interestRate * time) / 100
}

var mainAmount = 50000;
var rate = 5;
var time = 20;

console.log("You will get",interest(mainAmount,rate,time)+mainAmount , "After" , time, "Years. ", "Your interest amount is = ", interest(mainAmount,rate,time) )
