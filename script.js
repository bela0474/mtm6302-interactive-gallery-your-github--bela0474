document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.getElementById('close');

    const imageData = [{
            src: 'images/1.jpg',
            alt: 'Chevrolet Super Truck',
            caption: 'Ringbrothers-Chevrolet-Super-Truck-Enyo'
        },
        {
            src: src = "images/2.jpg",
            alt: 'Arcfox GT Race',
            caption: '2021-Arcfox-GT-Race-Edition'
        },
        {
            src: src = "images/3.jpg",
            alt: 'Bugatti Chiron',
            caption: '2022-Bugatti-Chiron-Profilee'
        },
        {
            src: src = "images/4.jpg",
            alt: 'Pininfarina Viritech',
            caption: '2022-Pininfarina-Viritech-Apricale'
        },
        {
            src: src = "images/5.jpg",
            alt: 'errari 296',
            caption: '2023-Ferrari-296-GT3'
        },
        {
            src: src = "images/6.jpg",
            alt: 'Ferrari 812',
            caption: '2023-Ferrari-812-Competizione-Tailor-Made'
        },
        {
            src: src = "images/7.jpg",
            alt: 'Honda Civic Type R',
            caption: '2023-Honda-Civic-Type-R'
        },
        {
            src: src = "images/8.jpg",
            alt: 'Honda Civic Type R',
            caption: '2023-Honda-Civic-Type-R-Dashboard'
        },
        {
            src: src = "images/9.jpg",
            alt: 'Honda Civic Type R',
            caption: '2023-Honda-Civic-Type-R-Motor'
        },
        {
            src: src = "images/10.jpg",
            alt: 'Lamborghini Invencible',
            caption: '2023-Lamborghini-Invencible'
        },
        {
            src: src = "images/11.jpg",
            alt: 'McLaren Artura',
            caption: '2023-McLaren-Artura-Trophy'
        },
        {
            src: src = "images/12.jpg",
            alt: 'McLaren Solus',
            caption: '2023-McLaren-Solus-GT'
        },
        {
            src: src = "images/13.jpg",
            alt: 'Mercedes AMG ONE',
            caption: '2023-Mercedes-AMG-ONE'
        },
        {
            src: src = "images/14.jpg",
            alt: 'Pagani Utopia',
            caption: '2023-Pagani-Utopia'
        },
        {
            src: src = "images/15.jpg",
            alt: 'Aston Martin DBS 770',
            caption: '2024-Aston-Martin-DBS-770-Ultimate-Volante'
        },
        {
            src: src = "images/16.jpg",
            alt: 'Bugatti W16 Mistral',
            caption: '2024-Bugatti-W16-Mistral'
        },
        {
            src: src = "images/17.jpg",
            alt: 'Toyota GR Supra',
            caption: '2024-Toyota-GR-Supra-45th-Anniversary-Edition-001'
        },
        {
            src: src = "images/18.jpg",
            alt: 'Zenvo Aurora',
            caption: '2026-Zenvo-Aurora-Tur-004-1080'
        },

    ];

    function createGallery() {
        imageData.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.dataset.index = index; 

            imgElement.addEventListener('click', showImageDetails);
            galleryContainer.appendChild(imgElement);
        });
    }

    function showImageDetails(event) {
        const index = event.target.dataset.index;
        const image = imageData[index];

        modalImage.src = image.src;
        modalDetails.innerHTML = `<h2>${image.alt}</h2><p>${image.caption}</p>`;

        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    createGallery();
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.getElementById('close');


    function createGallery() {
        imageData.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.dataset.index = index; 

            imgElement.addEventListener('click', showImageDetails);
            galleryContainer.appendChild(imgElement);
        });
    }

    function showImageDetails(event) {
        const index = event.target.dataset.index;
        const image = imageData[index];

        modalImage.src = image.src;
        modalDetails.innerHTML = `<h2>${image.alt}</h2><p>${image.caption}</p>`;

        modal.style.display = 'block';

        modalImage.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    createGallery();
});


  