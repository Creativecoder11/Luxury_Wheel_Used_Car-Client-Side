import React from "react";
import { Link } from "react-router-dom";

const time = new Date().toLocaleDateString();

const Blog = () => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  React
                </span>
                <span class="mt-1 text-gray-500 text-sm">{time}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  What are the different ways to manage a state in a React
                  application?
                </h2>
                <p class="leading-relaxed">
                  React state management is a process for managing the data that
                  React components need in order to render themselves. This data
                  is typically stored in the component's state object. When the
                  state object changes, the component will re-render itself.
                  React state management is basically half of a React app.
                  React's useState is the best option for local state
                  management. If you need a global state solution, the most
                  popular ones are Redux, MobX, and the built-in Context API.
                  Your choice will depend on the size of your project, your
                  needs, and your engineers' expertise.
                </p>
                <Link
                  to="/"
                  class="text-indigo-500 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  React vs Others
                </span>
                <span class="mt-1 text-gray-500 text-sm">{time}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  React vs. Angular vs. Vue?
                </h2>
                <p class="leading-relaxed">
                  One of the main reasons for the popularity of React is that it
                  works very efficiently with the DOM. Vue also uses the virtual
                  DOM, but compared to React, Vue has better performance and
                  stability. According to this data, Vue and React's performance
                  difference is subtle since it is only a few milliseconds.
                  According to a survey by Stack Overflow 40.13% of the
                  developers believe that React is the most commonly used
                  JavaScript Framework. Angular and Vue follow it with 22.96%
                  and 18.97%, respectively. t's easier to learn Vue than angular
                  and it reasonably takes the same amount of time and effort as
                  learning react. Although some people argue that it's even
                  easier to learn than react but that's of course subjective and
                  varies from person to person.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  Javascript
                </span>
                <span class="text-sm text-gray-500">{time}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  What is a unit test? Why should we write unit tests?
                </h2>
                <p class="leading-relaxed">
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages. A unit test is
                  a way of testing a unit - the smallest piece of code that can
                  be logically isolated in a system. In most programming
                  languages, that is a function, a subroutine, a method or
                  property. The isolated part of the definition is important.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  Javascript
                </span>
                <span class="text-sm text-gray-500">{time}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  How does prototypical inheritance work?
                </h2>
                <p class="leading-relaxed">
                  When it comes to inheritance, JavaScript only has one
                  construct: objects. Each object has a private property which
                  holds a link to another object called its prototype. That
                  prototype object has a prototype of its own, and so on until
                  an object is reached with null as its prototype. The
                  Prototypal Inheritance is a feature in javascript used to add
                  methods and properties in objects. It is a method by which an
                  object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object. getPrototypeOf and
                  Object.
                </p>
                <a class="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
