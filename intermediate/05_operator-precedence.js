/* When performing Arithmetic operation you need to focus on precedence

Precedence means the priority of each type of operation in a given calculation

a. Precedence with higher value with execute first
b. With same precedence you need to consider Associativity(left-to-right/ right-to-left)

Precedence List: 

1. Group/ Bracket                                   : 18
2. Function Call/ Operator Chaining(object?.b)      : 17
3. new()                                            : 16
4. Post Increment ++/ Post Decrement --             : 15
5. ++ Pre Increment/-- Pre Decrement                : 14
6. Multiply/ Division/ Reminder %                   : 12
7. Addition / Subtraction                           : 11
8. Grater/ Less / Equal >=                          : 9
9. Equality(==)/ Strict Eq(===)                     : 8
10.Conditional Operator(a==b?c:d)                   : 2
*/



let one = 16/ (2*4) +12-32*8+1;
console.log(one)

let two = 32<12/(3==7?4:9)+12/3*7-21%5
console.log(two);
