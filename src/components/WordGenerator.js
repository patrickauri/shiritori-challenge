import { GetRandomArrayElement } from "./Utilities"
const wordList = require("../data/WordList.json")

export const GenerateWord = () => {
  return GetRandomArrayElement(wordList.words)
}
