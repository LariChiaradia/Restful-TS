import {Router, Request, Response} from "express"
import { createMovie, deleteMovie, findMovieById, getAllMovies, updateMovie } from "./controllers/movieController";
import { validate } from "./middleware/handleMiddleware";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

export default router
    .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working!");
})
    .post("/movie", movieCreateValidation(), validate, createMovie)
    .get("/movie/:id", findMovieById)
    .get("/movies", getAllMovies)
    .delete("/movie/:id", deleteMovie)
    .patch("/movie/:id", movieCreateValidation(), validate, updateMovie);