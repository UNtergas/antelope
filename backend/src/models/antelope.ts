
//!important
// This is the schema for the antelope model
// Usually this is used to define the structure of the data that will be stored in the database(example here is MongoDB)

// !Currently NOT in Use in the current project

import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export interface AntelopeProp {
    name: string;
    continent: string;
    weight: number;
    height: number;
    horn: string;
    picture: string;
}

const antelopeSchema = new Schema<AntelopeProp>({
    name: { type: String, required: true },
    continent: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    horn: { type: String, required: true },
    picture: { type: String, required: true },
})
const Antelope = mongoose.model<AntelopeProp>('Antelope', antelopeSchema);

export default Antelope;