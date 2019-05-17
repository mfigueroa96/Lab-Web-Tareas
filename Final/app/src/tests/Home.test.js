import ReactDOM from "react-dom";
import React from "react";
import Home from "../components/Home";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import {Input} from "@material-ui/core";
import UserHistory from "../components/UserHistory";
import Header from "../components/Header";
import firebase from 'firebase';
import App from "../App";
import {MemoryRouter} from "react-router-dom";
import Tequila from "../components/Tequila";
configure({ adapter: new Adapter() });

describe('Home', function() {


    it('Renders succesfully', ()=> {
        const wrapper = mount(<Home />);
        expect(
            wrapper.containsMatchingElement(
                <Header />
            )
        ).toBeTruthy()
    });

    it('Accessing states', ()=> {
        const wrapper = mount(<Home />);

        expect(wrapper.state('access')).toEqual(false);
        expect(wrapper.state('username')).toEqual('');
    });

    it('Acessing states', async () => {
        const wrapper = mount(<App/>).find(Home);

        //Inco pass
        var username = "luisjuancenturion@gmail.com";
        var password = "appe<3";

        await wrapper.instance().performSignIn(username, password);
        expect(wrapper.state('access')).toEqual(false);

        //Not registered
        var username = "luisjuancenturon@gmail.com";
        var password = "appe<3";

        await wrapper.instance().performSignIn(username, password);
        expect(wrapper.state('access')).toEqual(false);

        //Wron user
        var username = "luisjuancenturion";
        var password = "appe<3";

        await wrapper.instance().performSignIn(username, password);
        expect(wrapper.state('access')).toEqual(false);

        var username = "luisjuancenturion@gmail.com";
        var password = "apple<3";

        await wrapper.instance().performSignIn(username, password);
        expect(wrapper.state('access')).toEqual(true);
    });

});