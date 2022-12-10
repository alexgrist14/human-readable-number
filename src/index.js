const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
}
const numerals = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
}

function isLessThanNineteen(number) {
    return number <= 19;

}

function isRound(number) {
    return isMoreThanNineteen(number) && number.toString().endsWith('0');
}

function isMoreThanNineteen(number) {
    return !isLessThanNineteen(number) && (number < 100);
}

function isMoreThanHundred(number) {
    return number >= 100;
}

function undefinedCheck(firstNum, secondNum) {
    return ((firstNum || 0) + " " + (secondNum || 0)) || '';
}


module.exports = function toReadable(number) {
    let firstNumber = number.toString()[0];
    let secondNumber = number.toString()[1];
    let thirdNumber = number.toString()[2];
    let dozens = numerals[`${secondNumber === '0' ? '' : `${secondNumber}0`}`];
    let units = numbers[`${thirdNumber}`] === '0' ? '' : numbers[`${thirdNumber}`];
    switch (true) {
        case number === 0:
            return 'zero';
        case isLessThanNineteen(number):
            return numbers[`${number}`];
        case isRound(number):
            return numerals[`${number}`];
        case isMoreThanNineteen(number):
            return numerals[`${firstNumber + '0'}`] + " " + numbers[`${secondNumber}`];
        case isMoreThanHundred(number):
            return (numbers[`${firstNumber}`] + " " + "hundred"
                + ((secondNumber === '0' && thirdNumber === '0') ? '' :
                        " "
                        +

                        (isLessThanNineteen(Number(secondNumber.toString() + thirdNumber.toString()))
                            ? numbers[`${(secondNumber === '0' ? '' : secondNumber) + thirdNumber}`] :
                            undefinedCheck(dozens, units)
                                .replace(/[0-9]/g, '')
                                .replace(/ +/g, ' ').trim())
                )
            )
    }
}
