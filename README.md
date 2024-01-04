# 🚀 SLS-Node-TS-Template

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**The production-ready boilerplate to develop serverless applications on AWS Lambda with Express.js in TypeScript.**

## 📦 Features

-   **Express.js Integration:** Build robust serverless APIs with the power of Express.js.
-   **TypeScript Support:** Enjoy the benefits of static typing and modern JavaScript features.
-   **Serverless Framework:** Utilize the Serverless Framework for seamless deployment and management of AWS Lambda functions.
-   **ESLint and Prettier:** Maintain code quality and consistency with ESLint and Prettier configurations.
-   **Jest Testing:** Write and run tests with Jest to ensure the reliability of your serverless functions.
-   **Serverless Plugins:** Leverage useful Serverless plugins like `serverless-dotenv-plugin`, `serverless-esbuild`, `serverless-lift`, and `serverless-offline`.
-   **Deployment-ready:** A template ready for production deployment on AWS Lambda.

## 🛠️ Prerequisites

-   Node.js (v18.19.0 recommended)
-   npm or yarn
-   volta (node and package manager, recommended)
-   Serverless Framework (v3.38.0 or later)

## 🚦 Getting Started

1. **Clone the Repository:**

    ```bash
    git clone git@github.com:otlichnyy/sls-node-ts-template.git
    cd sls-node-ts-template
    ```

1. **Install Dependencies:**

    ```bash
    npm install
    ```

1. **Local Development:**

    ```bash
    npx sls offline
    ```

1. **Testing:**

    ```bash
    npm t
    ```

1. **Linting and Formatting:**
    ```bash
    npm run lint
    ```
1. **Deploy:**
    ```bash
    npx sls deploy
    ```

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.
