console.log('pink');

$(() => {

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

})
