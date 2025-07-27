# Autonomous AI Agent for Algorithmic Discovery: A Case Study

![ Where your words find their rhythm.](.github/assets/LyricalLabGithubBanner2.png 'Where your words find their rhythm.')

### **Project Summary**

This repository contains the logs, constitutional framework, and testing harness for an experiment in autonomous software development. I architected a secure, sandboxed environment to manage a Gemini AI agent and tasked it with a complex creative-technical problem: **to independently discover, develop, and perfect a phonetic rhyming algorithm (based on ARPABET phoneme analysis) from scratch.**

Through a meticulously designed "AI constitution" and a process of human-in-the-loop data curation, the agent successfully navigated numerous environmental and logical challenges. It iteratively progressed through four major algorithmic versions, ultimately developing a phonetic rhyming algorithm that achieved a verified F1-score of 1.0 on a custom benchmark. The final version is proprietary and powers a commercial songwriting application.

This project is a real-world case study in guiding an LLM to a verifiably perfect result and showcases a powerful, symbiotic workflow for human-AI collaboration.

---

### Key Skills Demonstrated

*   **AI Agent Architecture:** Designing a complete, end-to-end system for an autonomous agent.
*   **Prompt Engineering & Constitutional AI:** Authoring a detailed `gemini.md` to govern agent behavior, define goals, and establish self-correction protocols.
*   **Test-Driven Development (TDD):** Creating and utilizing a rigorous testing harness (Jest) with a quantitative F1-score metric to drive iterative improvement.
*   **Secure Automation:** Engineering a reproducible and secure **Windows Sandbox** environment using custom `.wsb` configurations and **PowerShell** scripting.
*   **Full-Stack Development:** **TypeScript**, **Node.js**, JSON data manipulation.
*   **Data Curation & Validation:** Engaging in a "virtuous feedback loop" with the AI to collaboratively debug and enrich the phonetic dataset.
*   **Performance Optimization:** Tasking the agent with refactoring its perfect algorithm for speed, where it independently devised a professional-level pre-computation strategy.
*   **Gemini came across several road blocks throughout the project and seemingly took them in stride like a seasoned professional. Didn't seem to have any issues troubleshooting problems. 

---

## The Experiment: Process & Findings

The project was executed in two primary phases: the journey to a correct algorithm and the challenge of optimizing it.

### Phase 1: The Journey to a 1.0 F1-Score

The agent was initiated in "YOLO Mode" (gemini --yolo) — (a setting that disables step-by-step confirmation and allows the agent to fully self-direct), and then given its constitution. Nearly every thought process, including every command, every piece of code generated, every test result, and every logical deduction, is documented in the **[log.md](log.md)** file. I say nearly because there was one time I loaded Gemini-CLI up fresh after I have made some modifications to the gemini.md file, and something weird was going on. Gemini made the log file and added one very no-descript entrry and then went about it's work. Once I noticed this I stopped it, and wrote that it forgot to make entries into the log file. It apologized and said it would edit the file immediately. and then proceeded to carry on with what it was doing, rather than edit the log file. Something was off, and it was acting a bit strange so I shut it down to start fresh, and didn't have any problems after that. 

#### Key Milestones:

1.  **Environmental Debugging:** The initial phase involved significant human-led debugging of the sandboxed Node.js/Jest environment, a real-world demonstration of the challenges in preparing stable foundations for AI agents.
2.  **Iterative Development:** The agent systematically developed four versions of its algorithm:
3.  **V1:** A baseline phonetic match that achieved a **0.71 F1-Score**. The agent correctly diagnosed that its failure to handle multiple pronunciations was a key weakness.
4.  **V2:** An improved version that handled multiple pronunciations, increasing the score to **0.72**. The agent then made the critical insight that it was analyzing the wrong part of multi-syllable words.
5.  **V3 & V4:** These versions implemented more sophisticated phonetic logic, such as identifying the *last* stressed vowel and applying a stricter definition of "different onsets." 

#### The "Virtuous Loop": AI-Assisted Data Curation

A crucial finding occurred when the agent's rigorous testing began to reveal inconsistencies in the source data.
*   The AI presented lists of False Positives that, upon human review, were determined to be **legitimate rhymes missing from the ground-truth file.**
*   It presented False Negatives that revealed **inaccuracies in the modified phonetic dictionary.**

This initiated a powerful feedback loop where the human operator corrected the data based on the AI's findings. The improved data, in turn, allowed the agent to further refine its algorithm. **The AI didn't just consume the data; it actively helped improve it.**

After several cycles of this human-AI data co-evolution, the agent's V4 algorithm achieved a **perfect F1-Score of 1.0**.

### Phase 2: The Optimization Challenge

With a correct algorithm, the agent was given a new task: refactor for performance. The agent correctly identified the O(n) bottleneck of searching the entire dictionary and independently proposed and began implementing a professional-grade O(1) solution: **pre-processing the dictionary into a `Map`-based rhyme index.** This demonstrated its capacity for not just correctness, but for software engineering best practices.

## Repository Contents

*   **`/.gemini/gemini.md`:** The full AI Constitution that guided the agent.
*   **`/log.md`:** Logs minus the algorithms.  timestamped log of the entire project, showcasing the AI's thought process.
*   **`/plan.md`:** The AI's own strategic plan for tackling the problem.
*   **`/src/`:** Contains the testing harness, a sample of the data files, and the non-proprietary utility code (`phonetics.ts`) generated by the AI.
*   **`rhyme-algorithm-v4.ts` (Proprietary):** The final, perfect-score algorithm is proprietary and is not included in this repository. Its function is described in this README.
*   **WARNING** ⚠️ This repo is for educational/demo purposes. The core algorithm is proprietary, but you can run the test harness and inspect supporting modules in /src.

---  

Here is the file structure. I left ouut the Rhyme-algorithm files, and the phonetics flle. I also only added a sample of the data because it'a sort of large. 

Gemini-Testing
├── .gemini
│   ├── gemini.md
│   └── settings.json
├── src
│   ├── algorithms
│   │   ├── near-rhyme-algorithm-v4-b-01.ts
│   │   ├── rhyme-algorithm-v1.ts
│   │   ├── rhyme-algorithm-v2.ts
│   │   ├── rhyme-algorithm-v3.ts
│   │   ├── rhyme-algorithm-v4-b.ts
│   │   ├── rhyme-algorithm-v4.ts
│   │   └── rhyme-algorithm.ts
│   ├── data
│   │   ├── 20250723_RhymeDicti.json
│   │   ├── NearRhymes.md
│   │   ├── TestPerfect_examples.txt
│   │   └── TestPerfect2.json
│   ├── tests
│   │   ├── near-rhyme-algorithm-v4-b-01.spec.ts
│   │   ├── rhyme-algorithm-v1.spec.ts
│   │   ├── rhyme-algorithm-v2.spec.ts
│   │   ├── rhyme-algorithm-v3.spec.ts
│   │   ├── rhyme-algorithm-v4-b.spec.ts
│   │   ├── rhyme-algorithm-v4.spec.ts
│   │   └── rhyme.spec.ts
│   └── utils
│       └── phonetics.ts
├── 20250723_log.md
├── 20250723plan.md
├── FalseNeg.json
├── FalsePos.json
├── jest.config.js
├── package-lock.json
├── package.json
└── tsconfig.json