import React from "react";

import { Profile } from "./profile";

export default {
  title: "Example/Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const ProfileImage = Template.bind({});
ProfileImage.args = {};
