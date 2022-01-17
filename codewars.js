//Codewars - 8 "Remove ! from the end of the string"
function remove (string) {  
    let newString = string;
     while (newString[newString.length - 1] === '!') {
       newString = newString.substring(0,newString.length-1);
    } 
    return console.log(newString);
} 
 
remove ('Hi!!');

// My solution
function cannonsReady1(gunners) {
    let arr = Object.keys(gunners);
    let notReady = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'nay') {
        notReady += 1;
      }
    if (notReady > 0) {
      return "Shiver me timbers!";
    } else {
    return "Fire!";
    }
  }
}

//Not my solution
const cannonsReady = (gunners) => {
    let nayCounter = 0;
    Object.keys(gunners).forEach(function(key) {
      
      if (gunners[key] === 'nay') {
        nayCounter += 1;
      }
      console.log(nayCounter);
      
    });
    if (nayCounter > 0) {
      return 'Shiver me timbers!';
      } else {
        return 'Fire!';
    }
};

// Not my solution 2
const cannonsReady2 = (gunners) => {
      return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
};

const cannonsReady3 = (gunners) => {
          for (let i in gunners) {
              if (gunners[i] == "nay") {
                  return "Shiver me timbers!"
              }
          }
          return "Fire!"
};

function howMuchILoveYou(nbPetals) {
          let flower = [
              'I love you',
              'a little',
              'a lot',
              'passionately',
              'madly',
              'not at all'
          ];
          for (let i = 0; i <= nbPetals - 1; i += 1) {

              if (i === nbPetals - 1) {
                  return flower[i % 6]
                }
            }
}

howMuchILoveYou(10);

// Get Nth Even Number
function nthEven(n){
  return (n*2)-2;
}
