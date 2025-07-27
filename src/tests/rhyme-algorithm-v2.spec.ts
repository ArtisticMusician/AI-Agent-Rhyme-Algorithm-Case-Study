// src/tests/rhyme-algorithm-v2.spec.ts

import { isPerfectRhymeV2 } from '../algorithms/rhyme-algorithm-v2';
import testPerfectRhymes from '../data/TestPerfect.json';
import dictionary from '../data/dictionary.json';

describe('Perfect Rhyme Algorithm V2 Evaluation', () => {
  const targetWord = 'test';
  const allPerfectRhymes: string[] = [];
  for (const key in testPerfectRhymes) {
    allPerfectRhymes.push(...testPerfectRhymes[key as keyof typeof testPerfectRhymes]);
  }
  // Filter out the target word itself from the ground truth, as a word cannot rhyme with itself by definition (different onsets)
  const filteredPerfectRhymes = allPerfectRhymes.filter(word => word.toLowerCase() !== targetWord.toLowerCase());

  it('should evaluate the F1-Score for Algorithm V2', () => {
    let truePositives = 0;
    let falsePositives = 0;
    let falseNegatives = 0;

    const foundRhymes: string[] = [];
    const actualFalsePositives: string[] = [];
    const actualFalseNegatives: string[] = [];

    // Iterate through all words in the dictionary to find potential rhymes
    for (const word in dictionary) {
      if (word.toLowerCase() === targetWord.toLowerCase()) continue; // Skip comparing word to itself

      if (isPerfectRhymeV2(targetWord, word)) {
        foundRhymes.push(word.toLowerCase());
      }
    }

    // Calculate True Positives and False Positives
    for (const foundRhyme of foundRhymes) {
      if (filteredPerfectRhymes.includes(foundRhyme)) {
        truePositives++;
      } else {
        falsePositives++;
        actualFalsePositives.push(`${foundRhyme} (${(dictionary as Record<string, string>)[foundRhyme.toUpperCase()]})`);
      }
    }

    // Calculate False Negatives
    for (const perfectRhyme of filteredPerfectRhymes) {
      if (!foundRhymes.includes(perfectRhyme)) {
        falseNegatives++;
        actualFalseNegatives.push(`${perfectRhyme} (${(dictionary as Record<string, string>)[perfectRhyme.toUpperCase()]})`);
      }
    }

    const precision = truePositives === 0 ? 0 : truePositives / (truePositives + falsePositives);
    const recall = truePositives === 0 ? 0 : truePositives / (truePositives + falseNegatives);
    const f1Score = (precision + recall) === 0 ? 0 : 2 * (precision * recall) / (precision + recall);

    console.log(`\n--- Algorithm V2 Results for "${targetWord}" ---`);
    console.log(`True Positives (TP): ${truePositives}`);
    console.log(`False Positives (FP): ${falsePositives}`);
    console.log(`False Negatives (FN): ${falseNegatives}`);
    console.log(`Precision: ${precision.toFixed(4)}`);
    console.log(`Recall: ${recall.toFixed(4)}`);
    console.log(`F1-Score: ${f1Score.toFixed(4)}`);
    console.log(`Actual False Positives: ${actualFalsePositives.join(', ')}`);
    console.log(`Actual False Negatives: ${actualFalseNegatives.join(', ')}`);
    console.log(`-------------------------------------------`);

    // Assert that the F1-score is logged (we are not asserting a specific score yet, just that it runs)
    expect(f1Score).toBeGreaterThanOrEqual(0);
  });
});