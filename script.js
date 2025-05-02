function mostrarSecao(secao) {
    document.querySelectorAll('.conteudo').forEach(el => el.style.display = 'none');
    document.getElementById(secao).style.display = 'block';
}
