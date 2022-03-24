// IMPORT MODULES under test here:
import { 
    findByName,
    makeArrayOfNames,
    makeReversedArrayOfTypes,
    makeSpanishLanguageArray,
    makeArrayWithIsHungry,
    makeShoutingArray,
    makeStringArray,
    makeArrayOfArraysOfArrays,
    getDogs,
    getNamesOfDogs,
    getCars,
    getChevyCars,
    makeModelsStringWithReduce,
    getSumOfAges,
    makeCountObject,
    makeKeysString,
} from '../functions.js';

const { test, skip } = QUnit;

const pets = [
    { type: 'cat', name: 'coco' },
    { type: 'frog', name: 'jumper' }
];

const otherPets = [
    { name: 'scooter', type: 'dog' },
    { name: 'sassy', type: 'dog' },
    { name: 'legzo', type: 'frog' },
    { name: 'fluff', type: 'squirrel' },
];


test('should return dogs', (expect) => {
    const expected = [
        { name: 'scooter', type: 'dog' },
        { name: 'sassy', type: 'dog' },    
    ];

    const actual = getDogs([...otherPets]);

    expect.deepEqual(actual, expected);
});


skip('should make an array of names', (expect) => {
    const expected = ['coco', 'jumper'];
    const actual = makeArrayOfNames([...pets]);

    expect.deepEqual(actual, expected);
});

skip('should return dogs names', (expect) => {
    const expected = ['scooter', 'sassy'];
    
    const actual = getNamesOfDogs([...otherPets]);

    expect.deepEqual(actual, expected);
});

skip('should make a reverse array of type', (expect) => {
    const expected = ['frog', 'cat'];
    const actual = makeReversedArrayOfTypes([...pets]);

    expect.deepEqual(actual, expected);
});

skip('should make a spanish array of pet objects', (expect) => {
    const expected = [
        {
            nombre: 'coco',
            tipo: 'cat',
        },
        {
            nombre: 'jumper',
            tipo: 'frog',
        }
    ];
    const actual = makeSpanishLanguageArray(pets);

    expect.deepEqual(actual, expected);
});

skip('should return all objects with an added isHungry property equal to true', (expect) => { 
    const expected = [
        { name: 'scooter', isHungry: true, type: 'dog' },
        { name: 'sassy', isHungry: true, type: 'dog' },
        { name: 'legzo', isHungry: true, type: 'frog' },
        { name: 'fluff', isHungry: true, type: 'squirrel' },
    ];    
    const actual = makeArrayWithIsHungry([...otherPets]);

    expect.deepEqual(actual, expected);
});

skip('should return a shouting array', (expect) => {
    const expected = [
        { name: 'SCOOTER', type: 'dog' },
        { name: 'SASSY', type: 'dog' },
        { name: 'LEGZO', type: 'frog' },
        { name: 'FLUFF', type: 'squirrel' },
    ];    
    const actual = makeShoutingArray(otherPets);

    expect.deepEqual(actual, expected);
});

skip('should return a proper array of strings', (expect) => { 
    const expected = ['scooterdog', 'sassydog', 'legzofrog', 'fluffsquirrel'];
    const actual = makeStringArray([...otherPets]);

    expect.deepEqual(actual, expected);
});

skip('should return the animal with the matching name', (expect) => {
    const expected = { name: 'sassy', type: 'dog' };
    const actual = findByName('sassy', [...otherPets]);

    expect.deepEqual(actual, expected);
});

skip('should return a proper array of arrays', (expect) => {
    const expected = [
        [['name', 'scooter'], ['type', 'dog']], 
        [['name', 'sassy'], ['type', 'dog']], 
        [['name', 'legzo'], ['type', 'frog']], 
        [['name', 'fluff'], ['type', 'squirrel']]
    ];

    const actual = makeArrayOfArraysOfArrays([...otherPets]);

    expect.deepEqual(actual, expected);
});


const vehicles = [
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
];

skip('should return an array of cars', (expect) => {
    const expected = [
        { type: 'car', make: 'ford', model: 'taurus', age: 2 },
        { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
        { type: 'car', make: 'chevy', model: 'camero', age: 1 },
    ];

    const actual = getCars([...vehicles]);

    expect.deepEqual(actual, expected);
});


skip('should return an array of chevy cars', (expect) => {
    const expected = [
        { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
        { type: 'car', make: 'chevy', model: 'camero', age: 1 }
    ];

    const actual = getChevyCars([...vehicles]);

    expect.deepEqual(actual, expected);
});


skip('should return an models string', (expect) => {
    const expected = 'taurusmalibubroncosilveradoexpresscamero';

    const actual = makeModelsStringWithReduce([...vehicles]);

    expect.deepEqual(actual, expected);
});



skip('should return sum of ages', (expect) => {
    const expected = 14;

    const actual = getSumOfAges([...vehicles]);

    expect.deepEqual(actual, expected);
});


skip('should return an count object', (expect) => {
    const expected = {
        car: 3,
        truck: 2,
        van: 1
    };

    const actual = makeCountObject([...vehicles]);

    expect.deepEqual(actual, expected);
});

skip('should return an weird string of keys', (expect) => {


    const actual = makeKeysString([...vehicles]);

    expect.deepEqual(actual.includes('type'), true);
    expect.deepEqual(actual.includes('make'), true);
    expect.deepEqual(actual.includes('model'), true);
    expect.deepEqual(actual.includes('age'), true);

});
