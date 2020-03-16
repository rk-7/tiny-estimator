import React, { useState } from "react";
import Button from "@material-ui/core/Button";
export interface ITask {
  id: number;
  name: string;
  assumptions: string;
  minDays: number;
  maxDays: number;
}
export default ({ name }) => {
  const initialFormState: ITask = {
    id: null,
    name: "",
    assumptions: "",
    minDays: 0,
    maxDays: 0
  };
  const [user, setUser] = useState(initialFormState);
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value="" />
      <label>Min day(s)</label>
      <input type="text" name="minDays" value="" />
      <label>Max day(s)</label>
      <input type="text" name="maxDays" value="" />
      <label>Assumptions</label>
      <input type="text" name="assumptions" value="" />
      <Button>Add Task</Button>
    </form>
  );
};
