document.addEventListener('DOMContentLoaded', () => {
    // Tab Functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(link.getAttribute('data-tab')).classList.add('active');
        });
    });

    // Appointment Modal Functionality
    const appointmentModal = document.getElementById('appointmentModal');
    const appointmentBtns = document.querySelectorAll('#appointmentBtn, #appointmentBtnFloating');
    const appointmentClose = document.querySelector('.appointment-close');

    appointmentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            appointmentModal.style.display = 'block';
        });
    });

    appointmentClose.addEventListener('click', () => {
        appointmentModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == appointmentModal) {
            appointmentModal.style.display = 'none';
        }
    });

    // Login Modal Functionality
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const loginClose = document.querySelector('.login-close');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    loginClose.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Tab Functionality in Login Modal
    const loginTabLinks = loginModal.querySelectorAll('.tab-link');
    const loginTabContents = loginModal.querySelectorAll('.tab-content');

    loginTabLinks.forEach(link => {
        link.addEventListener('click', () => {
            loginTabLinks.forEach(item => item.classList.remove('active'));
            loginTabContents.forEach(item => item.classList.remove('active'));

            link.classList.add('active');
            loginModal.querySelector(`#${link.getAttribute('data-tab')}`).classList.add('active');
            loginModal.querySelector('#modalTitle').textContent = link.textContent === 'Login' ? 'Login to Your Account' : 'Create a New Account';
        });
    });

});
