var React = require('react/addons');
import { shallow } from 'enzyme';
var Home = require('../../app/src/components/Home.js');
var TestUtils = React.addons.TestUtils;

describe('App', function() {

    it('renders with correct text', function() {

        shallow(<Home/>);

    });

});