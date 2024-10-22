    var word = prompt('Enter any word')    
    var newWord = word.split('').reverse().join('')

    if(word == newWord){
        console.log(word +' is a palindrome');
    }
    else{
        console.log(word +' is not a palindrome');
    }
