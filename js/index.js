let searchForm = document.querySelector('.search');
const renderPosts = async(search) =>{
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    if(search){
        uri += `&q=${search}`;
    }
    const res = await fetch(uri);
    const posts = await res.json();
    let template = '';
    posts.forEach(p =>{
        template += `
            <div class="post">
                <h2>${p.title}</h2>
                <p><small>${p.likes}</small></p>
                <p>${p.body.slice(0,200)}</p>
                <a href="/detail.html?id=${p.id}">read more...</a>
            </div>
        `;
    })
    let blog = document.querySelector('.blogs');
    blog.innerHTML = template;
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    renderPosts(searchForm.search.value.trim());
})
window.addEventListener('DOMContentLoaded',()=>renderPosts());