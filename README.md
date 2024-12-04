# pig-game
Simple application for playing the game Pig

# How to Install
`git clone [URL]`

`npm i` to install dependencies

`npm start` 

Navigate to http://localhost:3000/ if it doesn't open automatically 

# How to Play
- Enter your names at the beginning. Recommended 2 or more players. 
- Choose to either roll the dice when it's your turn, or hold (if available).
- The 'current player' panel will alternate colors to indicate when it's the next person's turn. 

# Game Requirements
- Start new game
- Must support at least 2 players 
- Store and update state
- Validate moves on state
- End game when end conditions are met 

# Pig [Rules](https://en.wikipedia.org/wiki/Pig_(dice_game))
- Each player rolls two 6-sided dice

-- if both dice are 1's (snake eyes), their total score goes to 0 and it goes on to the next player

-- elif one die is a 1, add nothing to their total score (regardless of their turn score) and move on to the next player

-- elif there are any matching numbers that aren't 1, the sum is added to the turn total (as usual) but the player MUST roll again and doesn't have the option to hold 

-- else (if neither dice show a 1), the sum of both dice are added to the turn total, and the player's turn continues unless they choose to hold

--- if a player choose to hold, then their turn ends and their turn score gets added to their total score

- if either player reaches >= 100 points, they win and the game ends

# Next Steps
- Add dice images by creating a list of image URLs for the image path for each side of the dice, and depending on the dice value in the Dice Component, render a different image path for each value
- Deploy online 
- Create an express app so that win count can be stored in a database

-----

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
