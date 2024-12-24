let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },    
});
function openProduct1(name, price) {

    document.getElementById('modal-product-name').innerText = name;
    document.getElementById('modal-product-price').innerText = `Price: ₹${price.toFixed(2)}`;
    document.getElementById('modal-product-image').src =`menu-1.png`;
    document.getElementById('product-modal').style.display = 'flex';
    document.getElementById('product-modal').dataset.price = price; // Store price in modal for later use

    }
function openProduct2(name, price) {

        document.getElementById('modal-product-name').innerText = name;
        document.getElementById('modal-product-price').innerText = `Price: ₹${price.toFixed(2)}`;
        document.getElementById('modal-product-image').src = `menu-2.png`;
    
        document.getElementById('product-modal').style.display = 'flex';
        document.getElementById('product-modal').dataset.price = price; // Store price in modal for later use
    
        }
 function openProduct3(name, price) {

            document.getElementById('modal-product-name').innerText = name;
            document.getElementById('modal-product-price').innerText = `Price: ₹${price.toFixed(2)}`;
            document.getElementById('modal-product-image').src = `menu-3.png`;
        
            document.getElementById('product-modal').style.display = 'flex';
            document.getElementById('product-modal').dataset.price = price; // Store price in modal for later use
        
            }
 function openProduct4(name, price) {

                document.getElementById('modal-product-name').innerText = name;
                document.getElementById('modal-product-price').innerText = `Price: ₹${price.toFixed(2)}`;
                document.getElementById('modal-product-image').src = `menu-4.png`;
            
                document.getElementById('product-modal').style.display = 'flex';
                document.getElementById('product-modal').dataset.price = price; // Store price in modal for later use
            
                }
function openProduct5(name, price) {

                    document.getElementById('modal-product-name').innerText = name;
                    document.getElementById('modal-product-price').innerText = `Price: ₹${price.toFixed(2)}`;
                    document.getElementById('modal-product-image').src = `menu-5.png`;
                
                    document.getElementById('product-modal').style.display = 'flex';
                    document.getElementById('product-modal').dataset.price = price; // Store price in modal for later use
                
                    }
 function openProduct6(name, price) {

                        document.getElementById('modal-product-name').innerText = name;
                        document.getElementById('modal-product-price').innerText = `Price: ₹${price.toFixed(2)}`;
                        document.getElementById('modal-product-image').src = `menu-6.png`;
                    
                        document.getElementById('product-modal').style.display = 'flex';
                        document.getElementById('product-modal').dataset.price = price; // Store price in modal for later use
                    
                        }
                                          
                                    

function closeProductModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function purchaseProduct() {
    const name = document.getElementById('modal-product-name').innerText;
    const price = parseFloat(document.getElementById('product-modal').dataset.price);
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalAmount = price * quantity;

    // Save details in localStorage
    localStorage.setItem('productName', name);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('totalAmount', totalAmount);

    // Redirect to bill page
    window.location.href = "bill.html";
}

