function loopingTriangle(base) {
  const triangle = [];
  
  if (Number.isInteger(base)) {
    let line = '';

    for (let i = 0; i < base; i++) {
      line+='#';
      triangle.push(line);
    }
  }

  return triangle.join('\n');
}

module.exports = loopingTriangle;

// console.log(loopingTriangle(7));
// #
// ##
// ###
// ####
// #####
// ######
// #######

// console.log(loopingTriangle(15))
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ########
// #########
// ##########
// ###########
// ############
// #############
// ##############
// ###############
