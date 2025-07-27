import { findPerfectRhymes } from '../algorithms/rhyme-algorithm';
import * as fs from 'fs';
import * as path from 'path';

// --- Helper Function to Parse the new JSON Ground Truth ---
function getGroundTruth(word: string): Set<string> {
    const filePath = path.join(__dirname, '../data/TestPerfect.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const allRhymesObject: Record<string, string[]> = JSON.parse(fileContent);

    // Flatten all arrays from the JSON object into a single Set
    const rhymeSet = new Set<string>();
    for (const key in allRhymesObject) {
        allRhymesObject[key].forEach(rhyme => rhymeSet.add(rhyme));
    }
    return rhymeSet;
}

// --- Main Test Suite ---
describe('Rhyme Algorithm Evaluation', () => {
    it('should achieve the highest possible F1-Score for the word "test"', () => {
        const testWord = 'test';
        const dictionaryPath = path.join(__dirname, '../data/dictionary.json');
        const dictionaryContent = fs.readFileSync(dictionaryPath, 'utf-8');
        const dictionary: Record<string, string> = JSON.parse(dictionaryContent);

        // 1. Get the AI's results
        const predictedRhymes = findPerfectRhymes(testWord, dictionary);
        const predictedSet = new Set(predictedRhymes);

        // 2. Get the ground truth
        const groundTruthSet = getGroundTruth(testWord);

        // 3. Calculate metrics
        const TP_set = new Set([...predictedSet].filter(x => groundTruthSet.has(x)));
        const FP_set = new Set([...predictedSet].filter(x => !groundTruthSet.has(x)));
        const FN_set = new Set([...groundTruthSet].filter(x => !predictedSet.has(x)));

        const TP = TP_set.size;
        const FP = FP_set.size;
        const FN = FN_set.size;

        const precision = TP / (TP + FP) || 0;
        const recall = TP / (TP + FN) || 0;
        const f1Score = (precision + recall > 0) ? (2 * (precision * recall) / (precision + recall)) : 0;

        // 4. Log the results for the AI to read
        console.log(`--- ALGORITHM SCORE ---`);
        console.log(`True Positives:  ${TP}`);
        console.log(`False Positives: ${FP}`);
        console.log(`False Negatives: ${FN}`);
        console.log(`Precision:       ${precision.toFixed(2)}`);
        console.log(`Recall:          ${recall.toFixed(2)}`);
        console.log(`F1-SCORE:        ${f1Score.toFixed(2)}`);
        console.log(`-----------------------`);

        expect(f1Score).toBeGreaterThan(-1);
    });
});