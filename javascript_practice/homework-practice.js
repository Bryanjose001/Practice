/*
1. Ages Homework (Simple List)
List:
const ages = [12, 18, 25, 9, 40, 15, 30];
Task: Using a for-each loop, print ONLY the ages that are 18 or older.
Expected Output:
18
25
40
30
*/
const ages = [12, 18, 25, 9, 40, 15, 30]

for (let age of ages){
    if (age >= 18){
        console.log(age)
    }
}





/*
2. Even Numbers Homework
List:
const numbers = [3, 10, 7, 24, 50, 5, 12];
Task: Using a for-each loop, print ONLY the even numbers.
Expected Output:
10
24
50
12
*/
const numbers = [3, 10, 7, 24, 50, 5, 12]
for (let num of numbers){
    if(num % 2 == 0){
        console.log(num)

    }
}




/*
3. Grades Homework (With Counter)
List:
const grades = [90, 45, 76, 88, 59, 100, 67];
Task: Using a for-each loop, print grades 60 or above AND count how many passed.
Expected Output:
90
76
88
100
67
Passed students: 5
*/
const grades = [90, 45, 76, 88, 59, 100, 67]
for (let grade of grades){
    if(grade >= 60){
        console.log(grade)
    }
}







/*
4. Reviews Object Homework (Original Example)
Reviews:
const reviews = [
{ placeId: 10, text: "Nice cafe" },
{ placeId: 25, text: "Great food!" },
{ placeId: 10, text: "Amazing service" }
];
Task: Using a for-each loop, print ONLY the reviews with placeId = 10.
Expected Output:
Found matching review: Nice cafe
Found matching review: Amazing service
*/
const reviews = [
{ placeId: 10, text: "Nice cafe" },
{ placeId: 25, text: "Great food!" },
{ placeId: 10, text: "Amazing service" }
]
let targetid = 10
for (let review of reviews){
    if(review.placeId === targetid){
        console.log(review.text)
    }
}