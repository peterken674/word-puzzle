function replaceVowels(str) {
    let newString = '';
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //Vowels array.

    for (let i = 0; i < vowels.length; i++) {
        newString = str.split(vowels[i]).join("-"); //Trick to use instead of replace(), since replace() uses regex.
        str = newString; //Pass the new string as the string to be operated on by split() and join().
    }
    document.write(newString);
}
let str = "Believe you can and you're halfway there. Robert Mugabe";
replaceVowels(str);