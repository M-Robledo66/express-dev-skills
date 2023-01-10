import mongoose from "mongoose"
// import { skills } from "../data/skills-data.js"

const Schema = mongoose.Schema 

const skillSchema = new Schema({
    text: String,
    done: Boolean,
})

const Skill = mongoose.model("Skill", skillSchema)

export {
    Skill
}