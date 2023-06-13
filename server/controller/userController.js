const User = require('../models/user');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

const updateUserById = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

const deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};