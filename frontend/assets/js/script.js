// Index

// Insert Course Page
const API_URL = 'http://localhost:3000/api/cursos';
const formICP = document.querySelector('#form');
formICP.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const nomeICP = document.querySelector('#nomeICP');
    const duracaoICP = document.querySelector('#duracaoICP')
    const descICP = document.querySelector('#descICP');
    const imagemICP = document.querySelector('#imagemICP').files[0];
    const reader = new FileReader();
    reader.onload = async () => {
        const img64Parse = reader.result;
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomeICP: nomeICP.value,
                duracaoICP: duracaoICP.value,
                descICP: descICP.value,
                imagemICP: img64Parse
            }),
        });
        formICP.reset();
    };
    reader.readAsDataURL(imagemICP);
});

// Course Page
async function showCourses(){
    const res = await fetch(API_URL);
    const cursos = await res.json();
    const courseContainer = document.querySelector(".courses-container");
    courseContainer.innerHTML =  "";
    cursos.forEach(curso => {
        courseContainer.innerHTML += `
            <div class="curso">
                <img src="${curso.curso_foto}">
                <h3>${curso.curso_name}</h3>
                <p class="duracao-course>${curso.curso_duracao}</p>
                <p class="desc-course>${curso.curso_desc}</p>
            </div>
        `;
    });
};

async function deleteCourse(id) {
    await fetch(`${API_URL}/${id}`,{method: 'DELETE'});
}