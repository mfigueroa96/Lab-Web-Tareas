
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
import NotFound from "../components/NotFound";
configure({ adapter: new Adapter() });



describe('Not Found', function() {

    it('Renders succesfully', ()=> {
        var wrapper = mount(<NotFound />);
        expect(
            wrapper.containsMatchingElement(
                <h1>Oops! Algo anda mal con este tequila...</h1>
            )
        ).toBeTruthy();

        wrapper.unmount();
    });

});