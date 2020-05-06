import React, { useState} from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards = {flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 3?',
    answer: '5',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },

  {
    id: 2,
    question: 'What is 3 + 3?',
    answer: '6',
    options: [
      '2',
      '3',
      '4',
      '6'
    ]
  }
]

export default App;
