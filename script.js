function carregar () {
  const msg = window.document.getElementById("msg")
  const img = window.document.getElementById("imagem")
  const data = new Date()
  var hora = data.getHours()
  const minuto = data.getMinutes()
   
  msg.innerHTML = `Agora são ${hora}:${minuto}`
  if (hora >0 && hora <12) {
    //Bom dia
    img.scr = "img/manha.jpg"
    document.body.style.background = "#2A5A7F"
  } else if (hora >=12 && hora <= 18) {
    //Boa Tarde
    img.src = "img/tarde.jpg"
    document.body.style.background = "#BF8D64"
  } else {
    //Boa noite
    img.src = "img/noite.jpg"
    document.body.style.background = "#302119"
  }
}
