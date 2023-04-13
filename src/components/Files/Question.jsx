import React from "react";
import './Question.css'

const Question = () => {
  return (
    <div className="qa">
      <h2>1. Difference between props and state?</h2>
      <p>
        Props are a Components attributes in React that are useful for
        customization. Since a prop modifies a components behavior or output, it
        can be compared to a parameter. <br />
        A built-in React object called the state is used to store data or
        details about the component. A component may change over time, and a new
        rendering of the component is produced each time it happens. <br />
        While the state allows components to create and maintain their own data,
        props allow them to receive data from the outside. <br />
        Data is passed using props, whereas the state is used to manage data.{" "}
        <br />
        A component that receives read-only data from props cannot modify it
        once it has received it from the outside. <br />
        State data is private but can be altered by its own component (cannot be
        accessed from outside). <br />
        Only parent components can pass props on to their children
        (unidirectional flow). SetState () method should be used to modify the
        state. <br />
      </p>
      <h2>2. How Does useState work?</h2>
      <p>
        The useState() is a Hook that allows you to have state variables in
        functional components . so basically useState is the ability to
        encapsulate local state in a functional component. React has two types
        of components, one is class components which are ES6 classes that extend
        from React and the other is functional components. Class components a
        Component and can have state and lifecycle methods: class Message
        extends React. The useState hook is a special function that takes the
        initial state as an argument and returns an array of two entries.
        UseState encapsulate only singular value from the state, for multiple
        state need to have useState calls. <br />
        Syntax: The first element is the initial state and the second one is a
        function that is used for updating the state. <br />
        const [state, setState] = useState(initialstate
      </p>
      <h2>3. What else does useEffect data load in React?</h2>
      <p>
        The useEffect hook in React is used for performing side effects in a
        React component. It can be used to load data from an external source,
        such as an API, into the component. <br />
        Apart from data loading, the useEffect hook can be used for a variety of
        purposes. Here are some common use cases: <br />
        Updating the title of the webpage: You can use the useEffect hook to
        update the title of the webpage based on the state of the component.
        <br />
        Event listeners: You can use the useEffect hook to add and remove event
        listeners, such as a scroll or resize event. <br />
        Animations: You can use the useEffect hook to trigger animations when
        certain state or props change. <br />
        Clean up: You can use the useEffect hook to clean up any resources or
        subscriptions that were created during the component's lifecycle. <br />
      </p>
      <h2>4. How does React work</h2>
      <p>
        React is a JavaScript library for building user interfaces. It works by
        creating a virtual representation of the UI in memory, and then
        rendering this virtual representation to the browser's DOM. React also
        uses a concept called "props" to pass data between components. Props are
        essentially parameters that can be passed to a component when it is
        rendered, and they allow components to be reused and composed in
        different ways. One of the key benefits of React is its ability to
        handle complex UI logic in a declarative way. Instead of manually
        manipulating the DOM and managing state, developers can describe the
        desired UI state in a declarative manner, and let React handle the
        details of rendering and updating the UI. This can lead to more
        maintainable, scalable, and testable code.
      </p>
    </div>
  );
};

export default Question;
