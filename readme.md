# Project #1

## Memory Game

### User Stories

As a user, I should be able to decide how difficult I want the game to be by choosing how many tiles there are to be matched.

When building the board, the cards should be put in a different order upon each reset.

When squares are matched, they should stay revealed, but when they are not matched they should be re-hidden.  

The game should give me a score so that I can try to improve upon it.  

I should be able to start a new game without having to refresh the page.

### Approach Taken

Create an empty array called cards.  Push a number of value pairs into the cards array depending on the user’s input.  Shuffle the cards array.  Dynamically create a div with a unique id for each number in the array and edit the html to include the number.  Create an empty picked cards array and matched cards and guesses counters set to zero.  Add a click event listener function for each card.  

When a card is clicked, the background changes color to reveal what number is in it.  It also pushes into the pickedCards array an object containing the card’s number and its id.  If the pickedCards array already contains a card, the second picked card is compared with it.  If they match, the background continues to reveal the number, but if they don’t match, it changes to conceal the number after half a second.  

When cards are matched, it increments the matchedCards array, and when that array equals the number in the cards array, the html is changed to say “you win”  and display the efficiency rating (deckSize/guesses).  

The restart button resets all the html, sets all the arrays and counters back to zero, and then runs the initialize function again.  


### Unsolved Problems

If I were to work on it more, I would add a way to store people's scores and add them to a high scores board for each amount of cards.
