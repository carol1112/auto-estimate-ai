function sendMail(){let parms = {
    name: document.getElementById("Name").value,
    email : document.getElementById("Email").value,
    phone : document.getElementById("Phone").value,
    address : document.getElementById("Address").value,
    message : document.getElementById("Message").value,
}
emailjs.send("service_bi8mngh","template_njkqf93",parms).thena(alert("Email Sent!!!"))
}