// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard1() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ]
  const valIdx = Math.floor(Math.random() * values.length)
  const value = values[valIdx]

  const suits = ['clubs', 'spades', 'hearts', 'diamonds']
  const suitIdx = Math.floor(Math.random() * suits.length)
  const suit = suits[suitIdx]
  return { value: value, suit: suit }
}

function pick(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

function getCard2() {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ]
  const suits = ['clubs', 'spades', 'hearts', 'diamonds']
  return { value: pick(values), suit: pick(suits) }
}

let { suit, value } = getCard1()
let { suit: suit2, value: value2 } = getCard2()
alert(`card: ${suit} of ${value}`)
alert(`card: ${suit2} of ${value2}`)
