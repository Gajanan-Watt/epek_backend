const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    // id: { type: "String", required: true },
    projectName: { type: "String", required: true },
    title: { type: "String", required: true },
    description: { type: "String", required: true },
    priority: { type: "Number", required: true },
    
  },

  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("issue", issueSchema);