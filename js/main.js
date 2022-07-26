window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});


const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const closeMenu = () => {
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
}

menuToggle.addEventListener('click', toggleMenu);
