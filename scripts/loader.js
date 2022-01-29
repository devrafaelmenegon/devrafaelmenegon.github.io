const loader = document.querySelector('.loader');
const root = document.querySelector('.root');

function load() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        root.style.display = 'block';
        setTimeout(() => root.style.opacity = 1, 50);
    }, 4000);
}

load();