export default function eMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
    console.log(validaIdade(dataNascimento));
}

function validaIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
    
    return dataAtual >= dataMais18;
}