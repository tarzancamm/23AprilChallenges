// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.


const shortcut = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let string = ''

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])){
            string += str[i]
        }
    }
    return string
}


console.log(shortcut('how are you today?'))