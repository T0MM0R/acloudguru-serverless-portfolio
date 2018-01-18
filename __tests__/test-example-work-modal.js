import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myWork =
  {
    'title': "test1",
		'href': "https://example.com",
		'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "this is code",
      'src': "images/example1.png",
      'comment': "blah blah"
    }
	};

describe("Example Work Modal component", () => {
	let component = shallow(<ExampleWorkModal example={ myWork } open={false} />);
	let openComponent = shallow(<ExampleWorkModal example={ myWork } open={true} />);

	let anchors = component.find("a");

	it("Should contain a single anchor", () => {
		expect(anchors.length).toEqual(1);
	});

	it("Should link to our project", () => {
		expect(anchors.node.props.href).toEqual(myWork.href);
	});

	it("Should have the modal class set correctly", () => {
		expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
		expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
	});

});
