//Define the Car class
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = true;

    }
  
    toggleAvailability(){
        this.isAvailable = !this.isAvailable;
    }
}
//Define the Rental Class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate){
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;

    }
}

 calculateRentalDuration() ;{
    const oneDay = 24 * 60 * 60 *1000;
    const rentalStart = this.rentalStartDate.getTime();
    const rentalEnd = this.rentalEndDate.getTime();
    const rentalDuration = Math.round((rentalEnd - rentalStart) / oneDay);
    return rentalDuration;

 }


 //Create a Car instance
 const car = new Car("Toyota", "Camry", 2020);

 //Create a Rental instance
 const rentalStartDate = new Date();
 const rentalEndDate = new Date();
 rentalEndDate.setDate(rentalStartDate.getDate() +3);
 const rental = new Rental(car, "John Doe", rentalStartDate,rentalEndDate);

 //Calculate the rental duration
 const rentalDuration= rental.calculateRentalDuration();
 console.log(`The rental duration is ${rentalDuration} days.`);


//Question2
//Define the Question Class
class Question {
    constructor(text, options, correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;

    }
    checkAnswer(userAnswer){
        return userAnswer ===this.correctAnswer;
    }
}

//Define the Quiz class
class Quiz{
    constructor(){
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0
    }

    addQuestion(question){
        this.question.push(question);
    }

    nextQuestion(){
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
            this.score++;
        }
    }
}

//Example usage:
const q1 = new Question(
    "Which planet is closest to the sun?",
    ["Mercury", "Venus", "Earth", "Mars"],
    "Mercury"
);

const quiz = new Quiz();
quiz.addQuestion(q1);
quiz.addQuestion(q2);

//Submit answers
quiz.submitAnswer("Paris");
quiz.nextQuestion();
quiz.submitAnswer("Mercury");

console.log(`Score: ${quiz.score}`);
