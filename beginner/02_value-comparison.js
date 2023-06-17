
//Comparison : string and number don't match
console.log(`\n\nComparison: with '=='\n`);

if(true == "true") console.log(`true equal 'true'`);
else console.log(`true not equal 'true'`);

if(123 == '123') console.log(`123 equal '123'`);
else console.log(`123 not equal '123'`);

if(1 == "1") console.log(`1 equal '1'`);
else console.log(`1 not equal '1'`);


//Comparison : string and number don't match
console.log(`\n\nComparison: with '==='\n`);

if(true === "true") console.log(`true === 'true'`);
else console.log(`true not === 'true'`);

if(123 === '123') console.log(`123 === '123'`);
else console.log(`123 not === '123'`);

if(1 === "1") console.log(`1 === '1'`);
else console.log(`1 not === '1'`);


if(undefined == a) console.log('var hoisted declaration, not value');
else console.log(`a is defined`);

var a=10;