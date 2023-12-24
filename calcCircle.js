function getCircleLength(radius) {
    if (radius !== null && typeof radius === 'number') {            
        return 2 * Math.PI * radius; 
    } else {
        throw new Error('the function require 1 numeric argument');
    }
}

function getCircleArea(radius) {
    if (radius !== null && typeof radius === 'number') {    
        return Math.PI * radius ** 2;
    } else {
        throw new Error('the function require 1 numeric argument');
    }
}

module.exports = {getCircleLength, getCircleArea};
