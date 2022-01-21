const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [
  { id: 0, name: "Jhanker", email: "hero22@gmail.com", phone: "01727273737 " },
  { id: 1, name: "Mahmud", email: "hero22@gmail.com", phone: "01727273737 " },
  { id: 2, name: "Hero", email: "hero22@gmail.com", phone: "01727273737 " },
  { id: 3, name: "Teacher", email: "hero22@gmail.com", phone: "01727273737 " },
  { id: 4, name: "Guide", email: "hero22@gmail.com", phone: "01727273737 " },
];

app.get("/", (req, res) => {
  res.send("Hello from node");
});
// app.get("/users", (req, res) => {
//   res.send(users);
// });
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.get("/users", (req, res) => {
  const result = req.query.search;
  console.log(result);
  if (result) {
    // const userr = users.filter((user) => {
    //   user.name.toLowerCase().includes(result);
    // });
    const userr = users.filter((user) =>
      user.name.toLowerCase().includes(result)
    );
    console.log(userr);
    res.send(userr);
  } else {
    res.send(users);
  }
});
app.get("/users", (rew, res) => {
  //Use Query Parameter
  const search = rew.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("Hitting The Post", req.body);
  // res.send("Success");
  res.json(newUser);
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
