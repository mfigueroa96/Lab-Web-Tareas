
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
configure({ adapter: new Adapter() });



describe('Provider', function() {

    it('Renders succesfully', ()=> {
        var wrapper = mount(<Provider match={{params: {providerKey: 'jghj'}}} />);

        wrapper.instance()._onChange();
        wrapper.instance().getInitialState();
        wrapper.unmount();
    });

});