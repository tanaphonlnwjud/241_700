/*
// String - ตัวอักษร
let fname = "John"
console.log("name",fname)
const idcard = '123'
// number
let age = 30
let hight = 160.2
const pi = 3.14
fname = 'Tom'

idcard = '456'

console.log("idcard",idcard)

console.log("name",fname ,'age',age)
//console.log("age",age)
*/

/**
 + บวก
 - ลบ
 * คูณ
 / หาร
 % mod หารเอาเศษ
*/
/*
 let number1 = 5
 let number2 = 3

 let condition1 = number1 <= number2 //Boolean (true, false)
 console.log("Condition is = ", condition1)
 */

 //let number3 = number1 + " "+ number2
 //console.log("number3 = ",number3)

 /**
  condition statement (if, else, switch)
    == เท่ากับ
    != ไม่เท่ากับ
    > มากกว่า
    >= มากกว่าเท่ากับ
    < น้อยกว่า
    <= น้อยกว่าเท่ากับ
  */

// if - else condition
/*
let number1 = 5
let number2 = 5
if (number1 != number2){
    console.log("this if")
}else if (number1 == number2){
    console.log("this else if")
}else{
    console.log("this else")
}
*/
/*
let score = prompt("ใส่ตัวเลข")
if (score>=80){
    console.log("Grade : A")
}else if (score>=70){
    console.log("Grade : B")
}else if (score>=60){
    console.log("Grade : C")
}else if (score>=50){
    console.log("Grade : D")
}else{
    console.log("Grade : F")
}
*/

/*
    &&  และ
    ||  หรือ
    !   ไม่
*/
/*
let number1 = 5
let number2 = 10

let condition = !(number1 >= 3 || number2 >= 11)
console.log("Result of condition",condition)
*/
/*
let number = 20
if (!(number % 2 == 0)){
    cons
*/

/*
for
*/
/*
let counter = 0

while(counter < 10){
    console.log("Hi")
    counter +=1
}

for (let counter = 0;counter < 10;counter++){
    console.log("Hi")
}
*/

/*
array
*/
/*
let score = [20, 30, 40, 50]

for (let index = 0;index < score.length;index++){
    console.log("score",score[index])
    }
/*
score[0] = score[0]*2
score[1] = score[1]*2
score[2] = score[2]*2
score[3] = score[3]*2
*/
/*
let newScore = score.filter((s) =>{
    return s >=30
})

newScore.forEach((ns) => {
    console.log("New Score",ns)
})
/*

/*
let age1 = 20
let age2 = 25
let age3 = 30
console.log("age1 age2 age3",age1,age2,age3)
console.log(`aage1 age2 age3 ${age1} ${age2} ${age3}`)

let ages = [20,25,30]

// แทนที่
ages = [200,30,45]

console.log("array",ages)
console.log("index",ages[0])

// ต่อ array
ages.push(25)
console.log("push array",ages)

// ลบ array ตัวสุดท้าย
ages.pop()
console.log("pop array",ages)
*/

/*
let ages =[50,20,25,30,35,40]

if (ages.includes(30)){ // เงื่อนไขเป็น true
    console.log("มีเลข 30 อยู่ใน array")
}

ages.sort()
console.log(ages)

let name_list = ["aa","bb","cc"]
name_list.push("dd")
console.log(name_list)

name_list.pop()
console.log("pop name_list", name_list)
console.log("name_list", name_list.length)

for (let index = 0; index < name_list.length;index++){
    console.log("name_list", name_list[index])
}
*/

/*
object
*/

/*
let student =[{
    age: 30,
    name: "aa",
    grade: "A"
},{
    age: 35,
    name: "bb",
    grade: "B"
}]
student.push({
    age: 40,
    name: "CC",
    grade: "C"
})

student.pop()

for (let index = 0;index < student.length;index++){
    console.log("age",student[index].age)
    console.log("name",student[index].name)
    console.log("garde",student[index].grade)
}
*/

/*
console.log(student)
console.log(student.age)
console.log(student.name)
console.log(student.grade)

let age1 = 30
let name1 = "aa"
let grade1 = "A"
*/

/*
function
*/

/*
let score1 = 55
let score2 = 65

let grade = ""
function calcula_grade(score){
    if(score>=80){
        grade = "A"
    }else if(score>=70){
        grade = "B"
    }else if(score>=60){
        grade = "C"
    }else if(score>=50){
        grade = "D"
    }else{
        grade = "F"
    }
return grade
}
 
//เรียกใช้ function
let grade1= calcula_grade(score1)
console.log("Grade1:",grade1)
*/

/*
object funtion
*/

let students = [
    {
        name:"aa",
        score: 50,
        grade: "D"
    },{
        name:"bb",
        score: 80,
        grade: "A"
    }
]

let student = students.find((s) =>{
    if (s.name == "aa"){
        return true
    }
})

let double_score = students.map((s) =>{
    s.score = s.score * 2
    return s
})

let highScore = students.filter((s) =>{
    if(s.score >=120){
        return true
    }
})

console.log(student)
console.log("double_score",double_score)
console.log("highScore",highScore)