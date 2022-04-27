console.log('Hi');

$(() => {
  let currentImage = 0
  const numberOfImages = $('.images').children().length - 1

  $('.right-btn').on('click', () => {
    $('.images').children().eq(currentImage).css('display', 'none')
    if (currentImage < numberOfImages) {
      currentImage++
    } else {
      currentImage = 0
    }
    $('.images').children().eq(currentImage).css('display', 'block')
  })

  $('.left-btn').on('click', () => {
    $('.images').children().eq(currentImage).css('display', 'none')
    if (currentImage > 0) {
      currentImage--
    } else {
      currentImage = numberOfImages
    }
    $('.images').children().eq(currentImage).css('display', 'block')
  })

})
