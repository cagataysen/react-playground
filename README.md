# React Components

In this repository, I am documenting the ReactJS components and features I am learning, along with providing supplementary information on fundamental concepts and basic usage of the React framework. This includes setup instructions and ES6 features. Additionally, I plan to incorporate more hooks and explore their usage. Please note that, as I do not have commercial experience with React as a frontend developer, this repository might contain some unconventional approaches or suboptimal practices.

# Setting Up

To set up a React Native app, open the terminal in VSCode and type the following command:

```bash
npm install -g create-react-app
```

This command installs the necessary dependencies globally.  
To create a new React project, navigate to the directory where you want to work, then run:

```bash
npx create-react-app project-name
```

For instance, if you want to name the project `intro`, simply replace `project-name` with `intro`. After the process completes, the project will be created in a folder called "intro". The final message will be “Happy Hacking!”

As shown in the output, navigate into your project directory and start the project with the following commands:

```bash
cd intro
```

```bash
npm start
```

These commands will enter your project folder and start the React project on Node.js. The project will run on `localhost:3000`.

If you close the project and later reopen it in VSCode, you will need to start the project again by typing:

```bash
npm start
```

---

## Alternative Setup with Vite (I am using this one)\*

If you prefer a faster and more optimized setup, you can use Vite instead of Create React App. Vite is a modern build tool that provides a much faster development experience.

To create a new React project using Vite, run the following commands:

```bash
npm create vite@latest
```

You’ll be prompted to choose a project name and a framework (select `React`). After that, navigate into your project and install dependencies:

```bash
cd project-name
npm install
npm run dev
```

This will start your project locally, and you can access it at `localhost:5173`.

---

## Component Structure:

To create a new component, first manually create a new `.js` file inside the `src` folder. Open the file and type `rcc`, then press enter. This shortcut will automatically generate a class-based component structure for you. Next, you need to import this component into your main file, `App.js`.

For example:

```jsx
import Navi from "./Navi";
```

Then, you can use this component in JSX format like so:

```jsx
<Navi />
```

The component should be automatically imported, but double-check to make sure it works.

To style components, you will need some CSS knowledge. If you’re not familiar with CSS, you can install Reactstrap, which provides pre-built Bootstrap components for React.

To install Reactstrap, run:

```bash
npm install reactstrap
```

You can also manually add dependencies to `package.json`, but using the above command automatically installs the latest version. The installed packages will be placed in the `node_modules` folder.

You’ll need to import Bootstrap’s CSS in your `index.js` file:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

This ensures that if a component style is not found in Reactstrap, we can use Bootstrap directly.

Additionally, you can install Bootstrap itself:

```bash
npm install bootstrap
```

We can use Bootstrap directly in case we face any styling challenges.

## Stopping and Restarting the Project:

To stop the running project, go to the terminal and press **Ctrl + C**. To restart it, simply type:

```bash
npm start
```

When writing new JS components, make sure to export them at the end. Otherwise, you may encounter import errors in `App.js`.

For example:

```jsx
function Timer() {
  return <div>Timer</div>;
}

export default Timer;
```

Then, in `App.js`:

```jsx
import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <main>
      <Timer />
    </main>
  );
}

export default App;
```
