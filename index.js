const show =  document.getElementById('show');
batas = localStorage.getItem('angka');
angka = 0;

let tab= document.getElementById('tap').addEventListener('click', function(e){

    show.innerHTML = `<p id="hasil">${angka++}</p>`;
    if(angka == parseInt(batas)){
     
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        });
    }
    e.preventDefault();

})