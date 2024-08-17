import { faker } from "../faker/index.js";
import Mock from "mockjs";

const Random = Mock.Random;

export default [
  {
    url: "/example",
    method: "get",
    response: () => ({
      id: Random.id(),
      name: Random.cname(),
      registeredAt: faker.location.city(),
      birthdate: faker.date.birthdate(),
    }),
  },
];
