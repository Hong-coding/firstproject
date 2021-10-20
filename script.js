(function(){

    'use strict'; //★★★★★★★

    
    let currentImage = 0;
    const myphotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; 

    const container = document.getElementById('content');
    const nextBtn = document.getElementById( 'next' );
    const prevBtn = document.getElementById( 'previous' );

    
    
    nextBtn.addEventListener('click', function(event){     // onclick속성 대신 이벤트리스너 매서드 입히기
        event.preventDefault();                         // 초기화 되지 않게 현재 모습유지

        currentImage++;
        if (currentImage>(myphotos.length-1)){ currentImage = 0; }  // 마지막 사진다음 다시 첫 사진으로 감
        
        swapimage();
    }) 
    
    prevBtn.addEventListener('click', function(event){    
    //    document.getElementById('previous').addEventListener('click', function(event){   바로 이렇게 써도 됨  

        event.preventDefault();                         

        currentImage--;
        if (currentImage< 0){(currentImage = myphotos.length-1)}  

        swapimage();
    }) ;


    // function은 순서가 앞으로 가지 않아도 작동하네 변수랑 달리 
    function swapimage(){
        const newSlide = document.createElement('img');                //★const★ creating the new slide on top. page에 없지만 브라우저에 생김. 
        newSlide.src = `slides/${myphotos[currentImage]}`            //변수이름이니까 틱마크 set the source to 폴더 안에 있는 몇번째 이미지를 가지고
        newSlide.className = 'fadeinimg';           //css에 추가한 클래스이름으로 지정되어서 
        container.appendChild(newSlide);            //뉴슬라이드가 컨테이너 끝에 추가시킴. put it on the page //everytime, it's adding more images to the DOM. 

        //remove extra children
        if (container.children.length>2) {container.removeChild(container.children[0]);}    //컨테이너의 칠드런 = 이미지. 0번째 이미지가 bottom이미지   //removeChild()매서드. = 다큐먼트 매서드
        //이미지가 아래 있는게 위에 보이는 이유는 , 페이지는 render됨 위에서부터 아래순서로 가면서. , 컨테이너가 포지션 고정absolute를 하는 이유가 페이지에서 맨 위에 쌓이게 되는 것.  


    }



})();