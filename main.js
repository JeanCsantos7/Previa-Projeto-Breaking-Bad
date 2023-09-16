function ativar()
{

 const menu = document.querySelector('.nav-bar')
 
 if(menu.classList.contains('open'))
 {

   menu.classList.remove('open')

 }

 else
 {
  menu.classList.add('open')
 

 }

}

function mudar_fundo() {
  const background = document.querySelector('.background');
   background.style.backgroundImage = 'none';
   background.innerHTML = '<video controls src="./Assets/video.mp4"></video>'
   



}
























