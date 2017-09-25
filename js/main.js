import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./example-work";

const myWork = [
  {
    'title': "test1",
    'image': {
      'desc': "this is test 1",
      'src': "images/example1.png",
      'comment': "blah blah"
    }
  },
  {
    'title': "test1",
    'image': {
      'desc': "this",
      'src': "images/example1.png",
      'comment': "blah blah"
    }
  },
  {
    'title': "test1",
    'image': {
      'desc': "this",
      'src': "images/example1.png",
      'comment': "blah blah"
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
