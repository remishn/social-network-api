const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById)
    // update a user by its id
    .put(updateUser)
    // remove user by its id
    .delete(deleteUser)

router.route('/:userId/friends/:friendId')
    // add a new friend to a user's friend list
    .post(addFriend)
    // remove a friend from a user's friend list
    .delete(deleteFriend)

module.exports = router;