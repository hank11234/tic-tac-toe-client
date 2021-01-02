#Tic-Tac-Toe

This is a website that allows two people to play a game of tic-tac-toe. 

## Links

- [Deployed Site](https://hank11234.github.io/tic-tac-toe-client/)

## Planning and Development

I started out by referencing my wireframe and deciding how I wanted to set up my game board. I made cURL scripts to ensure my code was working properly and got to work structuring my HTML for the page. I then created the sign-up form and placed that along with the sing in form in a pre-login class at the top of the page. After those were placed I set up the API calls for both of them and made sure they were functional. I then added a change password and sign-out in a similar way to my post-login class so these would appear at the bottom of the screen. Once all the authentication functions were finished I got to work on setting up the game board which I did by assigning each box to a button that had a bootstrap class of col-4 to enable them to wrap properly and take up an equal width. Then I set up a .text() that would give each of the buttons an x when clicked on. I also at this time added the finished game data to the stored game. I then started to set up a constant for keeping track of whose turn it is currently in the game and a function for switching sides at the end of each turn. I also set up a text box at the top of the game board to display the current turn, who wins, tie games, etc. The last thing I did in terms of the game logic was add the win/draw condition which ended up being a very long ugly if/else. In doing this I also made it so that if the selected button wasn't blank it wouldn't allow the space to be selected. I also added in a button to list the number of games this signed in user has played. Finally, I added in CSS stylings to make the game nicer looking and more friendly to play.

### User Stories

- As a user I want to be able to sign in and out easily so that I can keep my wins connected to me personally. 
- As a user I want the game to be exactly like what I'm used to so I know how to play already. 
- As a user I want the game to tell me who wins, so that I don't have to figure it out myself. 
- As a user I want the game to keep track of my wins for me so that I can just keep playing. 
- As a user I want the game to be quick and responsive to my actions so that I'm not bored by it.

### Technologies used
- jQuery
- Javascript
- HTML
- CSS/SASS
- Bootstrap

### Unsolved Problems

- I would like to continue to add styling to the site to liven it up further, I find my initial vision to be very bare. 
- I am also still running into an issue where the stored game board is opposite the played board, such that X is stored O and vice versa, and I have yet to figure out how to solve this.

### Images

#### Wireframe:
![wireframe](https://imgur.com/a/rFMPPmk)