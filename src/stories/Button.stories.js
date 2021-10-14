import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../components/Button";

const stories = storiesOf("Components", module);

stories.add("Button", () => {
  return <Button />;
});
