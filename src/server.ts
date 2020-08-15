import express from "express"
import cors from "cors"
import routes from "./routes";

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

// const users = [
//     {name: "Diego Felipe", age: 31},
//     {name: "Fernanda Felipe", age: 37}
// ]
// app.post("/users", (request, response) => {
//     console.log(request.body)
//     response.json(users);
// });
// app.get("/users", (request, response) => {
//     console.log(request.query)
//     response.json(users);
// });
// app.delete("/users/:id", (request, response) => {
//     console.log(request.params)
//     response.json(users);
// });


app.listen(3333);