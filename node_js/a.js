
import http from 'http';

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//     registeredAt: faker.date.new(),
//     registeredAtDD: faker.date.new(),
//   };
// }

// export const a = faker.helpers.multiple(createRandomUser, {
//   count: 5012,
// });

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(a));
}).listen(8000);
