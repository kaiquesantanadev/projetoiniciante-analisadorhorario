function carregar() {
    var msg =document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var favicon = document.getElementById('favicon')
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    
    if (hora >=6 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#dae0bf'
        favicon.setAttribute("href", "faviconsol.ico")
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!!
        img.src = 'fototarde.jpg'
        document.body.style.background = "#b9846f"
        favicon.setAttribute("href", "favicontarde.ico")
    } else {
        // BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = "#837c7c"
        favicon.setAttribute("href", "faviconlua.ico")
    }
}
