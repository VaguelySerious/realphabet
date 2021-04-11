export function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function transpose(arr) {
  return arr[0].map((_, colIndex) => array.map((row) => row[colIndex]))
}

export function save(lang, key, data) {
  const name = [lang, key].join('|')
  let payload = data
  if (typeof data === 'object') {
    payload = JSON.stringify(data)
  }
  window.localStorage.setItem(name, payload)
}

export function load(lang, key) {
  const name = [lang, key].join('|')
  const item = window.localStorage.getItem(name)
  try {
    return JSON.parse(item)
  } catch (e) {
    return item
  }
}
export function play(lang, char) {
  const sound = new Audio(`/sounds/${lang}/${char}.mp3`)
  sound.play()
}
