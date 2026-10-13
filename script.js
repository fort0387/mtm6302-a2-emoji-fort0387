
const emojiCodes = [
  128512, // Grinning face
  128514, // Face with tears of joy
  128525, // Smiling face with heart-eyes
  128526, // Smiling face with sunglasses
  128077, // Thumbs up
  128079, // Clapping hands
  128293, // Fire
  127881, // Party popper
  128151, // Two hearts
  129409, // Lion
  128049, // Cat
  128054, // Dog
  127774, // Sun
  127803, // Sunflower
  127925, // Musical notes
  128640  // Rocket
]

const $gallery = document.getElementById('gallery')

function showEmojis(count = emojiCodes.length) {
  $gallery.innerHTML = ''

  for (let index = 0; index < count; index++) {
    const code = emojiCodes[index]
    const character = String.fromCodePoint(code)

    const $card = document.createElement('div')
    $card.classList.add('emoji-card')

    const $emoji = document.createElement('div')
    $emoji.classList.add('emoji')
    $emoji.textContent = character

    const $emojiCode = document.createElement('p')
    $emojiCode.classList.add('emoji-code')
    $emojiCode.textContent = code

    $card.append($emoji, $emojiCode)
    $gallery.append($card)
  }
}

showEmojis()
