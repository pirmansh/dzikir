let input =  document.getElementById('input'),
    nilai = 0;


const mulai = document.getElementById('mulai').addEventListener('click', function(e) {

       if(input.value == ''){
      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Banyaknya dzikir belum di isi!',
        });

       } else{
        localStorage.setItem('angka', input.value);
        console.log(localStorage.getItem('angka'));
       }
       e.preventDefault();


});



