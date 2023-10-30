 class Question {
    static id = 0;
    constructor(question , answers , isCode = false, points ,correctIndex )
    {
        this.question = question;
        this.answers = answers
        this.isCode = isCode
        this.points = points
        this.correctIndex = correctIndex
        Question.id += 1 
        this.id = Question.id
    }
}
let questions =[
    new Question("What is a callback function in JavaScript, and why is it used?", ["A function that is called automatically when a program starts.", "A function passed as an argument to another function, which is then invoked after a particular task is completed.", "A function that defines the main program logic.", "A function used for mathematical calculations."],false,3,1),
    new Question("What is the difference between 'null' and 'undefined' in JavaScript?", ["They are the same and can be used interchangeably.", "Null represents a missing value, while undefined represents an empty object.", "Undefined represents a missing value, while null represents an empty object.", "Null is a reserved keyword in JavaScript, and undefined is not."],false,3,1),
    new Question("What is a JavaScript closure, and how does it work?", ["A security feature in JavaScript", "A way to control access to variables", "A function that can access and modify variables from its containing function .", "A mechanism for preventing code execution"],false,3,2),
    new Question("What is the purpose of a 'try...catch' statement in JavaScript?", ["To define a new variable", "To handle exceptions and errors gracefully", "To create a loop", "To change the document structure"],false,3,1),
    new Question("Explain the concept of asynchronous programming in JavaScript and why it's important.", ["It's a way to make programs run faster.", "It's a method for executing code line by line.", "It's a way to handle tasks that might take some time to complete, such as fetching data from a server, without blocking the main thread and making the user interface unresponsive.", "It's a way to ensure that code runs in a specific order."],false,3,2),
    new Question("What is the purpose of the 'Arrow function' syntax in JavaScript, and how does it differ from regular functions?", ["It's used to create objects.", "It's used to write SQL queries.", "It's a concise way to write functions, and it does not have its own 'this' value, so it doesn't bind a new context.", "It's used for loops."],false,3,2),
    new Question("What is the 'event loop' in JavaScript, and how does it help manage asynchronous operations?", ["It's a way to create animations in JavaScript.", "It's a component in web browsers responsible for rendering web pages.", "It's a mechanism that allows JavaScript to perform non-blocking, asynchronous operations.", "It's a way to define objects in JavaScript."],false,3,2),
    new Question("Using the 'map' function, how can you double each number in an array like [2, 4, 6] and create a new array with the results?", ["map([2, 4, 6], num => num * 2);", "map([2, 4, 6], doubleNums);", "map([2, 4, 6], num + num);", "map([2, 4, 6], num * num);"],true,3,0),
    new Question("Using the 'reduce' function, how can you find the sum of numbers in an array like [3, 5, 7]?", ["reduce([3, 5, 7], (accumulator, num) => accumulator + num, 0);", "reduce([3, 5, 7], (accumulator, num) => accumulator + num);", "reduce([3, 5, 7], sumNumbers, 0);", "reduce([3, 5, 7], (accumulator, num) => accumulator * num);"],true,3,0),
    new Question("Using the 'filter' function, how can you create an array with only the even numbers from [1, 2, 3, 4, 5]?", ["filter([1, 2, 3, 4, 5], num => num % 2 === 0);", "filter([1, 2, 3, 4, 5], isEven);", "filter([1, 2, 3, 4, 5], num + num);", "filter([1, 2, 3, 4, 5], num => num % 2 === 1);"],true,3,0),
    new Question("Write a code example of an arrow function that takes two parameters 'x' and 'y' and returns their sum.", ["const add = (x, y) => x + y;", "function add(x, y) { return x + y; }", "add(x, y) => x + y;", "const add = function(x, y) { return x + y; }"],true,3,0),
    new Question("How can you use arrow functions to simplify the code for mapping a list of numbers to their squares? Provide an example.", ["const numbers = [1, 2, 3, 4, 5]; \n const squares = numbers.map(num => num * num);", "const numbers = [1, 2, 3, 4, 5]; \n const squares = numbers.map(function(num) { return num * num; });", "const numbers = [1, 2, 3, 4, 5]; \n const squares = numbers.map(num * num);", "const numbers = [1, 2, 3, 4, 5]; \n const squares = numbers.map((num) => { return num * num; });"],true,3,0),
    new Question("Write a code example of an arrow function that accepts an array of names and filters out those that start with the letter 'A'.", ["const names = ['Alice', 'Bob', 'Eve', 'Andrew', 'Charlie']; \n const filteredNames = names.filter(name => name[0] === 'A');", "const names = ['Alice', 'Bob', 'Eve', 'Andrew', 'Charlie']; \n const filteredNames = names.filter(function(name) { return name[0] === 'A'; });", "const names = ['Alice', 'Bob', 'Eve', 'Andrew', 'Charlie']; \n const filteredNames = names.filter(name[0] === 'A');", "const names = ['Alice', 'Bob', 'Eve', 'Andrew', 'Charlie']; \n const filteredNames = names.filter(name => { return name[0] === 'A'; });"],true,3,0),
    new Question("Write a code example using the 'map' function to double each number in an array and create a new array with the results.", ["const numbers = [1, 2, 3, 4, 5]; \n const doubledNumbers = numbers.map(num => num * 2);", "const numbers = [1, 2, 3, 4, 5]; \n const doubledNumbers = numbers.map(num => num + num);", "const numbers = [1, 2, 3, 4, 5]; \n const doubledNumbers = numbers.map(num => num - 1);", "const numbers = [1, 2, 3, 4, 5]; \n const doubledNumbers = numbers.map(num => num / 2);"],true,3,0),
    new Question("Provide a code example using the 'reduce' function to find the sum of numbers in an array.", ["const numbers = [1, 2, 3, 4, 5]; \n const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);", "const numbers = [1, 2, 3, 4, 5]; \n const sum = numbers.reduce((accumulator, current) => current - accumulator, 0);", "const numbers = [1, 2, 3, 4, 5]; \n const sum = numbers.reduce((accumulator, current) => accumulator * current, 1);", "const numbers = [1, 2, 3, 4, 5]; \n const sum = numbers.reduce((accumulator, current) => current, 0);"],true,3,0),
    new Question("Write a code example using the 'filter' function to create an array with only the even numbers from another array.", ["const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; \n const evens = numbers.filter(num => num % 2 === 0);", "const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; \n const evens = numbers.filter(num => num % 2 === 1);", "const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; \n const evens = numbers.filter(num => num);", "const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; \n const evens = numbers.filter(num => num % 2 === 2);"],true,3,0),
]

