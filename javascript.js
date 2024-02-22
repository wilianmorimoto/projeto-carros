let listacar = [
    {
        nome: 'Bugatti Chiron Super Sport 300+',
        img: 'img/0.jpg',
        desc: 'O Bugatti Chiron Super Sport 300+ lidera a lista dos carros mais rápidos do mundo, conquistando velocidades impressionantes. Com uma velocidade máxima de 490,48 km/h, esse supercarro é equipado com um motor de 8 litros e 16 cilindros, capaz de gerar incríveis 1.578 cv de potência.'
    },
    {
        nome: 'SSC Tuatara',
        img: 'img/1.jpg',
        desc: 'O SSC Tuatara é um verdadeiro ícone de velocidade e potência. Com uma velocidade máxima de 484,53 km/h, esse carro supera os limites do desempenho automotivo.'
    },
    {
        nome: 'Koenigsegg Jesko Absolut',
        img: 'img/2.jpg',
        desc: 'O Koenigsegg Jesko Absolut é conhecido por sua velocidade extrema e design inovador. Com uma velocidade máxima de 532,93 km/h, esse carro incorpora a excelência da engenharia automotiva.'
    },
    {
        nome: 'Rimac Nevera',
        img: 'img/3.jpg',
        desc: 'O Rimac Nevera é um carro elétrico de alto desempenho que redefine os limites da velocidade. Com uma velocidade máxima de 412,35 km/h, esse carro é movido por quatro motores elétricos que produzem uma potência combinada de 1.914 cv.'
    },
    {
        nome: 'McLaren Speedtail',
        img: 'img/4.jpg',
        desc: 'Mais do que qualquer outra marca nesta lista, a McLaren conhece os hipercarros que quebram recordes. O lendário McLaren F1 manteve o recorde de velocidade por mais de duas décadas, até a chegada do Bugatti Veyron. O novo McLaren Speedtail não vai recuperar o recorde do F1 com uma velocidade máxima de 402 km/h, mas o hipercarro de 1.050 cv e US$ 2 milhões (R$ 9,35 milhões) é, sem dúvida, o carro mais bonito desta lista.'
    },
    {
        nome: 'Hennessey Venom F5',
        img: 'img/5.jpg',
        desc: 'As altas velocidades não são domínio exclusivo das marcas europeias. Os americanos da Hennessey Performance Engineering também sabem algo sobre isso. Enquanto o antigo Venom GT chegava a até 428 km/h, a Hennessey afirma que o próximo Venom F5 passará de 499 km/h, graças a um V8 6.6 biturbo duplo que produz 1.842 cv e 164,9 kgfm de torque. Enquanto o preço é inferior ao de alguns de seus rivais europeus, começando em US$ 1,8 milhões (R$ 8,4 milhões), a Hennessey está planejando construir apenas 24 exemplares.'
    }
]

listacar.map((carro, posicao) => {
    let cardcarro = document.getElementById('cards')
    cardcarro.innerHTML += `
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    `
})

function zoomImg(posicao) {
    let carroselec = listacar[posicao]
    document.getElementById('nomecarro').innerHTML = carroselec.nome
    document.getElementById('desccarro').innerHTML = carroselec.desc
    document.getElementById('imgmodal').src = carroselec.img

    new bootstrap.Modal('#zoomImg').show()
}

function alterartema() {
    let tema = document.querySelector('html').getAttribute('data-bs-theme')
    if (tema === "dark") {
        document.querySelector('html').setAttribute('data-bs-theme', 'light')
        document.querySelector('#alterartema').innerHTML = `<i class="bi bi-moon"></i>`
    } else {
        document.querySelector('html').setAttribute('data-bs-theme', 'dark')
        document.querySelector('#alterartema').innerHTML = `<i class="bi bi-brightness-high"></i>`
    }
}