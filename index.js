// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    const newDrivers = drivers.slice(0, 2);
    return newDrivers;
}

const returnLastTwoDrivers = function (drivers) {
    const newDrivers = drivers.slice(2, 4);
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => function () {
    return multiplier * multiplier
}

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

const selectDifferentDrivers = (arrayOfDrivers, functionSelector) => functionSelector(arrayOfDrivers);