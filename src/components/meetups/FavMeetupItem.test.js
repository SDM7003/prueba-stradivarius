/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import FavMeetupItem from "./FavMeetupItem";
import {render} from "@testing-library/react";

test("<FavMeetupItem/> renders without crashing", () => {
  const wrapper = shallow(<FavMeetupItem />);
  expect(wrapper.exists()).toBe(true);
});
test("render a snapshot",()=>{
  const {baseElem}=render(<FavMeetupItem/>);
  expect(baseElem).toMatchSnapshot();
})
