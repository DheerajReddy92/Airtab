const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
  duration: { type: String, required: true },
  quality: String,
  audio: String,
  description: String,
  driveFileId: { type: String, required: true },
  thumbnailUrl: String,
  metadata: {
    resolution: String,
    format: String,
    size: String
  }
});

module.exports = mongoose.model('Movie', movieSchema);
