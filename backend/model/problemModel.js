import mongoose from 'mongoose'

const problemSchema = mongoose.Schema(
  {
    statement: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    functionName: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    numberOfInputs: {
      type: Number,
      required: true,
    },
    examples: [
      {
        Input: {
          type: String,
          required: true,
        },
        Output: {
          type: String,
          required: true,
        },
        Explanation: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Problems = mongoose.model('Problem', problemSchema)

export default Problems
