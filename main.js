const tileContainer = document.querySelector('.tile-container');

const createTiles = () => {
    const numberOfTiles = window.innerWidth <= 768 ? 18 : 36;

    for (let i = 1; i <= numberOfTiles; i++) {
        // タイルのコンテナを作成
        const tileItem = document.createElement('div');
        tileItem.classList.add('tile-item');

        tileItem.addEventListener('mouseenter', (e) => {
            e.target.classList.add('animate');
        })

        tileItem.addEventListener('mouseleave', (e) => {
            setTimeout(() => {
                e.target.classList.remove('animate');
            }, 1000);
        })

        // 表のタイル
        const tileFront = document.createElement('div');
        tileFront.classList.add('tile-front');
    
        // 裏のタイル
        const tileBack = document.createElement('div');
        tileBack.classList.add('tile-back');
    
        tileItem.appendChild(tileFront);
        tileItem.appendChild(tileBack);
        tileContainer.appendChild(tileItem);
    }
}

createTiles();
