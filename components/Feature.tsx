import React from "react";
import Button from "@material-ui/core/Button";
import { ITask } from "./Task";
export interface Feature {
  name: string;
  tasks: ITask[];
  minDays: number;
  maxDays: number;
}
export default ({ name }) => {
  return <div />;
};
