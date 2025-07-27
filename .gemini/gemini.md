# CORE DIRECTIVE

Your mission is to engineer the best possible "Perfect Rhyme" algorithm in Node.js/TypeScript. Your ultimate goal is to produce a final, well-documented, and modular algorithm that is ready for integration into a production application.

# GUIDING PRINCIPLES

0.  If this is not your first time working on this problem, you will have already created `plan.md`, `log.md`, and other files. Be sure to read these to see what you have already created and tried, what has worked, and what has not.

1.  **Systematic Exploration:** Do not settle on your first idea. You must develop at least three (more than three is better) distinct algorithms based on different logical approaches for what constitutes a "Perfect rhyme".
    *   **Perfect Rhyme Definition:** two words share identical stressed vowel sounds, identical sounds following the stressed vowel, different onsets (the consonant sounds before the stressed vowel are different) - In phonetic terms, if two words have the same rhyme nucleus and coda (everything from the stressed vowel onward), but different onsets, they qualify as perfect rhymes.

2.  **Planning First:** Before writing any code, create a `plan.md` file. (If there is already a `plan.md` file, do not overwrite its contents. Rather, append the new contents.)
    *   Outline your strategy, the different algorithms you will try, and how you will test them.
    *   For each step in your `plan.md` file, estimate how long it will take to complete and document this estimate.
    *   Update this plan as you learn by adding to the file. Never delete from the file.
    *   Keep date and time records each time you add a new entry.

3.  **Ground Truth Testing:** The file at `src/data/TestPerfect.json` contains the ideal rhyming results for the word "test". This is your primary benchmark for success.

4.  **Incremental Development:** Work in small, testable steps. For each algorithm, create the core logic (then add this to the log.md file with timestamps) , then create a test for it (then add this to the log.md file with timestamps), then validate the results (then add this to the log.md file with timestamps) before moving on.

5.  **Document Everything:** Maintain a detailed, timestamped `log.md` file to document your thought process, experiments, test results, and decisions. Explain *why* you chose one algorithm over another.

6.  **DOCUMENTATION IS CRITICAL:** The `log.md` file is almost as important as the code itself. You must document your steps in detail, including timestamps, your reasoning, and your future plans.

# CONSTRAINTS & BOUNDARIES

1.  **Directory Lock:** You are strictly forbidden from writing files or executing processes outside of the `C:\Users\WDAGUtilityAccount\Desktop\Sandbox-Host\Gemini-Testing` directory.

2.  **Primary Data Source:** All phonetic analysis must be based *only* on the provided dictionary at `src/data/dictionary.json`. Do not use external APIs.

3.  **Dependencies:** You have permission to install any necessary Node.js libraries using `npm`. Python 3.11 and Git are also installed.

4.  **Strict Rate Limiting:** You must strictly adhere to the API rate limit of 10 requests per minute. To ensure compliance, after every single generative action or tool call, you **must execute a `sleep 5` command** in the terminal. This is a non-negotiable directive.

# CODE QUALITY STANDARDS

1.  **Modularity:** All code must be organized into logical, reusable modules. Avoid monolithic scripts.
2.  **Clarity:** Code must be well-commented. Explain the "why" behind complex logic. Use meaningful variable and function names.
3.  **Testability:** Your final solution must include a separate test suite that allows for easy verification of the algorithm's correctness.

# SELF-CORRECTION & TROUBLESHOOTING

1.  **If an Algorithm Fails:** If an algorithm performs poorly against the `TestPerfect.json` ground truth, do not discard it immediately. In your `log.md`, analyze *why* it failed. Can it be modified, or is the core logic flawed?
2.  **If You Are Stuck:** If you encounter a persistent error or are unsure how to proceed, perform the following steps in order:
    a. Re-read these rules and your `plan.md`.
    b. Analyze your `log.md` to retrace your steps.
    c. Break the problem down into a smaller piece. Can you write a script to just parse the dictionary? Can you test just one word pair?
    d. Formulate a new hypothesis for a path forward and document it in your log before proceeding.
=======================================================================================================================================================================

# EVALUATING TEST RESULTS: SCORING, NOT FAILING

This is a fundamental shift in perspective. Your primary goal is not to simply achieve a binary "pass," but to **quantify the performance of each algorithm** and incrementally improve its score. An algorithm that produces an imperfect but measurable result has not failed; it has successfully provided data for its own improvement.

### Test Outcome Categories

There are only two main categories of test outcomes.

**1. Execution Failure (High-Priority Bug)**
This is the only true "failure." It means the code itself is broken and cannot produce a result.
*   **Condition:** The test script crashes, throws an unhandled exception, or exits with a non-zero error code.
*   **Action:** This must be fixed immediately. Analyze the error message and stack trace, fix the underlying bug, and ensure the script can run to completion before proceeding with scoring.

**2. Scored Pass (The Standard Outcome)**
This is the expected outcome for most of your algorithm versions. The script runs successfully and produces a list of rhymes. This result is not judged as a simple "pass" or "fail," but is scored for accuracy against the `TestPerfect.json` ground truth.
*   **Action:** For every algorithm that completes a run, you must calculate and log the following metrics:
    *   **True Positives (TP):** The number of rhymes your algorithm found that are **correctly** present in `TestPerfect.json`.
    *   **False Positives (FP):** The number of rhymes your algorithm found that are **incorrectly** absent from `TestPerfect.json`.
    *   **False Negatives (FN):** The number of rhymes that were in `TestPerfect.json` but your algorithm **missed**.

### The Goal: Maximize the F1-Score

You will use these metrics to calculate a single score that represents the algorithm's quality. This is the **F1-Score**.

*   **Precision** = TP / (TP + FP)
    *   *This measures how clean your results are. A high precision means you have very few incorrect rhymes (low FP).*
*   **Recall** = TP / (TP + FN)
    *   *This measures how complete your results are. A high recall means you found most of the correct rhymes (low FN).*
*   **F1-Score = 2 * (Precision * Recall) / (Precision + Recall)**
    *   *This is the harmonic mean of Precision and Recall. It is your single most important metric for comparing one algorithm against another.*

### The Iterative Loop

Your development process should follow this loop:
1.  Develop an algorithm (e.g., `rhyme_algo_v1`).
2.  Run the test and calculate its F1-Score. Log the score, TP, FP, and FN.
3.  Analyze the False Positives and False Negatives to understand the algorithm's specific weaknesses.
4.  Develop a new, improved version (`rhyme_algo_v2`) based on your analysis.
5.  Run the test on `v2` and calculate its F1-Score.
6.  **Compare the scores.** If the F1-Score of `v2` is higher than `v1`, it is objectively better. The algorithm with the highest F1-Score is considered the current "best" solution.

Your ultimate goal is an algorithm that achieves a "Perfect Pass": an F1-Score of 1.0 (meaning zero False Positives and zero False Negatives).