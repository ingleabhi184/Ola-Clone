// const images = [
//     {
//         url: 'https://cdn.olaelectric.com/sites/evdp/pages/bike/motorcycle_page_banner_web_image.webp',
//         content: 'Explore Our New Motorcycle Range'
//     },
//     {
//         url: 'https://cdn.olaelectric.com/sites/evdp/pages/gig/home_banner_gig_web_image_v2.webp',
        
//         content: 'Welcome to OLA Electric'
//     },
//     {
//         url: 'https://cdn.olaelectric.com/sites/evdp/pages/home/homepage_no1ev_banner_web_image.webp',
//         content: 'India\'s #1 EV is here!'
//     },
   
//    {
//         url: 'https://cdn.olaelectric.com/sites/evdp/pages/sona/olasaona_banner_web_image.webp',
//         content: 'Saona - The Future of Mobility'
//     },
// ];

// let currentIndex = 0;
// const container = document.getElementById('image-container');
// const contentBox = document.getElementById('content-box');

// function updateImage() {
//     container.style.backgroundImage = `url('${images[currentIndex].url}')`;
//     contentBox.textContent = images[currentIndex].content;
// }

// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();
// }

// function prevImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateImage();
// }

// setInterval(nextImage, 3000); 

// updateImage();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttonss input');
    const images = document.querySelectorAll('.imagess img');

    buttons.forEach(button => {
        button.addEventListener('change', function() {
            images.forEach(img => img.style.display = 'none');
            document.querySelector(`#img${this.id.slice(-1)}`).style.display = 'block';
        });
    });

    // Trigger the change event on the checked input to show the initial image
    document.querySelector('.buttonss input:checked').dispatchEvent(new Event('change'));
});