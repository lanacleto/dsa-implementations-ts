# TypeScript Algorithm Studies

A collection of algorithm and data structure implementations using TypeScript, created for learning and practice purposes.

## 🌱 Motivation

The main goal of this repository is to deepen my understanding of fundamental algorithms and data structures, improve my problem-solving skills, and maintain an organized record of my learning progress.

## 📂 Repository Structure

This repository is organized by algorithm. Each algorithm resides in its own directory, named descriptively (e.g., `binary-search`). Inside each directory, you will typically find:

* `index.ts`: The TypeScript implementation of the specific algorithm.
* `README.md`: A dedicated file explaining the algorithm, its time and space complexity (Big O notation), usage examples, or personal notes.

## ✨ Technologies Used

* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
* ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 🚀 How to Run the Code

To run any of the algorithm implementations locally, you'll need [Node.js](https://nodejs.org/) installed on your machine (which includes npm).

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/lanacleto/](https://github.com/lanacleto/)[repository-name].git
    cd [repository-name]
    ```

2.  **Set up the Environment:**
    * If you haven't already, initialize npm for the project (this creates a `package.json` file):
        ```bash
        npm init -y
        ```
    * Install TypeScript and `ts-node` (which allows running TS files directly) as development dependencies:
        ```bash
        npm install --save-dev typescript @types/node ts-node
        ```
    * (Recommended) Generate a TypeScript configuration file (`tsconfig.json`):
        ```bash
        npx tsc --init
        ```
        *You can customize the `tsconfig.json` later if needed.*

3.  **Execute an Algorithm:**
    Use `ts-node` (via `npx` to ensure you're using the locally installed version) to run the desired TypeScript file:
    ```bash
    npx ts-node path/to/the/algorithm/index.ts
    ```
    For example, to run the Binary Search implementation:
    ```bash
    npx ts-node binary-search/index.ts
    ```
    *(Make sure the `index.ts` file actually produces some output, like using `console.log()`, for you to see results in the terminal.)*

## 📚 Algorithms Implemented

Here is a list of algorithms currently available in this repository:

* [Binary Search](./binary-search/)
* *(More algorithms will be added here as I implement them...)*

## 👨‍💻 Author

* **Luiz Anacleto**
    * GitHub: [@lanacleto](https://github.com/lanacleto)

## 📄 License

This project is currently unlicensed.
