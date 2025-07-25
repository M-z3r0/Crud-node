async function testeAPI(){
    await fetch('http://localhost:3000/api/cursos', {
        method: "GET",
        headers: {"Content-Type":"application/json"},
    });
};