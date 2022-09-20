//search ?id=1
const id = new URLSearchParams(window.location.search).get('id');
const button = document.querySelector('.delete');

const renderDetails = async() =>{
    let uri = 'http://localhost:3000/posts/'+id;
    const res = await fetch(uri);
    const post = await res.json();
    const template = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    let blog = document.querySelector('.detail');
    blog.innerHTML = template;

}

button.addEventListener('click', async(e)=>{
    e.preventDefault();
    await fetch('http://localhost:3000/posts/'+id, {
        method : "DELETE"
    });
    window.location.replace('/index.html');
});

window.addEventListener('DOMContentLoaded',()=>renderDetails());