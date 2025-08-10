document.addEventListener('DOMContentLoaded', () => {
    const shopNowBtn = document.querySelector('.shop-now-btn');

    shopNowBtn.addEventListener('click', () => {
        console.log('Shop Now button clicked! Redirecting to products...');
        document.querySelector('.products-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    