
import React from "react";
import Home from "../components/Home";
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import Tequila from "../components/Tequila";
configure({ adapter: new Adapter() });



describe('Tequila', function() {

    it('Renders succesfully', ()=> {
        global.document.cookie = "__session=lypñoiyut234567890; max-age=600"; //set cookies in whatever format you like

        var wrapper = mount(<Tequila match={{params:{tequilaKey: 'dszfxcgvh'}}}/>);


        wrapper.unmount();
    });

});