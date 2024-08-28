function blockRect(r1, r2){
    //r1 representa o objeto player
    //r2 representa o objeto bloqueador

    //Catetos
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();

    //Soma das metades dos objetos no eixo X
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    //Soma das metades dos objetos no eixo Y
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    // Se a distancia entre o centro do objeto for menor que a soma da largura ou da altura
    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
        //Verifica se o objeto do cenário é 
        if(r2.pegar){
            //Se tocou no elemento ele recebe visibilidade false e some
            r2.visible = false;
            //Declara uma variavel 'img' e cria um novo elemento imagem html 
            let img = document.createElement("img");
            //Declara uma variavel vida que e atribui a ala a tag span com id 'vida' 
            let vida = document.getElementById("vida");
            //Seleciona a imagem que será exibida na nova tag img
            img.src = "assets/imagens/vida.png";
            //Altera a largura da imagem para 30 px
            img.width = 30;
            //Debug da variavel vida no console
            console.log(vida);
            //Adiciona a imagem dentro do campo vida
            vida.appendChild(img);

            //Função de tempo que espera 5 segundos para o elemento voltar a tela
            setTimeout(function (){
                r2.visible = true;
            }, 120000);
        }

        //Variaveis que verificam quanto um objeto se sobrepos a outro
        var overlapX = sumHalfWidth - Math.abs(catX);
        var overlapY = sumHalfHeight - Math.abs(catY);
        //Colisão por cima ou por baixo
        if(overlapX >= overlapY){
            // Colisão por cima
            if(catY > 0){
                r1.posY += overlapY;
            // Colisão por baixo
            }else{
                r1.posY -= overlapY;
            }
        //Colisão a esquerda ou a direita
        }else{
            // Colisão Pela esquerda
            if(catX > 0){
                r1.posX += overlapX; 
            //Colisão pela direita
            }else{
                r1.posX -= overlapX;
            }
        }        
    }    
}