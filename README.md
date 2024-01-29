# Project 1 Guidelines

## Overview
In this project we are creating a game with vanilla JavaScript, HTML, and CSS.
Check the requirements of the project in the student portal.

## Basic initialization
### 1. Create a new repository in GitHub
### 2. Clone the repository in your local machine
### 3. Create the 3 basic files: index.html, style.css, and index.js 
### 4. Create a folder for your assets (images, sounds, etc.)
### 5. Initialize the html file with the basic structure and link the css and js files
### 6. Create a new branch with the name of your first task (e.g. "create-game-board")

```bash
git checkout -b create-game-board
```
`-b` after checkout stands for "create a new branch", is the same as:

```bash
git branch create-game-board
git checkout create-game-board
```
Now you are in the new branch, you can start working on your task.

After you finish your task, you can commit your changes and push them to the remote repository:

```bash
git add .
git commit -m "add game board"
git push origin create-game-board
```
### 7. Create a pull request
If your branch is ready to be merged (the feature is working), you can create a pull request in GitHub.
- Go to your repository in GitHub, and click on the "Pull requests" tab, then click on the green button "New pull request".
- Select the branch you want to merge to the main branch (master) and click on "Create pull request".
- Add a title and a description to your pull request, and click on "Create pull request" again.
- To merge the pull request, click on "Merge pull request" and then on "Confirm merge".

Now your branch is merged. You can go back to your local repository and create a new branch for your next task.

### 8. Pull the changes from the remote repository
After you merge your pull request, you need to pull the changes to your local repository:

```bash
git checkout main
git pull origin main
```
Now your local repository is up to date with the remote repository.

### 9. Create a new branch for your next task
```bash
git checkout -b enemy-class
```

## Recomendations
- Commit your changes often, and push them to the remote repository.
- Create a pull request for each task.
- Create a general class for the game (Game class).
- Create a class for each object in your game (Player, Enemy, Reward, etc.).
- Don't focus on the design of the game, focus on the functionality. Once you have the game working, you can add styles to it.
- console.log() is your best friend. Use it to debug your code.

## Use of chatGPT or other AI tools / copy pasting
- The use of AI and other tools is permitted in this project. But copy pasting without understanding the code is penalized. If a part of the code seems to be out of the scope of the course, you will be asked to explain it.
- You can use the code that you find or the AI generates as a reference, but you need to understand it and write your own version.
- If you get stuck, you can ask for help in person with real humanoids 🤖