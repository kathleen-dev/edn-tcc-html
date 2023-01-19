// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function sendEmail(){
  swal({
    title: "Quer continuar?",
    text: "Você vai enviar um e-mail para contratação!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Banco de Currículos", "E-mail enviado com sucesso!", "success");
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}
