const studants = [
  {
    nome: "Juliano",
    n1: 60,
    n2: 70,
  },
  {
    nome: "Gabriela",
    n1: 95,
    n2: 98,
  },
  {
    nome: "Beatriz",
    n1: 100,
    n2: 100,
  },
  {
    nome: "Vilma",
    n1: 85,
    n2: 88,
  },
  {
    nome: "Anielli",
    n1: 89,
    n2: 87,
  }
]
  
function average(n1, n2) {
  return (n1 + n2) / 2
}

function printStudant(studant) {
  const userAverage = average(studant.n1, studant.n2)

  if (userAverage > 70) {
    return `
    A media do(a) aluno(a) ${studant.nome} é ${average(studant.n1, studant.n2)}.
    Parabéns, ${studant.nome}! Você foi aprovado(a) no consurso!
  `
  } else {
    return `
    A media do(a) aluno(a) ${studant.nome} é ${average(studant.n1, studant.n2)}.
    Não foi dessa vez, ${studant.nome}! Tente novamente!
  `
  }
}

for (let studant of studants) {
  let message = printStudant(studant)
  alert(message)
}