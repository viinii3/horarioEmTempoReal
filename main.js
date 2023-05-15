function carregar() {
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');
    const data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        img.src = 'https://c.pxhere.com/photos/df/53/atmosphere_beach_cloudiness_clouds_cloudscape_cloudy_dark_clouds_dawn-1540365.jpg!s2';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'https://c.wallhere.com/photos/ff/23/sun_rays_clouds-63786.png!d';
        document.body.style.background = '#F4A460'
    } else {
        img.src = 'https://images6.alphacoders.com/776/776980.png';
        document.body.style.background = '#191970'
    }
}

