function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function () {
    document.querySelector('#text').toggleAttribute('hidden')
  })
}
