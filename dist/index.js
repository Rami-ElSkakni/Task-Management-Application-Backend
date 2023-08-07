"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskRoutes_1 = require("./routes/TaskRoutes");
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGO_URI;
mongoose_1.default
    .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((conn) => console.log("Success"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use("/api/", TaskRoutes_1.router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
