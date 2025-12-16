const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Security Middleware
const Todo = require('../models/Todo');

// @route   GET api/todos
// @desc    Get all todos of logged in user
router.get('/', auth, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 });
        res.json(todos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/todos
// @desc    Add new todo
router.post('/', auth, async (req, res) => {
    try {
        const newTodo = new Todo({
            task: req.body.task,
            user: req.user.id
        });
        const todo = await newTodo.save();
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.delete('/:id', auth, async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ msg: 'Todo not found' });

        // Make sure user owns todo
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Todo.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Todo removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;