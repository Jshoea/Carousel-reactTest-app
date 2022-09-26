import React from "react";
import {render } from "@testing-library/react";
import Card from "./Card.js";
import { expectedError } from "@babel/core/lib/errors/rewrite-stack-trace";

it("renders without crashing", function() {
    render(<Card />);

});
/**expect toMatchSnapshot */
it("matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});