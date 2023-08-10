import Task from "../models/TaskModel";
const getAllTasks = async (req: any, res: any) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const addTask = async (req: any, res: any) => {
  try {
    const { title, description, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      dueDate,
    });

    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteTask = async (req: any, res: any) => {
  try {
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id)

    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const editTask = async (req: any, res: any) => {
    try {
      const {id} = req.params;
      const task = await Task.findByIdAndUpdate(id, req.body)
      res.status(200).json({
        status: "success",
        data: task,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };




export { getAllTasks, addTask, deleteTask, editTask };
