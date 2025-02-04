const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new movie
router.post('/', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    duration: req.body.duration,
    quality: req.body.quality,
    audio: req.body.audio,
    description: req.body.description,
    driveFileId: req.body.driveFileId,
    thumbnailUrl: req.body.thumbnailUrl,
    metadata: req.body.metadata
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
