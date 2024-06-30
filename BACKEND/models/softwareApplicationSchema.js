import mongoose from "mongoose";

const softwareApplicationSchema = new mongoose.Schhema({
    name: {
        typr: String,
    },
    svg: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            require: true,
        },
    },
});

export const SoftwareApplication = mongoose.model(
    "SoftwareApplication",
    softwareApplicationSchema
);