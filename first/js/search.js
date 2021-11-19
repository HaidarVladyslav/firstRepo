const search = function() {
    const input = document.querySelector('.search-block > input');
    const seatchBtn = document.querySelector('.search-block > button');

    seatchBtn.addEventListener('click', () => {
        console.log(input.value);
    })
    
}

search()