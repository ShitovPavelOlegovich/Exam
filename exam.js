 /* модальное окно для входа */
 const open = document.getElementById("openModal");
 const close = document.getElementById("closeModal");
 const modal = document.getElementById("myModal");
 const password = document.getElementById("password");
 const errorMessage = document.getElementById("error-message");

 open.addEventListener("click", function() {
     modal.style.display = "flex";
 });

 close.addEventListener("click", function() {
     modal.style.display = "none";
 });

 const showPassword = document.getElementById("showPassword");

 showPassword.onchange = function(e) {
    password.type = showPassword.checked ? "text" : "password";
 };


 document.getElementById('openEnter').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if(password.value.length < 8) {
        errorMessage.textContent = "Пароль должен содержать не менее 8 символов.";
        e.preventDefault();
    } else {
        alert(`\u2713 Добро пожаловать на наш сайт ${username}`);
    }
    
});
 


 /* модальное окно для регистрации */
 const registration = document.getElementById("openRegistration");
 const regClose = document.getElementById("closeRegistration")
 const registrationModal = document.getElementById("regModal");
 const errorMessage2 = document.getElementById("error-message2");
 

 registration.addEventListener("click", function() {
     registrationModal.style.display = "flex";
 });
 
 regClose.addEventListener("click", function() {
     registrationModal.style.display = "none";
 });


 document.getElementById('formRegistration').addEventListener("submit", function(e) {
    e.preventDefault();

    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const registrationEmail = document.getElementById("email").value;
    const registrationLogin = document.getElementById("usernameReg").value;

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(registrationEmail)) {
        alert(`\u2716 Введите корректный email адрес.`);
        e.preventDefault();
    } 
    else if(password1.length < 8) {
        alert(`\u2716 Пароль должен содержать не менее 8 символов.`);
        e.preventDefault();
    }

    else if(password1 !== password2) {
        alert(`\u2716 Пароли не совпадают. Пожалуйста, введите пароли заново.`);
        
    } 
    else {
        alert(`\u2713 Здравствуйте ${registrationLogin}. На почту ${registrationEmail} отправлено письмо с подтверждением..`);
    }
    
 });
 
 


 /* выбор города */
 const openCity = document.getElementById("openCity");
 const closeCity = document.getElementById("closeCity");
 const myCity = document.getElementById("city");

 openCity.addEventListener("click", function() {
     city.style.display = "flex";
 });

 closeCity.addEventListener("click", function() {
     city.style.display = "none";
 });

 const inputCity = document.getElementById('inputCity');
 const inputCity2 = document.getElementById('inputCity2');

 inputCity.addEventListener('change', function() {
     openCity.innerHTML = `<a href="#">${inputCity.value}</a>`;
 });
 
 inputCity2.addEventListener('change', function() {
    openCityButton.querySelector('p').textContent = inputCity2.value;
});

/* доставка */
 const openDelivery = document.getElementById("openDelivery");
 const closeDelivery = document.getElementById("closeDelivery");
 const delivery = document.getElementById("deliveryModal");


 openDelivery.addEventListener("click", function() {
    delivery.style.display = "flex";
 });

 closeDelivery.addEventListener("click", function() {
    delivery.style.display = "none";
 });

 /* доставка оптом*/

 const openOptDelivery = document.getElementById("openOptDelivery");
 const closeOptDelivery = document.getElementById("closeOptDelivery");
 const optDelivery = document.getElementById("optDeliveryModal");


 openOptDelivery.addEventListener("click", function() {
    optDelivery.style.display = "flex";
 });

 closeOptDelivery.addEventListener("click", function() {
    optDelivery.style.display = "none";
 });

  /* гарантия */

 const openQuarantee = document.getElementById("openQuarantee");
 const closeQuarantee = document.getElementById("closeQuarantee");
 const guaranteeModal = document.getElementById("guaranteeModal");

 openQuarantee.addEventListener('click', function() {
    guaranteeModal.style.display = "flex";
 });

 closeQuarantee.addEventListener("click", function() {
    guaranteeModal.style.display = "none";
 });

 /* контакты */

 const openContacts = document.getElementById("openContacts");
 const closeContacts = document.getElementById("closeContacts");
 const contactsModal = document.getElementById("contactsModal");

 openContacts.addEventListener('click', function() {
    contactsModal.style.display = "flex";
 });

 closeContacts.addEventListener("click", function() {
    contactsModal.style.display = "none";
 });

 /* отзывы */

 const openReviews = document.getElementById("openReviews");
 const closeReviews = document.getElementById("closeReviews");
 const reviewsModal = document.getElementById("reviewsModal");

 openReviews.addEventListener('click', function() {
    reviewsModal.style.display = "flex";
 });

 closeReviews.addEventListener("click", function() {
    reviewsModal.style.display = "none";
 });

 const form = document.getElementById("userMessage");

 form.addEventListener("submit", function(event) {
     event.preventDefault();
 
     const userName = document.getElementById("username3").value;
     const userMessage = document.getElementById("message").value;
 
     const listItem = document.createElement('li');
     listItem.innerHTML = `<strong>Имя: </strong> ${userName}<hr>
     <strong>Ваш отзыв: </strong> 
     ${userMessage}<hr><br>`;
 
     document.getElementById("message-list").appendChild(listItem);
 
     document.getElementById("username").value = '';
     document.getElementById("message").value = '';
 });
 
 /* Корзина */

 const openBasket = document.getElementById("openBasket");
 const closeBasket = document.getElementById("closeBasket");
 const basketModal = document.getElementById("basketModal");
 const basketItems = document.getElementsByClassName("basket-item"); 

 openBasket.addEventListener('click', function() {
     if (basketItems.length === 0) {
         alert("Корзина пуста");
     } else {
         basketModal.style.display = "flex";
     }
 });
 
 closeBasket.addEventListener("click", function() {
     basketModal.style.display = "none";
 });



 /* слайд-шоу */
 const images = document.querySelectorAll('.image');
 let currentImageIndex = 0;

 function showImage(index) {
     images.forEach((image, i) => {
         if (i === index) {
             image.style.display = 'block';
         } else {
             image.style.display = 'none';
         }
     });
 }
 
 function nextImage() {
     currentImageIndex = (currentImageIndex + 1) % images.length;
     showImage(currentImageIndex);
 }
 setInterval(nextImage, 7000);
 showImage(currentImageIndex);


 const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const image = container.querySelector('.image');
    const textOverlay = container.querySelector('.text-overlay ');

    const originalText = textOverlay.textContent; 

    container.addEventListener('mouseover', () => {
        image.style.width = '1300px';
        image.style.height = '800px';
        image.style.cursor = 'pointer';
        
        
        textOverlay.textContent = image.getAttribute('data-text');
        textOverlay.style.background = 'rgba(0, 0, 0, 0.7)';
        textOverlay.style.cursor = 'pointer';
    });

    container.addEventListener('mouseout', () => {
        image.style.width = '1300px';
        image.style.height = '800px';
        image.style.cursor = 'default';
        
        
        textOverlay.textContent = originalText; 
        textOverlay.style.background = '';
    });
});