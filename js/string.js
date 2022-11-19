    const navEL = document.querySelector('.navbar');
    console.log(document.getElementsByClassName('.navbar'))
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navEL.classList.add('navbar-scrolled')
        } else if (window.scrollY < 56) {
            navEL.classList.remove('navbar-scrolled');
        }
    });
