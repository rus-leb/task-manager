import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
try {
const task = await Task.create({ description: req.body.description, createBy: req.userId });
res.status(201).json(task);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

export const getTasksByUserId = async (req, res) => {
try {
const tasks = await Task.find({ createBy: req.userId });
res.json(tasks);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

export const getAllTasks = async (req, res) => {
try {
const tasks = await Task.find();
res.json(tasks);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

export const getTask = async (req, res) => {
try {
const task = await Task.findById(req.params.id);
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json(task);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

export const updateTask = async (req, res) => {
try {
const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(task);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

export const deleteTask = async (req, res) => {
try {
await Task.findByIdAndDelete(req.params.id);
res.json({ success: true });
} catch (err) {
res.status(500).json({ message: err.message });
}
};