

maxtiros = 15 
tirosCertos = 0
const tabuleiro = [
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,0,1,1,1,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]
const tabuleiroBatalha = document.getElementById('batalha')
const preencerTabuleiro = ()=>{
    for (let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let posicao = document.createElement('div')
            if(tabuleiro [i][j] == 1){
                posicao.setAttribute ('data-alvo', 1)
            }else{
                posicao.setAttribute('data-alvo', 0)
            }
            tabuleiroBatalha.appendChild(posicao)
            posicao.style.top = (i * 50) +'px'
            posicao.style.left = (j * 50 )+'px'

        }
    } 
 }
    
  const lancarTorpedo = (event) =>{
    if(event.target === event.currentTarget){
        return
    }
   
    
    let value = event.target.getAttribute('data-alvo')
        if(value == '0'){
            event.target.style.background = 'darkgrey'
            event.target.setAttribute('data-alvo', 3)
        }else if(value === '1'){
            event.target.style.background = 'blue'
            event.target.setAttribute('data-alvo', 2)
            tirosCertos++
            if (tirosCertos === maxtiros) {
                alert('Todas as embarcaçoes foram afundadas, Voce Venceu !!')
                location.reload()
            }
        }
        else if (value ==='2'){
            alert('Uma embarcação ja foi atingida neste local')
        }
        else if(value === '3'){
            alert('Voce ja atirou neste local ')
        }
     
    }
    tabuleiroBatalha.addEventListener('click', lancarTorpedo ,false)
    preencerTabuleiro()