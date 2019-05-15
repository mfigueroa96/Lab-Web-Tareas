
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
import Result from "../components/ResultItem";
configure({ adapter: new Adapter() });



describe('ResultItem', function() {

    it('Renders succesfully', ()=> {
        var wrapper = mount(<Result element={{
            alcohol_degrees: '40%',
            date_of_release: 'Wed Dec 12 2018',
            distillation: 'Plata',
            name: 'Jose Cuervo Plata',
            place_of_distillation: 'Tequila, Jal, Mex',
            provider: 'Jose Cuervo',
            provider_uuid: '8fe15e29-8a58-4848-b905-d8dd61a16501',
            purity: '100%',
            serial_numbers: [
                'a8038c5c-df3b-4a23-b6f3-4fd97f530633',
                '6ecf8898-dd7f-471f-9d92-02254613acd5',
                'ef121b7d-4c61-4e11-b36b-77002dba8b9e',
                'f1f7f5ff-ce91-4ca2-827c-8a70e2eaa833',
                'd33b1495-163f-4341-bfcc-db091c4ccbf6',
                'ba2ca6e2-db25-4c4f-8f35-514a3a19f0d7',
                'd88fb0ba-fd52-48e8-9a5f-3598c216770c',
                '268d1e8e-543b-47f0-9113-26eae34fa43a',
                '9ba6dfab-f8cd-4b6d-bcd8-f1652d955dc9',
                'e4f163ee-1df0-4c8c-9cf7-63cc61bd9b54'
            ],
            year_of_distillation: '2018',
            uuid: '00921e7c-8e31-40cc-b84c-af244c98b7b2'
        }} />);

        wrapper.unmount();
    });

});