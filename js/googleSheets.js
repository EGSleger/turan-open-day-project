const scriptURL = 'https://script.google.com/macros/s/AKfycbymHzVE-YSounyfP0L6xh5Td4k5fHT0S9sMpD9XeCLAFiIBH3T4hLYXV0LUyv13pGNc/exec';
        const form = document.forms['submit-to-google-sheet'];
        const openModelCard1 = document.getElementById("open_model1");
        const openModelCard2 = document.getElementById("open_model2");
        const openModelCard3 = document.getElementById("open_model3");

        let clickedCardData = null;

        openModelCard1.addEventListener('click', () => {
            clickedCardData = '25 апреля';
        });

        openModelCard2.addEventListener('click', () => {
            clickedCardData = '16 мая';
        });

        openModelCard3.addEventListener('click', () => {
            clickedCardData = '9 июня';
        });

        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    console.log('Form submitted successfully!', response);
                    if (clickedCardData) {
                        const formData = new FormData();
                        formData.append('data', clickedCardData);
                        return fetch(scriptURL, { method: 'POST', body: formData });
                    }
                })
                .then(response => {
                    if (response) {
                        console.log('Card data sent successfully!', response);
                    }
                })
                .catch(error => console.error('Error!', error.message));
        });
