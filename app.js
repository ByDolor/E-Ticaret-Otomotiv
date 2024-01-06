let ItemList = [];

const toggleModel = () => {
 const basketModelEl = document.querySelector(".basket_model");
 basketModelEl.classList.toggle("active");
};

const getItems = () => {
    fetch("product.json")
    .then((res) => res.json())
    .then((Items) => {
    ItemList = Items;
    createBookTypesHtml();
    })
};

getItems();

const createItemStars = (starRate) => {
   let starRateHtml = "";
   for(let i = 1; i <= 5; i++){
    if(Math.round(starRate) >= i) 
    starRateHtml += `<i class="bi bi-star-fill active"></i>`;
    else starRateHtml += `<i class="bi bi-star-fill"></i>`;   
   }
 return starRateHtml;
};

const BOOK_TYPES = {
  ALL: "Tümü",
  YağFiltresi: "Yağ Filtreleri",
  HavaFiltresi: "Hava Filtreleri",
  YakıtFiltresi: "Yakıt Filtreleri",
  PolenFiltresi: "Polen Filtreleri",
};

const createBookItemsHtml = () => {
   const ItemListEl = document.querySelector(".Item_List");
   let ItemListHtml = "";
   ItemList.forEach((Item, index) => {
        ItemListHtml += `<div class="col-5 ${index % 2 == 0 && "offset-2"} my-5">
        <div class="row book_card">
            <div class="col-6">
              <img class="img-fluid shadow" 
              src="${Item.imgSource}"
              width="258" height="400"  />
            </div>
            <div class="col-6 d-flex flex-column just-content-between">
              <div class="book_detail">
              <span class="fos gray fs-5">${Item.author}</span><br/>
              <span class="fs-4 fw-bold">${Item.name}</span><br/>
              <span class="book_star-rate">        
               ${createItemStars(Item.starRate)}
                <span class="gray">${Item.reviewCount} rewiews</span>
              </span> 
            </div>
            <br/>
            
              <p class="book_description  fos gray">
              ${Item.description}
              </p>
              <br/>
              <div>
                <span class="black fw-bold fs-4 fw-bold me-2">${Item.price}TL</span>
                ${Item.oldPrice ? `<span class="gray text-decoration-line-through fs-4 fw-bold">${Item.oldPrice}TL</span>` : ""}
              </div>
             <br/>
             <br/>
              <button class="button_purple">SEPETE EKLE</button>
              </div>
            
        </div>
        </div>`;
   }); 

   ItemListEl.innerHTML = ItemListHtml;
};

const createBookTypesHtml = () => {
    const filterEl = document.querySelector(".filter");
    let filterHtml = "";
    let filterTypes = ["ALL"];

    ItemList.forEach(book => {
      if (filterTypes.findIndex(filter => filter ==book.type) === -1) {
        filterTypes.push(book.type);
      }
    });

    filterTypes.forEach(type => {
      filterHtml += `<li class="active">${BOOK_TYPES[type] || type}</li>`;
    });

    filterEl.innerHTML = filterHtml;
}; 
