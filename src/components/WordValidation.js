const JishoApi = require("unofficial-jisho-api")
const jisho = new JishoApi()

export const ValidateWord = async (inputWord, currentWord) => {
  jisho.searchForPhrase(inputWord).then((result) => {
    console.log(result)
  })

  return true
}
