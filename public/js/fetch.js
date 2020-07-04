const form = document.querySelector('.main')
const first = document.querySelectorAll('.form_textarea')[0]
const second = document.querySelectorAll('.form_textarea')[1]
let method = 'POST'
let headers = {}
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const body = JSON.stringify({
    first: first.value,
    second: second.value,
  })
  headers['Content-Type'] = 'application/json'
  const response = await fetch('http://localhost:3000/compare', {
    method,
    body,
    headers
  })
  const status = response.status;

  if (!response.ok) {
    throw new Error( 'Что-то пошло не так')
  }
})