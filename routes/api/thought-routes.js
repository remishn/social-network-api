const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    // get all thoughts
    .get(getAllThoughts)
    // create new thought
    .post(createThought);

router
    .route('/:id')
    // get a single thought by its id
    .get(getThoughtById)
    // update a thought by its id
    .put(updateThought)
    // remove a thought by its id
    .delete(deleteThought);

router.route('/:thoughtId/reactions/')
    // create a reaction stored in a single thought's reactions array field
    .post(addReaction)
    // pull and remove a reaction by the reaction's reactionId value
    .delete(deleteReaction)

module.exports = router;