function verify(regexp, yes, no) {
  for (let str of yes) if (!regexp.test(str)) {
    return `Failure to match '${str}'`;
  }
  for (let str of no) if (regexp.test(str)) {
    return `Unexpected match for '${str}'`;
  } 
  return true;
}

// 1) car and cat
let regExpGolf1 = /c(ar|at)/;

// 2) pop and prop
let regExpGolf2 = /p(op|rop)/;

// 3) ferret, ferry, and ferrari
let regExpGolf3 = /ferr(et|y|ari)/;

// 4) Any word ending in ious  
let regExpGolf4 = /ious\b/;

// 5) A whitespace character followed by 
// a period, comma, colon, or semicolon 
let regExpGolf5 = /\s(\.|,|:|;)/;

// 6) A word longer than six letters 
let regExpGolf6 = /\w{7}/;

// 7) A word without the letter e (or E)
let regExpGolf7 = /\b[^e\s]+\b/i;

module.exports = { verify, regExpGolf1, regExpGolf2, regExpGolf3, regExpGolf4, regExpGolf5, regExpGolf6, regExpGolf7 };
