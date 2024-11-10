// The calculation function


function calc(x, y, z) {
    let result = 0;
  
    // Check if x or y is greater than 0
    if (x !== 0 || y !== 0) {
      result = x - y; // Perform the subtraction
    }

    z.textContent = result;
    return result;
  
  }

  function sum(x, y, z){
    let result = 0;

    if( x !== 0){
        result = x + y;
    }
    z.textContent = result;
    return result;

  }




function calcButton(){
// Get the values from the input fields and parse them to float

// S-axis
const s1calc = parseInt(document.getElementById('s1').value);
const s2calc = parseInt(document.getElementById('s2').value);
// Get the output element where the result will be displayed
const sout = document.getElementById('data1');

// L-AXIS
const l1calc = parseInt(document.getElementById('l1').value);
const l2calc = parseInt(document.getElementById('l2').value);
// Get the output element where the result will be displayed
const lout = document.getElementById('data2');


// U-AXIS
const u1calc = parseInt(document.getElementById('u1').value);
const u2calc = parseInt(document.getElementById('u2').value);
// Get the output element where the result will be displayed
const uout = document.getElementById('data3');

// R-AXIS
const r1calc = parseInt(document.getElementById('r1').value);
const r2calc = parseInt(document.getElementById('r2').value);
// Get the output element where the result will be displayed
const rout = document.getElementById('data4');

// B-AXIS
const b1calc = parseInt(document.getElementById('b1').value);
const b2calc = parseInt(document.getElementById('b2').value);
// Get the output element where the result will be displayed
const bout = document.getElementById('data5');

// T-AXIS
const t1calc = parseInt(document.getElementById('t1').value);
const t2calc = parseInt(document.getElementById('t2').value);
// Get the output element where the result will be displayed
const tout = document.getElementById('data6');





calc(s1calc, s2calc, sout);
calc(l1calc, l2calc, lout);
calc(u1calc, u2calc, uout);
calc(r1calc, r2calc, rout);
calc(b1calc, b2calc, bout);
calc(t1calc, t2calc, tout);


}


function buttonClick(){
// ABSOLUTE AXIS

const one = parseInt(document.getElementById('data1').textContent);
const two = parseInt(document.getElementById('data2').textContent);
const three = parseInt(document.getElementById('data3').textContent);
const four = parseInt(document.getElementById('data4').textContent);
const five = parseInt(document.getElementById('data5').textContent);
const six = parseInt(document.getElementById('data6').textContent);


const Sdat = parseInt(document.getElementById('s').value);
const Ldat = parseInt(document.getElementById('l').value);
const Udat = parseInt(document.getElementById('u').value);
const Rdat = parseInt(document.getElementById('r').value);
const Bdat = parseInt(document.getElementById('b').value);
const Tdat = parseInt(document.getElementById('t').value);

const finalS = document.getElementById('sum1');
const finalL = document.getElementById('sum2');
const finalU = document.getElementById('sum3');
const finalR = document.getElementById('sum4');
const finalB = document.getElementById('sum5');
const finalT = document.getElementById('sum6');

sum(Sdat, one, finalS);
sum(Ldat, two, finalL);
sum(Udat, three, finalU);
sum(Rdat, four, finalR);
sum(Bdat, five, finalB);
sum(Tdat, six, finalT);
}




document.getElementById('calculateBtn').addEventListener('click', function() {
calcButton();
buttonClick();
});