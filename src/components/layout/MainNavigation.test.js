/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MainNavigation from "./MainNavigation";
import {render} from "@testing-library/react";

test("<MainNavigation/> renders without crashing", () => {
  const wrapper = shallow(<MainNavigation/>);
  expect(wrapper.exists()).toBe(true);
});
test("render a snapshot",()=>{
  const {baseElem}=render(<MainNavigation/>);
  expect(baseElem).toMatchSnapshot();
})
