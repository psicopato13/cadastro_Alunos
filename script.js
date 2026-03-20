let alunos = []

const nomeInput = document.getElementById("nome")
const notaInput = document.getElementById("nota")
const botaoAdicionar = document.getElementById("adicionar")
const botaoFiltrar = document.getElementById("filtrar")
const lista = document.getElementById("lista")

const renderizarLista = (listaAlunos) => {

  lista.innerHTML = ""

  listaAlunos.map(aluno => {

    const li = document.createElement("li")
    li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`

    li.style.color = aluno.nota >= 7 ? "green" : "red"

    lista.appendChild(li)
  })
}

botaoAdicionar.addEventListener("click", () => {

  const nome = nomeInput.value.trim()
  const nota = Number(notaInput.value)

  if (!nome || !nota) {
    alert("Preencha os campos corretamente!")
    return
  }

  alunos.push({ nome, nota })

  nomeInput.value = ""
  notaInput.value = ""

  renderizarLista(alunos)

})

botaoFiltrar.addEventListener("click", () => {

  const aprovados = alunos.filter(aluno => aluno.nota >= 7)

  renderizarLista(aprovados)
})