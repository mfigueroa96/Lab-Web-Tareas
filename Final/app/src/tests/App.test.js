
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
configure({ adapter: new Adapter() });



describe('App', function() {

    it('Contains Home as default', ()=> {
        var wrapper = mount(<App />);
        expect(
            wrapper.containsMatchingElement(
                <Home />
            )
        ).toBeTruthy();
        expect(
            wrapper.containsMatchingElement(
                <Tequila />
            )
        ).not.toBeTruthy();
        expect(
            wrapper.containsMatchingElement(
                <Provider />
            )
        ).not.toBeTruthy();
        expect(
            wrapper.containsMatchingElement(
                <UserHistory />
            )
        ).not.toBeTruthy();

        wrapper.unmount();
    });

});