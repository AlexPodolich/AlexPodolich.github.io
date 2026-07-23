// Contact form -> Web3Forms (emails each submission to opodolich.dev@gmail.com).
// The sender's email is set as reply-to, so replies go straight back to them.
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitButton.disabled = true;
    msg.style.color = "";
    msg.textContent = "Sending…";

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: new FormData(form),
        });
        const data = await res.json();

        if (data.success) {
            msg.style.color = "#61b752";
            msg.textContent = "Thanks! Your message has been sent.";
            form.reset();
        } else {
            throw new Error(data.message || "Submission failed");
        }
    } catch (err) {
        console.error("Contact form error:", err);
        msg.style.color = "#e5534b";
        msg.textContent = "Something went wrong — please email opodolich.dev@gmail.com directly.";
    } finally {
        submitButton.disabled = false;
        setTimeout(() => { msg.textContent = ""; }, 6000);
    }
});
