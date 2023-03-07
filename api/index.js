import  express  from "express";
import morgan from "morgan";
const app = express();
import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import cors from "cors"
import cookieParser from "cookie-parser";

//middlewares

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('combined'))

const port = 8800;

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/comments", commentRoutes)


app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});