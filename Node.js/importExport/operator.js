const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return a-b;
};

const mult= (a,b) => {
    return a*b;
};

// module.exports.additon = add;
// module.exports.subtraction = sub;
// module.exports.multtplication = mult;

///Shortcut of the above export code
module.exports = {add,sub,mult};