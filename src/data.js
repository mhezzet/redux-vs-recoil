import { name, random } from "faker";

export const items = Array.from({ length: 20 }, () => ({
  id: random.uuid(),
  name: name.jobTitle(),
  state: true,
}));
