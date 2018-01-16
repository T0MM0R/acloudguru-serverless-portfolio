import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./example-work";

const myWork = [
  {
    'title': "test1",
    'image': {
      'desc': "this is code",
      'src': "images/example1.png",
      'comment': "blah blah"
    }
  },
  {
    'title': "test2",
    'image': {
      'desc': "Some colors",
      'src': "images/example2.png",
      'comment': "blah blah"
    }
  },
  {
    'title': "test3",
    'image': {
      'desc': "A Cat",
      'src': "images/example3.png",
      'comment': "blah blah"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
