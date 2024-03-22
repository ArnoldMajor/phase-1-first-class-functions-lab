const returnFirstTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers = [drivers[0],drivers[1]];
}

const returnLastTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers = [drivers[2], drivers[3]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
    return function(fare){
        return fare * value
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let drivers;

function selectDifferentDrivers (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'], selectingDrivers){
    if (selectingDrivers === returnFirstTwoDrivers){
        return drivers = [drivers[0],drivers[1]];
    }

    else if (selectingDrivers === returnLastTwoDrivers){
        return drivers = [drivers[2],drivers[3]];
    }
}

console.log (selectDifferentDrivers(drivers, returnLastTwoDrivers))