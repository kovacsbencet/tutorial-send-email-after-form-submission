## How To Send Email After HTML Form Submission With EmailJS
`YouTube tutorial:[https://youtu.be/lrIE6CaBU78](https://youtu.be/lrIE6CaBU78)`

### 1. HTML structure
- [x] Create an HTML form with your desired fields.
- [x] Import CSS and JS files according to your folder structure.
- [x] Change your PUBLIC KEY in the following script tag: `(function(){emailjs.init("YOUR PUBLIC KEY HERE");})();.`
- [x] Add `onsubmit="event.preventDefault(); sendMessage();"` to the HTML form
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style/styles.css">
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
    </script>
    <script type="text/javascript">
    /* MAKE SURE TO CHANGE YOUR PUBLIC KEY HERE */
    (function(){
        emailjs.init("feU3e99WRLYKN6lVD");
    })();
    </script>
    <script src="script/script.js"></script>
</head>
<body>
    <section>
        <form onsubmit="event.preventDefault(); sendMessage();">
            <div class="row">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name">
                </div>
                <div>
                    <label for="business">Business:</label>
                    <input type="text" name="business" id="business">
                </div>
            </div>
            <div class="row">
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email">
                </div>
                <div>
                    <label for="phone">Phone:</label>
                    <input type="tel" name="phone" id="phone">
                </div>
            </div>
            <div class="row">
                <div>
                    <label for="service">Choose service:</label>
                    <select name="service" id="service">
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Copywriting">Copywriting</option>
                    </select>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
</body>
</html>
```

### 2. Add CSS styling
```CSS
/* LAYOUT STYLES */

section
{
    display: flex;
    justify-content: center;
    align-items: center;
}

.row div
{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
}

/* INPUT STYLES */

form
{
    max-width: 500px;
    width: 100%;
}

label
{
    margin-bottom: 3px;
}

input
{
    padding: 5px;
}

select
{
    padding: 5px;
    margin-bottom: 5px;
}

button
{
    padding: 5px;
    width: 100%;
    cursor: pointer;
}

/* RESPONSIVE SETTINGS */

@media only screen and (min-width:400px){
    .row
    {
        display: flex;
        gap: 10px;
    }
}
```

### 3. Create JS file
- [x] Change your `serviceID`
- [x] Change your `templateID`
```JS
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
```
### 4. Set up EmailJS

- [x] Create an EmailJS account [here!](https://www.emailjs.com/)
- [x] Activate your email address after signing up
- [x] Choose Gmail as your service provider
- [x] Create a template
- [x] Send up to 200 emails a month in the FREE version
