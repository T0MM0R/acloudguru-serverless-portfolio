import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./example-work";

const myWork = [
  {
    'title': "test1",
		'href': "https://example.com",
		'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "this is code",
      'src': "images/example1.png",
      'comment': "blah blah"
    }
  },
  {
    'title': "test2",
		'href': "https://example.com",
		'desc': "Lorem",
    'image': {
      'desc': "Some colors",
      'src': "images/example2.png",
      'comment': "blah blah"
    }
  },
  {
    'title': "test3",
		'href': "https://example.com",
		'desc': "Lorem	",
    'image': {
      'desc': "A Cat",
      'src': "images/example3.png",
      'comment': "blah blah"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
