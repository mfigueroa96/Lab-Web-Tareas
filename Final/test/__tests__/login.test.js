jest.dontMock('../../app/src/components/Home');

var React = require('react/addons');
var Home = require('../../app/src/components/Home');
var TestUtils = React.addons.TestUtils;

describe('App', function() {

    it('renders with correct text', function() {

        var app = TestUtils.renderIntoDocument(
            <Home />
        );

        var appNode = React.findDOMNode(app);

        // Asserts that the text in the <h1> tag
        // is equal to "Hello World" (like our App component)
        expect(
            appNode.querySelector('h1').textContent
        ).toEqual('Hello World');

    });

});