import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required!"], 
    },
    description: {
        type: String,
        required: [true, "Description Required!"],
    },
    timeline: {
        from: {
            type: String,
        },
        to: {
            type: String,
        },
    },
});

export const timeLine = mongoose.model("Timeline", timelineSchema);