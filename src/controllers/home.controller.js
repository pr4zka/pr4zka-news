
import views from '../views/home.html'
export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('Click', () => {
        alert('click!!!')
    })
    return divElement;
};
