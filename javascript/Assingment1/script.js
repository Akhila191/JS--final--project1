console.clear();

//Q1

let str1='Today is '
let str2='    a beautiful day '
let str3='In Hawaii.     '

console.log(str1+str2.trim()+" " +str3.trimEnd()) 



//Q2

 let enteredAlphabet='d'
switch(enteredAlphabet){
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                    console.log(enteredAlphabet + ' is a vowel')

                    case 'b':
                    case 'c':
                    case 'd':
                    case 'f':
                    case 'g':
                    case 'h':
                    case 'j':
                    case 'k':
                    case 'l':
                    case 'm':
                    case 'n':
                    case 'p':
                    case 'q':
                    case 'r':
                    case 's':
                    case 't':
                    case 'v':
                    case 'w':
                    case 'x':
                    case 'y':
                    case 'z':
                                        console.log(enteredAlphabet+ ' is consonent')
                    break;
                    
                    default:
                                        console.log(enteredAlphabet+ ' is not a alphabet')
}  


//Q3


// let num1=parseInt(prompt(""))
// let num2=parseFloat(prompt(""))
// let operators=prompt("+,-,*,/")

// switch(operators){
//        case('+'):
//        result=num1+num2;
//        console.log(result)
//        break;
       
//        case('-'):
//        result=num1-num2;
//        console.log(result)
//        break;
        
//        case('/'):
//        result=num1/num2;
//        console.log(result)
//        break;
       
//        case('*'):
//        result=num1*num2;
//        console.log(result)
//        break; 
       
//        default:
// console.log("enter a valid operator")
// break;
// }


//Q4

let a=10
let b=10
let c=10

if (a===b && b===c && c===a){
                    console.log('it is a equlaterial triangle')
} else if(a===b && b===c || c===a ){
                    console.log('it is a isolated triangle')
} else 
{
                    console.log('it is circle')
}                   


//Q5

let totalUnits=300

let bill;

if(totalUnits<=50){
   bill=totalUnits*0.5
} else if(totalUnits >50 && totalUnits<=150 ){
   bill= 50 * 0.5 + (totalUnits-50) * 0.75
} else if(totalUnits >150 && totalUnits<=250){
   bill= 50* 0.5 + 100 * 0.75 +(totalUnits-150)*1.2
}else{
   bill=50* 0.5 + 100 * 0.75 + 100 * 1.2 +(totalUnits-250)*1.5
   bill += bill*0.2
}


console.log("bill",bill)