// React Js

// Javascript library for building user interfaces.
// View layer for web applications
// Ideal for building single-page applications (SPAs) and interactive web applications.

// Key characteristics of SPA

// 1. No Page Reloads
// 2. Dynamic Loading
// 3. Client-Side Routing

// React is a library ?
    // Library refers to a collection of pre-written code, functions, and components that 
    // developers can use to build user interfaces (UIs) for web applications.

// Vite instrallation
    // npm create vite@latest

// JSX -> Javascript XML
// It provides you to write HTML/XML, then preprocessor will transform these expressions into actual Javascript code.

// The process of comp[aring the current virtual DOM tree with the previous one is 'diffing'.
// The entire process of transforming changes to the real DOM is called Reconciliation

//ASsume components may re-render at any time, 
// our job is to ensure that every time the component re-renders, the correct output is produced.

// Components is a building block of a React component.
// They are reusable, self-contained pieces of code that encapsulate a part of the user interface(UI) and its behaviour.
// React applications are typically composed of multiple components that work together to create a complete user interface.

// Functional components

// Class-based components can manage their own state, implement lifecycle methods, and handle complex behavior.
// With the introduction of React hooks, functional components have become more popular for managing state and side effects

// Hooks : Special functions that allow developers to hook into state and lifecycle of React components.
// State : One or more data values associated with a React component instance.
// Lifecycle  : The events associated with a React component instance (create, render, destroy, etc).

// Built-in Hooks:
   //useState
   //useEffect

// State - value of a dynamic properties of a React component at a given instance.

// Props  - Component's configuration
// A Component cannot change its props, but it is responsible for putting together the props of its child components.

//                                             | State       |       Props

//  Get initial value from parent              |  Yes        |       No
// Can be changed by parent Component          |  No         |       Yes
// Can set default values inside component     |  Yes        |       Yes
// Can change inside Component                 |  Yes        |       No
// Can set initial value for child components  |  Yes        |       Yes
// Can change in child components              |   No        |       Yes
