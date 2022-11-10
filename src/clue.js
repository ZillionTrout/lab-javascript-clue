// // ITERATION 1

// // Suspects Array

const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'http://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
};
const drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',

};
const profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'design',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple',
};
const missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red',

};
const mrsPeacock = {
    firstName: 'Elanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue',
};
const mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow',
};

const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard]

// Rooms Array

const diningRoom = {name: 'Dining Room'};
const conservatory ={name: 'Conservatory'};
const kitchen ={name: 'Kitchen'};
const study ={name: 'Study'};
const library ={name: 'Library'};
const billiardRoom = {name: 'Billiard Room'};
const lounge = {name: 'Lounge'};
const ballRoom = {name: 'Ballroom'};
const hall = {name: 'Hall'};
const spa = {name: 'Spa'};
const livingRoom = {name: 'Living Room'};
const observatory = {name: 'Observatory'};
const theater = {name: 'Theater'};
const guestHouse = {name: 'Guest House'};
const patio = {name: 'Patio'};

const roomsArray = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

// Weapons Array

const rope = {name: 'rope', weight: 10};
const knife = {name: 'knife', weight: 8};
const candlestick = {name: 'candlestick', weight: 2};
const dumbbell = {name: 'dumbbell', weight: 30};
const poison = {name: 'poison', weight: 2};
const axe = {name: 'axe', weight: 15};
const bat = {name: 'bat', weight: 13};
const trophy = {name: 'trophy', weight: 25};
const pistol = {name: 'pistol', weight: 20};

const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


// // ITERATION 2

function selectRandom(myArray) {    
     const randomElement = myArray[(Math.random() *myArray.lenght) | 0 ];
    return randomElement; 
    }
//Falta "should return a random element of the array"

function pickMystery() {
    const mystery = {
    suspect : selectRandom(suspectsArray),
    weapon : selectRandom(weaponsArray),
    room : selectRandom(roomsArray),
    };
    return mystery;
};

// ITERATION 3

function revealMystery(randomObj) {
    return `${randomObj.suspect.firstName} ${randomObj.suspect.LastName} killed Mr Boddy using the ${randomObj.weapon.name} in the ${randomObj.room.name}!`
};
//falta "should return "<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!""
