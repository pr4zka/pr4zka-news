import { PostAddSharp } from '@material-ui/icons';
import view from '../views/posts.html'

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
}
export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view;

    const postsElement = divElement.querySelector('#posts')
    let totalPosts = divElement.querySelector('#Total')



    const pages = await getPosts();

    totalPosts.innerHTML = pages.lenght;
    pages.forEach(post => {
        postsElement.innerHTML += `
         <li class="list-group-item border-primary bg-dark text-white">
         <h5>${pages.title}</h5>
         <p>${pages.body}</p>
         </li>
        `
    });

    return divElement;
}