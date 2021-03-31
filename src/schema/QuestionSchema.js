var mongoose = require("mongoose");

const Questions = mongoose.model("Questions", {
    tags: {
      type: [String],
    },
    owner: {
      reputation: {
        type: Number,
      },
      user_id: {
        type: Number,
      },
      user_type: {
        type: String,
      },
      profile_image: {
        type: String,
      },
      display_name: {
        type: String,
      },
      link: {
        type: String,
      },
    },
    is_answered: {
      type: Boolean,
    },
    view_count: {
      type: Number,
    },
    answer_count: {
      type: Number,
    },
    score: {
      type: Number,
    },
    last_activity_date: {
      type: Number,
    },
    creation_date: {
      type: Number,
    },
    question_id: {
      type: Number,
    },
    content_license: {
      type: String,
    },
    link: {
      type: String,
    },
    title: {
      type: String,
    },
  });
  
  module.exports = Questions;