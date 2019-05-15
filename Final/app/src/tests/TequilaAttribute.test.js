
import React from "react";
import Home from "../components/Home";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import App from "../App";
import UserHistory from "../components/UserHistory";
import Tequila from "../components/Tequila";
import Provider from "../components/Provider";
import { MemoryRouter } from 'react-router';
import Result from "../components/ResultProviderTequila";
import TequilaAttribute from "../components/TequilaAttribute";
configure({ adapter: new Adapter() });



describe('TquilaAttribute', function() {

    it('Renders succesfully', ()=> {
        var wrapper = mount(<TequilaAttribute element={{
           pureza: '100%'
        }} />);

        wrapper.unmount();
    });

});