// Định dạng dự liệu kiểu chuỗi
// Javasript Object Notation = JSON
// JSON : Number , Boolean, Null, Array , Object, String
// Mã hoá / giải mã 
// Stringify --> Từ javascript type > JSON
// parse   --> Từ JSON > Javascript types
var containerProducts = document.querySelector('.container-products');
var dataProducts = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        description: 'food'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        description: 'food'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        description: 'food'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'drink'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'drink'
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'drink'
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3JlbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        description: 'anthor choose'
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1477505982272-ead89926a577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNyZW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'anthor choose'
    },
    {
        id: 9,
        img: 'https://images.unsplash.com/photo-1528701790053-56b0f31e4577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNyZW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'anthor choose',
    },
];

function renderProducts(){
    var productsSection = document.createElement('Div');
        productsSection.className = 'product-content';
    var html = '';
    for(let getItem of dataProducts){
        html += `
        <div class="details-products" data-category="${getItem.description}">
        <img src="${getItem.img}" alt="" class="img-product">
        </div>`
    }
       productsSection.innerHTML = html;
       containerProducts.appendChild(productsSection);
}

renderProducts()

function userChoose(){
    var btn = document.querySelectorAll('.btn');
        btn.forEach(function(currentItem){
            currentItem.addEventListener('click',function(event){
                var item = document.querySelectorAll('.details-products');    
                    item.forEach(function(el){
                        if(event.target.title === el.getAttribute('data-category')){
                            el.classList.remove('hide');
                            console.log(el);
                        }else if(event.target.title === 'all'){
                            el.classList.remove('hide');
                        }
                        else{
                            el.classList.add('hide');
                        }
                    })
            })
        })
}
userChoose()
