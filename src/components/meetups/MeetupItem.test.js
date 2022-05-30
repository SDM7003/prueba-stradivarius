/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";
import {render} from "@testing-library/react";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(<MeetupItem />);
  expect(wrapper.exists()).toBe(true);
});

