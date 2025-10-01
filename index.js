//Code your solutions in this file
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
}

const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}

const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

const multiply = (num1, num2) => {
    return num1 * num2;
}

const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }
    return (num1 + num2);
};
console.log(add(2, 4));
console.log(add(5, 5));