const  easyQuestions = [
    new Question("Which programming paradigm does JavaScript support?",["Only procedural programming","Only object-oriented programming","Only functional programming","Procedural, object-oriented, and functional programming"],false,1,3),
    new Question("How do you declare a variable in JavaScript?",["variable x = 10;","int x = 10;","let x = 10;","x = 10;"],true,1,2),
    new Question("How do you declare a variable in JavaScript?",["Using the \"define\" keyword","With the \"variable\" keyword","Using \"var,\" \"let,\" or \"const\"", "Variables are automatically declared in JavaScript"],false,1,2),
    new Question("Which of the following is a valid way to write a comment in JavaScript?", ["* This is a comment *", "// This is a comment", "-- This is a comment --", "# This is a comment"],true,1,1),
    new Question("What is the result of the expression \"2 + 2\" in JavaScript?", ["4", "\"4\"", "\"2 + 2\"", "It's an error"],false,1,0),
    new Question("How do you add an event listener to an HTML element in JavaScript?", ["By using the \"connectEvent\" method.", "By wrapping the element in a <script> tag.", "By using the \"addEventListener\" method and specifying the event type and a function to be executed.", "By using the \"onEvent\" attribute in the HTML element."],false,1,2),
    new Question("Explain the difference between \"let,\" \"const,\" and \"var\" when declaring variables in JavaScript.", ["They are all the same and can be used interchangeably.", "\"let\" and \"const\" are used for loops, while \"var\" is used for mathematical operations.", "\"let\" and \"const\" are block-scoped and \"var\" is function-scoped.", "\"let\" is used for numbers, \"const\" for strings, and \"var\" for arrays."],false,1,2),
    new Question("Which of the following is a data type in JavaScript?", ["Boolean", "Webpage", "Algorithm", "Database"],false,1,0),
    new Question("What is the correct way to display a message in the browser console using JavaScript?", ["alert('Hello, World!');", "document.write('Hello, World!');", "console.log('Hello, World!');", "window.showMessage('Hello, World!');"],true,1,2),
    new Question("What keyword is used to declare a constant variable in JavaScript?", ["const", "let", "var", "constant"],false,1,0),
    new Question("In JavaScript, what does the 'NaN' value represent?", ["Not a Number", "A large number", "A random number", "The number zero"],false,1,0),
    new Question("Which JavaScript method is used to change the content of an HTML element?", ["changeContent()", "modifyHTML()", "replaceText()", "innerHTML"],false,1,3),
    new Question("What is the correct way to check if a variable 'x' is equal to 5 in JavaScript?", ["if (x = 5) { /* code here */ }", "if (x == 5) { /* code here */ }", "if (x === 5) { /* code here */ }", "if (x != 5) { /* code here */ }"],true,1,1),
    new Question("What is the value of '5 + '5' in JavaScript?", ["10", "'55'", "55", "An error"],true,1,1),
    new Question("Which JavaScript function is used to round a number to the nearest integer?", ["Math.round()", "Math.ceil()", "Math.floor()", "Math.random()"],false,1,0),

  ];

  const  hardQuestions =[
        
    new Question("Explain the differences between 'localStorage' and 'sessionStorage' in JavaScript, and provide a practical use case for each.", ["They are the same thing with different names.", "They differ in data storage.", "They are used for server-side data storage.", "They are used for creating server-side sessions."],false,4,1),
            new Question(
            "What is a 'Promise' in JavaScript, and how do you handle errors with Promises?",
            [
                "It's a guarantee that a function will execute successfully. Errors are managed via 'catch' or a second 'then' argument for rejections.",
                "It's a way to implement loops in JavaScript. Errors are managed via 'throw Exception'.",
                "It's The outcome of an asynchronous task. Errors are managed via 'catch' or a second 'then' argument for rejections.",
                "It's a way to define asynchronous loops in JavaScript. The Errors are not managed "
            ],
            false,
            4,
            2
        ),
            new Question("What is the purpose of 'strict mode' in JavaScript, and how does it differ from 'sloppy mode'? Provide an example of a situation where 'strict mode' is beneficial.", ["It's a way to write code with fewer restrictions.", "It's a way to enable more lenient error handling.", "A set of rules that tighten the rules of JavaScript. ", "It's a way to optimize code for mobile devices."],false,4,2),
            new Question("Explain the concept of 'callback hell' in asynchronous JavaScript, and how can it be mitigated using techniques like 'Promises' or 'async/await'?", ["It's a place where callbacks are executed asynchronously.", "It's a term used to describe a scenario where multiple nested callbacks are used for handling asynchronous operations .", "It's a term used to describe the ideal use of callbacks in JavaScript.", "It's a smart way to implement asynchronous loops in JavaScript, granting greater concurrency and responsiveness through callback functions."],false,4,2),
            new Question("What is the purpose of the 'fetch' API in JavaScript, and how is it used for making HTTP requests?", ["It's used for creating interactive forms.", "It's used to fetch data from a database.", "It's a modern API for making network requests to retrieve data from a server.", "It's used to create animations in JavaScript."],false,4,2),
    
        ];
const jsonQuestions = hardQuestions.map(question => {
    return JSON.stringify(question);
});

console.log(jsonQuestions);