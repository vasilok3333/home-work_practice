//Task1 
//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

const STUDENTS = [
    { name: 'John', mark: 80 },
    { name: 'Bill', mark: 77 },
    { name: 'David', mark: 68 },
    { name: 'Ryan', mark: 88 },
    { name: 'Nick', mark: 95 },
];

/*  let total = 0;
for (let i = 0; i < STUDENTS.length; i++) {
    total += STUDENTS[i].mark;
} 

 const AVERAGE_GRADE = total / STUDENTS.length; */ //можна і так зробити

const AVERAGE_GRADE = STUDENTS.reduce((sum, current) => sum + current.mark, 0) / STUDENTS.length;
switch (true) {

    case AVERAGE_GRADE < 60:
        console.log(`O God! You are expelled. Your mark is 'F`);
        break;
    case AVERAGE_GRADE < 70:
        console.log(`You need to learn a lot. Your mark is 'D'`);
        break;
    case AVERAGE_GRADE < 80:
        console.log(`It could have been better. Your mark is 'C'`);
        break;
    case AVERAGE_GRADE < 90:
        console.log(`Quite good. Your mark is 'B'`);
        break;
    case AVERAGE_GRADE < 100:
        console.log(`You are well done, your mark is 'A'`);
        break;
    default:
        console.log('You are just a genius. You scored more points than it could be');
};


//Task2
//  Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

let sum = 0;

for (let i = 0; i < 1000; i++) {
    sum = (i % 3 == 0 || i % 5 == 0) ? sum += i : sum; // if (i%3 == 0 || i%5 == 0) { sum += i }
}

console.log(sum)



//Task 3
//Write a JavaScript program to construct the following pattern, using a nested for loop. 
let chr = '';
for (let i = 1; i <= 5; i++) {

    chr = chr + ("* ");
    document.write(`<pre>${chr} \n <\/pre>`); // just through the console: console.log(chr);
}
