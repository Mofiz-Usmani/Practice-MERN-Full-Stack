const sum = (a,b) => a + b;
const mul = (a, b) => a * b;
const PI = 3.14;

// module.exports = sum(5, 3);
// module.exports = mul(5, 3);
// module.exports = PI;


const obj = {
    sum : sum,
    mul : mul
};

module.exports = obj;