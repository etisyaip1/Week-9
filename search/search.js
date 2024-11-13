
//SEARCH

// .ind.....()
// .inc.....()
// .fi..()
// .fi....()

// fill in the blanks what javascript keywords and methods above,
// have to do with search?

corpus = "Now is the time..."
i = corpus.indexOf("is");
console.log(i); //what do we get?
console.log(corpus.includes("old")); //what do we get?
data = [3, 2, 2, 1, 33, 4, 2, 1];
console.log(data.find(v => v === 1)); //what do we get?

console.log(data.filter(v => v >= 2));

//in the capstone we used filter and includes,
// based on the value what we selected (park type),
// rather than custom text we typed,
// and we ony searched description.