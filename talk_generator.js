// define generate random element function
function randomElement(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTalk
function generateTalk(target) {
  // define elements in the sentence
  const targets = { engineer: '工程師', designer: '設計師', entrepreneur: '創業家' }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // return error if you don't choose target
  if (target === undefined) return 'You must select one of target.'

  const randomTask = randomElement(task[target])
  const randomPhrase = randomElement(phrase)

  // generate sentence
  const sentence = `身為一個${targets[target]}，${randomTask}，${randomPhrase}吧!`

  return sentence

}


module.exports = generateTalk