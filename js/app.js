const questions = [{

    'que':'Which of the following is the markup language?',
    'a' : 'Html',
    'b' : 'CSS',
    'c' : 'Javascript',
    'd' : 'PHP',
    'ans' : 'option1'
},
{

    'que':'Which of the following is the STYLE language?',
    'a' : 'Html',
    'b' : 'CSS',
    'c' : 'Javascript',
    'd' : 'PHP',
    'ans' : 'option2'

},
{

    'que':'Which of the following is the Backend language?',
    'a' : 'Html',
    'b' : 'CSS',
    'c' : 'Javascript',
    'd' : 'PHP',
    'ans' : 'option4'

},
]
let index = 0;
let right = 0,wrong=0;
let options = document.querySelectorAll(".option");
let question = document.getElementById('question');

let total = questions.length;

const questionans = () => {
    if (index == total){
       return end() ;
       }
       reset() ;
    let data =  questions[index];
    question.innerHTML =  `${index + 1})  ${data.que}`;
    options[0].nextElementSibling.innerHTML= data.a;
    options[1].nextElementSibling.innerHTML = data.b;
    options[2].nextElementSibling.innerHTML = data.c;
    options[3].nextElementSibling.innerHTML = data.d;
}

const submit = () => {
    let ans = check();
    let data =  questions[index];
  
     if(ans ==data.ans){
        right++;
     }
     else{
        wrong++;
     }
     if(ans){
       index++;

       questionans();
    }
    
  
}

const check = () => {
    let selectedans;

    
    options.forEach(element => {
        if(element.checked){
             selectedans = element.value;
        }
    });
    return selectedans;
}
const reset = () => {
    options.forEach(element => {
       element.checked = false;
             
       
    })
}
const end = () => {
    document.getElementById('quiz').innerHTML = `
    <h1> Thank you for playing </h1>
    <h2>${right}/${total} are correct</h2>
    `
}
//initial call
questionans();



