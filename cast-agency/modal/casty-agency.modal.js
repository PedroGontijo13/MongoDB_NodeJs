import mongoose from "mongoose";

const castyAgencySchema = mongoose.Schema({
    companyName : String,
    location: String,
    phoneNumber: String,
    bio: String,
    since: String,
    actorNumber: String
});

const castyAgency = mongoose.model("castyAgency", castyAgencySchema);

export default castyAgency;
