let input =  document.getElementById('input'),
    nilai = 0;


let show = document.getElementById('btn');
const mulai = document.getElementById('mulai').addEventListener('click', function(e) {

       if(input.value == ''){
      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Banyaknya dzikir belum di isi!',
        });

       } else{
        localStorage.setItem('angka', input.value);
       }
       e.preventDefault();
       

});

show.addEventListener('click', function(e){

    console.log('123');
    e.preventDefault();

})

