// Selecting navigation links and sections
let navlinks = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('.section');

// Function to update active link based on scroll position
function updateActiveLink() {
    let currentSection = 'Home'; // Default to Home if no section matches

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - section.clientHeight / 3)) {
            currentSection = section.id;
        }
    });

    console.log('Current Section:', currentSection); // Debug loggin

    navlinks.forEach(navlink => {
        if (navlink.getAttribute('href').includes(currentSection)) {
            document.querySelector('.active')?.classList.remove('active');
            navlink.classList.add('active');
        }
    });
}

// Scroll event listener to update navigation links and header
window.addEventListener('scroll', () => {
    updateActiveLink();

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Click event listener to update navigation links
window.addEventListener('click', updateActiveLink);

// Initial call to set the correct active link on page load
updateActiveLink();


const form=document.querySelector('form');
const fullName=document.getElementById('name');
const email=document.getElementById('email');
const number=document.getElementById('number');
const subject=document.getElementById('subject');
const message=document.getElementById('message');

function sendEmail(){
    const bodyMessage=`Full Name:${fullName.value}<br> Email:${email.value} <br>
    Number: ${number.value} <br> message:${message.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "charlemarostynx@gmail.com",
        Password : "1B227155DDC23315A27109BD9125303E975B",
        To : 'charlemarostynx@gmail.com',
        From : "charlemarostynx@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for sending mai!!",
                showConfirmButton: false,
                timer: 1500
              });
        }
      }
    );
}

function checking(){
    const item=document.querySelectorAll('.item');

    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup",()=>{
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
})
