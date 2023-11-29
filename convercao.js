
function CvPt() {

    var campoInput = document.querySelector('#pontos1')
    var campoInputValue = campoInput.value

    
    // campo de seleçao
    var pla = document.getElementsByClassName('plastico')[0].selected
    var vid = document.getElementsByClassName('vidro')[0].selected
    var pal = document.getElementsByClassName('papelao')[0].selected
    var alu = document.getElementsByClassName('aluminio')[0].selected
    var oleoM = document.getElementsByClassName('oleoMineral')[0].selected
    var oleoV = document.getElementsByClassName('oleoVegetal')[0].selected
    var lixE= document.getElementsByClassName('lixoEletronico')[0].selected
    
    var valorMaterial = 0

    if (pla === true) valorMaterial = 1.50
    if (vid === true) valorMaterial = 0.25
    if (pal === true) valorMaterial = 0.65
    if (alu === true) valorMaterial = 8.50
    if (oleoM === true) valorMaterial = 2
    if (oleoV === true) valorMaterial = 1.50
    if (lixE === true) valorMaterial = 15


    //innerHTML serve para escrever na tela
    document.querySelector('.resultado').innerHTML = (campoInputValue * valorMaterial).toFixed(2)


    // if (radioInput[0].checked === true) {
    //     document.querySelector('.resultado').innerHTML = (campoInputValue * kiloPorPontos / pontosPorDinheiro).toFixed(2)
    //     document.querySelector('.resultadoEmPontos').innerHTML = (campoInputValue * kiloPorPontos)
    // }
    
    // if (radioInput[1].checked === true) {
        //     document.querySelector('.resultado').innerHTML = (campoInputValue / pontosPorDinheiro).toFixed(2)
        //     document.querySelector('.resultadoEmPontos').innerHTML = (campoInputValue)
        // }/
        
        // var kiloPorPontos = 5
        // var pontosPorDinheiro = 2
        // var radioInput = document.getElementsByName('kgpontos')
}
