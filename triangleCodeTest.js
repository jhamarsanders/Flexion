//node module that allows a command prompt and user input
const prompt = require('prompt');

function returnClassification(a, b, c) {
    let classification = '';
    //using the triangle inequality theorem we can check if the values are a triangle first and foremost.
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        if (a == b && b == c) {
            classification = 'Equilateral';
            return classification;
        } else if ((a == b) || (b == c) || (a == c)) {
            classification = 'Isosceles';
            return classification;
        } else {
            classification = 'Scalene';
            return classification;
        }
    } else {
        classification = 'Not a triangle';
        return classification;
    }
}

//Test Cases
console.log(returnClassification(1.5, 1.5, 1.5));
console.log(returnClassification(3, 4, 4));
console.log(returnClassification(4.4, 7.3, 9.1));
console.log(returnClassification(4, 6, 11));

//schema to validate that the input a user enters is in fact a number
const schema = {
    properties: {
        side1: {
            pattern: /^\d+$/,
            type: 'number',
            message: 'Must be a number',
            required: true
        },
        side2: {
            pattern: /^\d+$/,
            type: 'number',
            message: 'Must be a number',
            required: true
        },
        side3: {
            pattern: /^\d+$/,
            type: 'number',
            message: 'Must be a number',
            required: true
        }
    }
};


prompt.start();

prompt.get(schema, (err, result) => {
    if (err) { return onErr(err); }
    console.log(`Result of sides ${result.side1}, ${result.side2}, ${result.side3}: ${returnClassification(result.side1, result.side2, result.side3)}`);
});

function onErr(err) {
    console.log(err);
    return 1;
}