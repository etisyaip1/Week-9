// what is a javascript testing framework?
//pile of JS code for testing JS
//e.g Chai, Nose
// unit testing- testing a single unit (e.g a fucntion)
//not black box testing which tests the whole app 

function testMe(a, b){
    return a + b;
}

//console.log(testMe(6,7)) //expect 13
testData = [
    {inputs:[6,7], output:13},
    {inputs:[6,7], output:99},
    {inputs:[12,13], output:25}
];

// generic one liner without runner fucntion 
testData.forEach((t, i) => console.log(i, testMe(...t.inputs) === t.output ? "PASS" : "FAIL"));

// generic one liner def of gernic runner fucntion
const runner1 = (fn,ioList)=> ioList.forEach((t, i) => console.log(i, fn(...t.inputs) === t.output ? "PASS" : "FAIL"));
runner1(testMe, testData); // use runner1

//long form genreic test runner
function runner(fn, ioList){
    ioList.forEach(test => {
        result = fn(...tests.inputs);
        success = result === test.output; //match expect
        console.log(i, success ? "PASS" : "FAIL");
    });
}
//use it
runner(testMe, testData);