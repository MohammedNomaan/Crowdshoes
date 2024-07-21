const body = document.body

const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {

    navbar
        .classList
        .add("scroll")

})


//******* */ cookies

const div1 = document.querySelector(".cookies")

setTimeout(() => {

    const div = document.createElement('div')
    div.innerHTML = 'We, and third parties, use cookies to improve your user experience. For more i' +
            'nformation, see our Privacy Policy By clicking "Accept", you agree to the use ' +
            'of cookies. Change your settings anytime using our Cookies Preferences.' 
    div.classList.add('close')
    
    // close
    const close = document.createElement('button');
    close
        .classList
        .add('btn-close1', 'btn-close-white')
    div.append(close)
    div1.append(div)

    // preference
    const btn1 = document.createElement('button');
    btn1.innerHTML = 'Manage Preference'
    btn1
        .classList
        .add("btn", "popbtn", 'ms-3', 'mt-3')
    div1.append(btn1)

    // accept
    const btn2 = btn1.cloneNode(true);
    btn2.textContent = 'Accept';
    div1.append(btn2)

    div1.style.visibility = 'visible'

}, 4000)


// remove Cookies

div1.addEventListener("click", (e) => {

    if (e.target.classList.contains('btn-close1')) {
        div1.remove()
    }
    if (e.target.classList.contains('popbtn')) {
        div1.remove()
    }
 

})
