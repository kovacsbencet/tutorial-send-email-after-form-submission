function sendMessage()
{
    const serviceID = "service_6xfn1og";
    const templateID = "template_d20cmmh";

    let params = {
        name: document.getElementById("name").value,
        business: document.getElementById("business").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
    }

    emailjs.send(serviceID, templateID, params)
    .then(response => console.log("SUCCESS:" + response.status))
    .catch(error => console.log("ERROR:", error))
}