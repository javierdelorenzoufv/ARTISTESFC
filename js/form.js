document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
    });

    form.addEventListener('submit', (event) => {
        let valid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                valid = false;
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });

    function validateInput(input) {
        const errorText = input.parentElement.querySelector('.error-text');
        if (!input.validity.valid || !input.value.trim()) {
            input.style.borderColor = 'red';
            errorText.style.display = 'block';
            return false;
        } else {
            input.style.borderColor = '#ccc';
            errorText.style.display = 'none';
            return true;
        }
    }
});
