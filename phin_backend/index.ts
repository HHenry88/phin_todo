import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import addTodo from "./src/controllers/add_todo";
import bodyParser from "body-parser";
import getTodos from "./src/controllers/get_todos";
import deleteTodo from "./src/controllers/delete_todo";
import cors from "cors";
import updateTodo from "./src/controllers/update_todo";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => getTodos(req, res));
app.post("/add", (req: Request, res: Response) => addTodo(req, res));
app.delete("/delete", (req: Request, res: Response) => deleteTodo(req, res));
app.put("/update", (req: Request, res: Response) => updateTodo(req, res));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
