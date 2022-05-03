//console.log('pink'); //works

const randomBackground = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


$(() => {
  //Modal
    const $opensModal = $('.open') //what makes modal open
    const $modal = $('#modal') //grabs the modal div
    const $closeModal = $('#close')


    const open = () => {
      $modal.css('display', 'block')
    }

    const close =  () => {
      $modal.css('display', 'none')
    }

    $opensModal.on('click', open)
    $closeModal.on('click', close)

  //background color
    const $background = $('.project').addClass('container')
    const color = randomBackground()
    $background.css('background-color', color)
})
