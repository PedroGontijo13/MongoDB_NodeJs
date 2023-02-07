import express from "express";
import castyAgency from "../modal/casty-agency.modal.js";

const router = express.Router();

router.put("/register/:name", async (req, res) => {
  try {
    const user = await castyAgency.findOne({ name: req.params.name });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Register a new company

router.post("/register", async (req, res) => {
  const { companyName, location, phoneNumber, bio, since, actorNumber } =
    req.body;
  try {
    const existingCompany = await castyAgency.findOne({ companyName });
    if (existingCompany) {
      return res.status(400).json({
        status: "fail",
        message: "Company already exists!",
      });
    }

    const casty = new castyAgency({
      companyName: companyName,
      location: location,
      phoneNumber: phoneNumber,
      bio: bio,
      since: since,
      actorNumber: actorNumber,
    });

    const result = await casty.save();
    // save user to database

    res.status(201).json({
      message: "Casty Company created successfully!",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error,
    });
  }
});

export default router;
