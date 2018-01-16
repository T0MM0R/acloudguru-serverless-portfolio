import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

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
  }
]

describe("ExampleWork component", () => {

	let component = shallow(<ExampleWork work={myWork} />);

	it("Should be a section element", () => {
		expect(component.type()).toEqual('section');
	});

	it("Should contain as many children as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
	});

});

describe("ExampleWorkBubble component", () => {
	let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
	let images = component.find("img");

	it("Should contain one image element", () => {
		expect(images.length).toEqual(1);
	});

	if("Should have the image source set correctly", () => {
		expect(images.node.props.src).toEqual(myWork[1].image.src);
	});

});
