// Define words
const subject = [
    'Dogs', 'Cats', 'People', 'Wizards', 'Fairies', 'Mice',
    'Rats', 'Ghosts', 'Goblins', 'Zebras' ];

const verb = [
    'eat', 'drink', 'desire', 'prefer', 'design', 'calculate',
    'paint', 'destroy', 'manipulate', 'praise' ];

const object = ['circuits', 'numbers', 'lettuce', 'medicine', 'facts', 'lamps',
    'nothing', 'water', 'fountains', 'schools' ];

// Pick words
const randomSubject = subject[ Math.floor(Math.random() *10) ]
const randomVerb = verb[ Math.floor(Math.random() *10) ]
const randomObject = object[ Math.floor(Math.random() *10) ]

// Function to generate a random sentence
const generateRandomSentence = () => {
    return `${randomSubject} ${randomVerb} ${randomObject}.`
}

console.log(generateRandomSentence())