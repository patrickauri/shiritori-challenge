import { GetRandomArrayElement } from "./Utilities"

export const GenerateName = () => {
  const d = require("../data/Names.json")

  const n = GetRandomArrayElement(d.names)
  const sn = GetRandomArrayElement(d.surnames)

  return `${n} ${sn}`
}
