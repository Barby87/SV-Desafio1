
const btn = document.getElementById('btn');
function comment() {
    let comments = document.getElementById('addComment').value;
    document.getElementById('addComment').value = '';
    const containerComment = document.getElementById('containerComment');
    const newComments = document.createElement('div');

    //validar que el textarea tenga un comentario
    if (comments.length === 0 || comments === null) {
        alert('Debes ingresar un mensaje');
        return false;
    }

    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'trash');
    const separator = document.createElement('hr');

    const contenedorElemento = document.createElement('p');
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(trash);
    newComments.appendChild(contenedorElemento);
    newComments.appendChild(separator);
    containerComment.appendChild(newComments);

    trash.addEventListener('click', () => {
        containerComment.removeChild(newComments);
    })

}





