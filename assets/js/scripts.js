document.addEventListener('DOMContentLoaded', function () {
  // Adiciona um ouvinte de evento para o botão de upload
  var uploadBtn = document.getElementById('uploadBtn')
  uploadBtn.addEventListener('click', function () {
    // Exibe o modal
    var uploadModal = document.getElementById('uploadModal')
    uploadModal.style.display = 'block'
  })

  // Adiciona um ouvinte de evento para o botão de enviar no modal
  var enviarBtn = document.getElementById('enviarBtn')
  enviarBtn.addEventListener('click', function () {
    // Coloque aqui a lógica para realizar o upload
    // Por exemplo, você pode usar AJAX para enviar os dados para o servidor
    alert('Upload realizado com sucesso!')
    // Fecha o modal após o upload
    var uploadModal = document.getElementById('uploadModal')
    uploadModal.style.display = 'none'
  })

  var cancelarBtn = document.getElementById('cancelarBtn')
  cancelarBtn.addEventListener('click', function () {
    // Fecha o modal ao clicar em Cancelar
    var uploadModal = document.getElementById('uploadModal')
    uploadModal.style.display = 'none'
  })

  // Adiciona um ouvinte de evento para o botão de fechar no modal
  var closeBtn = document.getElementById('closeBtn')
  closeBtn.addEventListener('click', function () {
    // Fecha o modal ao clicar no botão de fechar (X)
    var uploadModal = document.getElementById('uploadModal')
    uploadModal.style.display = 'none'
  })
})

/* -------------- Redirecionamento -------------------- */

function redirecionar() {
  var tipoUsuario = document.querySelector(
    'input[name="inlineRadioOptions"]:checked'
  )

  if (tipoUsuario) {
    var paginaDestino = tipoUsuario.value + '.html'
    window.location.href = paginaDestino
  } else {
    alert('Selecione um tipo de usuário antes de salvar.')
  }
}
