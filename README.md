# Pokémon Memory Card Game 🎮

A memory card game built with React as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Live Demo:
[Play the Game](https://link)

## How to Play

- Click on a Pokémon card — but don't click the same one twice!
- Each correct click shuffles the cards and increases your score
- Click every card once without repeating to win
- On win or loss, a new set of Pokémon is fetched automatically
- Try to beat your best score!

## Features

- 12 randomly selected Pokémon fetched from [PokéAPI](https://pokeapi.co/) on each game
- Cards shuffle after every click
- Score tracking with persistent best score
- Win / Game Over modals
- Spinning Pokéball loading screen
- Responsive layout for desktop, tablet, and mobile

## Built With

- [React](https://react.dev/) — UI and state management
- [Vite](https://vitejs.dev/) — build tool
- [PokéAPI](https://pokeapi.co/) — Pokémon data and images
- CSS — custom styling with Google Fonts (Press Start 2P + Nunito)

## Concepts Practiced

- `useState` for game state (score, clicked cards, modal)
- `useEffect` for API fetching on mount and re-fetching on game reset
- Props and component composition
- Conditional rendering
- Array shuffling and game logic

## Getting Started
```bash
git clone https://github.com/xsupremeyx/odin-MemoryCard
cd odin-MemoryCard
npm install
npm run dev
```

## Project Structure
```
src/
├── components/
│   ├── Card.jsx
│   ├── GameBoard.jsx
│   ├── Modal.jsx
│   └── Scoreboard.jsx
├── styles/
│   ├── App.css
│   └── index.css
├── App.jsx
└── main.jsx
```

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for the project brief
- [PokéAPI](https://pokeapi.co/) for the free, open Pokémon API
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) and [Nunito](https://fonts.google.com/specimen/Nunito) fonts from Google Fonts
- [React documentation](https://react.dev/) for guidance on hooks and component design
- [Vite documentation](https://vitejs.dev/) for build setup and configuration