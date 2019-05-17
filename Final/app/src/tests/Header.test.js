import ReactDOM from "react-dom";
import React from "react";
import Home from "../components/Home";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme/build';

import {Input} from "@material-ui/core";
import UserHistory from "../components/UserHistory";
import Header from "../components/Header";

import Adapter from 'enzyme-adapter-react-16/build';
configure({ adapter: new Adapter() });

describe('Header', function() {

    it('Renders succesfully', ()=> {
        const wrapper = mount(<Header />);
        expect(
            wrapper.containsMatchingElement(
                <h1>Tequilas de<br/>México S.A. de C.V.</h1>
            )
        ).toBeTruthy();
    });

    it('Testing states', ()=> {
        const wrapper = mount(<Header />);

        expect(wrapper.state('goto')).toEqual(false);
        expect(wrapper.state('tequila_key')).toEqual('');
    });

});