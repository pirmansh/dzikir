const show =  document.getElementById('show');
let batas = localStorage.getItem('angka');
let angka = 0;

let tab= document.getElementById('tap').addEventListener('click', function(e){

    show.innerHTML = `<p id="hasil">${angka++}</p>`;
    navigator.vibrate([50]);
    if(angka == parseInt(batas)){
        navigator.vibrate([500]);
        Swal.fire({
        icon: 'success',
        title: 'Alhamdulillah...',
        text: `Anda sudah berdzikir sebanyak ${batas}!`,
        });
        window.location.replace('https://pirmansh.github.io/dzikir/index.html');
    }
    e.preventDefault();

})