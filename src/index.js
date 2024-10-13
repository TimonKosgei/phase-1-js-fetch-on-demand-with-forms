const init = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let id = e.target.searchByID.value
    fetch(`http://localhost:3000/movies/${id}`)
    .then(res => res.json())
    .then(movies => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.textContent = movies.title;
        summary.textContent = movies.summary;
    })
  })
}

document.addEventListener('DOMContentLoaded', init);