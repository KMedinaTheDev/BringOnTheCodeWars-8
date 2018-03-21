

function accum(s) {
//use the toLowerCase method on the string being passed in
// then split the string into an array of strings

	let letters = s.toLowerCase().split('')
// 	console.log(letters)
// iterate through the string
  for(let i = 0; i < letters.length; i++) {
// while iterating add an upperCase version of the string value
// then add the letter itself as many times as the index position of that letter using the repeat method
// with the index position as the amount of times the letter will be copied
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
//     console.log(letters[i])
  }
//   then join the strings with a dash inbetween each element in the array of strings
  return letters.join('-')
}
