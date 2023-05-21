import User from '../models/users.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ _id: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getUserByID = async (req, res) => {
    try {
        let id = req.params.id;
        await User.findById(id, (err, data) => {
            if (err) return res.json({ message: 'No user with that id.' });
            res.send(data);
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    const newUser = new User({
        user_id: req.body.user_id,
        user_firstname: req.body.user_firstname,
        user_lastname: req.body.user_lastname,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_avatar: req.body.user_avatar,
        user_role: req.body.user_role,
    });
    try {
        await newUser.save();
        res.status(200).json({ newUser: newUser, success: true });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!id) {
        return res.status(404).send('No user with that id.');
    }

    if (user) {

        user.user_id = req.body.user_id,
        user.user_firstname = req.body.user_firstname,
        user.user_lastname = req.body.user_lastname,
        user.user_email = req.body.user_email,
        user.user_password = req.body.user_password,
        user.user_avatar = req.body.user_avatar,
        user.user_role = req.body.user_role,
        user.user_lastname = req.body.user_lastname,
        user.user_lastname = req.body.user_lastname

        if (updatedPost) {
            return res.status(200).send({ msg: 'User Updated', data: updatedPost, success: true });
        } else {
            return res.status(500).send({ msg: 'Error in Updating user' });
        }
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(404).send('No user with that id.');
    }
    const deletedUser = await User.findByIdAndRemove(id);

    res.json({ message: 'User deleted successfully', post: deletedUser });
}

export { getAllUsers, getUserByID, createUser, updateUser, deleteUser };