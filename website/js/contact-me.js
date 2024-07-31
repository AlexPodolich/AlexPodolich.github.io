const scriptURL = 'https://script.google.com/macros/s/AKfycbyX648it-gvhzCLNP_L1tWdbqcdFXAxJxLVWs6tLcIwiNSTiOnpb54G5MgJpqvUxAO4yg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("form-msg")
const submitButton = form.querySelector('button[type="submit"]')

form.addEventListener('submit', e => {
    e.preventDefault()
    submitButton.disabled = true
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(() => {
                msg.innerHTML = ""
                submitButton.disabled = false
            }, 1000)
            form.reset()
        })
        .catch(error => {
            console.error('Error!', error.message)
            submitButton.disabled = false
        })
})