const scriptURL = 'https://script.google.com/macros/s/AKfycbyX648it-gvhzCLNP_L1tWdbqcdFXAxJxLVWs6tLcIwiNSTiOnpb54G5MgJpqvUxAO4yg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("form-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})