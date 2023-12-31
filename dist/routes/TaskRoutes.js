"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controllers/TaskController");
const router = express_1.default.Router();
exports.router = router;
router.route('/').get(TaskController_1.getAllTasks).post(TaskController_1.addTask);
router.route('/:id').delete(TaskController_1.deleteTask).patch(TaskController_1.editTask);
