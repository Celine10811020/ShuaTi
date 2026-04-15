# Exam Review Practice Website

A browser-based practice website designed to help users review exam questions through random question generation and quick answer checking.

Built with **HTML, CSS, and JavaScript**, this project provides a lightweight way to repeatedly practice question banks before an exam.

## Live Demo

[Try the website](https://celine10811020.github.io/ShuaTi/)

## About the Project

This project is a simple web-based exam review tool created to help a student practice for tests more efficiently.

The system randomly generates **40 questions** from a question bank each round.  
Users enter their answers directly into input fields, and after submission, the site shows only the questions answered incorrectly together with the correct answers. This makes it easier to focus on mistakes rather than rereading everything.

## Features

- Random generation of **40 questions** per round
- Supports both **single-choice** and **multiple-choice** answer formats
- Users can type answers directly into input fields
- Incorrect answers are highlighted during review
- Correct answers are shown for error checking
- A new random set can be generated for repeated practice

## Answer Format

The project supports two answer styles:

- **Single choice**: enter one half-width number, such as `1`
- **Multiple choice**: enter half-width numbers separated by commas, such as `1,2,4`

The answer format must match the required form exactly.

## How It Works

1. Click **題目** to generate a random set of 40 questions
2. Enter answers in the text boxes next to each question
3. Click **答案** after finishing
4. Review only the incorrect questions and their correct answers
5. Click **題目** again to start a new random round

## Project Structure

```text
ShuaTi/
├── index.html      # Main page
├── main.js         # Question generation and answer-checking logic
├── questions.js    # Question bank data
├── style.css       # UI styling
└── image/          # Question images / supporting assets
