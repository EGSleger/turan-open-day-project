const scriptURL = 'https://script.google.com/macros/s/AKfycbymHzVE-YSounyfP0L6xh5Td4k5fHT0S9sMpD9XeCLAFiIBH3T4hLYXV0LUyv13pGNc/exec';
        const form = document.forms['submit-to-google-sheet'];
        const openModelCard1 = document.getElementById("open_model1");
        const openModelCard2 = document.getElementById("open_model2");
        const openModelCard3 = document.getElementById("open_model3");

        let clickedCardData = null;

        openModelCard1.addEventListener('click', () => {
            clickedCardData = '25 Апреля';
        });

        openModelCard2.addEventListener('click', () => {
            clickedCardData = '16 Мая';
        });

        openModelCard3.addEventListener('click', () => {
            clickedCardData = '9 Июня';
        });

        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            
            if (clickedCardData) {
                formData.append('data', clickedCardData);
            }

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => response.json())
                .then(data => {
                    console.log('Form and card data submitted successfully!', data);
                })
                .catch(error => console.error('Error!', error.message));
        });
