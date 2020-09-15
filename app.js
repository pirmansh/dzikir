let input =  document.getElementById('input');

const mulai = document.getElementById('mulai').addEventListener('click', function(e) {

       if(isNaN(input.value)){

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hanya input angka!',
        });

       } else{


        if(input.value == ''){
      
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Form input belum di isi!',
          });
         
  
         } else{
          localStorage.setItem('angka', input.value);
          input.value = '';
          window.location.replace('./app.html')
          // window.location.replace('https://pirmansh.github.io/dzikir/app.html');
         }

       }

       e.preventDefault();


});



