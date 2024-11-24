import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new message
router.post('/', async (req, res) => {
    const message = new Message(req.body);
    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Mark message as read
router.patch('/:id', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (message) {
            message.read = true;
            const updatedMessage = await message.save();
            res.json(updatedMessage);
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a message
router.delete('/:id', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (message) {
            await message.remove();
            res.json({ message: 'Message deleted' });
        } else {
            res.status(404).json({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
