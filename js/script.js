console.log("hello I am linked");

let world = document.querySelector("#world");
let euro = document.querySelector("#europe");
let asia = document.querySelector("#asia");
let usa = document.querySelector("#usa");
let aus = document.querySelector("#aus");
let search = document.querySelector("#searchFilter");
let searchVariable = document.querySelector("#searchWord");

// let yourKey = '';

let url = "https://gnews.io/api/v4/search?q=example&token=" + yourKey;
let urlEurope = "https://gnews.io/api/v4/top-headlines?country=gb&token=" + yourKey;
let urlAsia = "https://gnews.io/api/v4/top-headlines?country=cn&token=" + yourKey;
let urlUSA = "https://gnews.io/api/v4/top-headlines?country=us&token=" + yourKey;
let urlAus = "https://gnews.io/api/v4/top-headlines?country=au&token=" + yourKey;


// Appending data to Page

$.ajax({
    type: 'GET',
    url: url,
    success: function(data){

        $('#world').empty().append(
            `
            <h3 class="active">World</h3>
            `
        )
        $('#europe').empty().append(
            `
            <h3 class="countrySelection--h3">Europe</h3>
            `
        )
        $('#asia').empty().append(
            `
            <h3 class="countrySelection--h3">Asia</h3>
            `
        )
        $('#usa').empty().append(
            `
            <h3 class="countrySelection--h3">USA</h3>
            `
        )
        $('#aus').empty().append(
            `
            <h3 class="countrySelection--h3">Australia</h3>
            `
        )
        data.articles.forEach((item, f) => {
            item.id = f + 1;
        })

        let i;
        for (i = 0; i < data.articles.length; i++){

            $('#newsContainer').append(      
                `
                <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
                <div id="newsIMG" class="newsContainer--news__newsIMG">
                <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                </div>
                <div id="newsTitle" class="newsContainer--news__newsTitle">
                <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                </div>
                </div>
                `
            );
        }
        modal();
    }
});
 



// World Filter

function filterWorld(){

    $.ajax({
        type: 'GET',
        url: url,
        success: function(data){

            $('#newsContainer').empty().append(
                ''
            );

            $('#world').empty().append(
                `
                <h3 class="active">World</h3>
                `
            )
            $('#europe').empty().append(
                `
                <h3 class="countrySelection--h3">Europe</h3>
                `
            )
            $('#asia').empty().append(
                `
                <h3 class="countrySelection--h3">Asia</h3>
                `
            )
            $('#usa').empty().append(
                `
                <h3 class="countrySelection--h3">USA</h3>
                `
            )
            $('#aus').empty().append(
                `
                <h3 class="countrySelection--h3">Australia</h3>
                `
            )

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            let i;
            for (i = 0; i < data.articles.length; i++){
    
                $('#newsContainer').append(
                            
                    `
                    <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
    
                    <div id="newsIMG" class="newsContainer--news__newsIMG">
                    <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                    </div>
    
                    <div id="newsTitle" class="newsContainer--news__newsTitle">
                    <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                    </div>
    
                    </div>
                    `
                );
            }
            modal();
        }
    });
};



// Modal

function modal(){

    $.ajax({
        type: 'GET',
        url: url,
        success: function(data){

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            $(".newsContainer--news").click(function(){

                let i = 0;
                for (i = 0; i < data.articles.length; i++){

                    let individualArticle = data.articles[i];

                    if(parseInt(this.id) === individualArticle.id){
            
                        $("#newsModalInfo").empty().append(
                            `
                            <h2 class="modalTitle">${individualArticle.title}</h2>
                            <h6 class="modalDate">${individualArticle.publishedAt}</h6>
                            
                            <div class="modalIMGcontainer">
                            <img class="modalIMGcontainer--img" src="${individualArticle.image}" alt="Article Image">
                            </div>

                            <h4 class="modalContent">${individualArticle.content}</h4>
                            `
                        );
                    }
                }
            });
        }
    }
)};


// Modal Finished





// Europe Filter

function filterEurope(){

    $.ajax({
        type: 'GET',
        url: urlEurope,
        success: function(data){

            $('#newsContainer').empty().append(
            );

            $('#world').empty().append(
                `
                <h3 class="countrySelection--h3">World</h3>
                `
            )
            $('#europe').empty().append(
                `
                <h3 class="active">Europe</h3>
                `
            )
            $('#asia').empty().append(
                `
                <h3 class="countrySelection--h3">Asia</h3>
                `
            )
            $('#usa').empty().append(
                `
                <h3 class="countrySelection--h3">USA</h3>
                `
            )
            $('#aus').empty().append(
                `
                <h3 class="countrySelection--h3">Australia</h3>
                `
            )

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })
    
            let i;
            for (i = 0; i < data.articles.length; i++){
    
                $('#newsContainer').append(
                            
                    `
                    <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
    
                    <div id="newsIMG" class="newsContainer--news__newsIMG">
                    <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                    </div>
    
                    <div id="newsTitle" class="newsContainer--news__newsTitle">
                    <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                    </div>
    
                    </div>
                    `
                );
            }
            modalEuro();
        }
    });
};



// Europe Modal


function modalEuro(){

    $.ajax({
        type: 'GET',
        url: urlEurope,
        success: function(data){

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            $(".newsContainer--news").click(function(){

                let i = 0;
                for (i = 0; i < data.articles.length; i++){

                    let individualArticle = data.articles[i];

                    if(parseInt(this.id) === individualArticle.id){
            
                        $("#newsModalInfo").empty().append(
                            `
                            <h2 class="modalTitle">${individualArticle.title}</h2>
                            <h6 class="modalDate">${individualArticle.publishedAt}</h6>
                            
                            <div class="modalIMGcontainer">
                            <img class="modalIMGcontainer--img" src="${individualArticle.image}" alt="Article Image">
                            </div>

                            <h4 class="modalContent">${individualArticle.content}</h4>
                            `
                        );
                    }
                }
            });
        }
    }
)};


// Europe Modal Finished





// Asia Filter

function filterAsia(){

    $.ajax({
        type: 'GET',
        url: urlAsia,
        success: function(data){
    
            $('#newsContainer').empty().append(
                ''
            );

            $('#world').empty().append(
                `
                <h3 class="countrySelection--h3">World</h3>
                `
            )
            $('#europe').empty().append(
                `
                <h3 class="countrySelection--h3">Europe</h3>
                `
            )
            $('#asia').empty().append(
                `
                <h3 class="active">Asia</h3>
                `
            )
            $('#usa').empty().append(
                `
                <h3 class="countrySelection--h3">USA</h3>
                `
            )
            $('#aus').empty().append(
                `
                <h3 class="countrySelection--h3">Australia</h3>
                `
            )

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })
    
            let i;
            for (i = 0; i < data.articles.length; i++){
    
                $('#newsContainer').append(
                            
                    `
                    <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
    
                    <div id="newsIMG" class="newsContainer--news__newsIMG">
                    <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                    </div>
    
                    <div id="newsTitle" class="newsContainer--news__newsTitle">
                    <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                    </div>
    
                    </div>
                    `
                );
            }
            modalAsia();
        }
    });
};


// Asia Filter Finished


// Asia Modal


function modalAsia(){

    $.ajax({
        type: 'GET',
        url: urlAsia,
        success: function(data){

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            $(".newsContainer--news").click(function(){

                let i = 0;
                for (i = 0; i < data.articles.length; i++){

                    let individualArticle = data.articles[i];

                    if(parseInt(this.id) === individualArticle.id){
            
                        $("#newsModalInfo").empty().append(
                            `
                            <h2 class="modalTitle">${individualArticle.title}</h2>
                            <h6 class="modalDate">${individualArticle.publishedAt}</h6>
                            
                            <div class="modalIMGcontainer">
                            <img class="modalIMGcontainer--img" src="${individualArticle.image}" alt="Article Image">
                            </div>

                            <h4 class="modalContent">${individualArticle.content}</h4>
                            `
                        );
                    }
                }
            });
        }
    }
)};


// Asia Modal Finished





// Filter USA

function filterUSA(){

    $.ajax({
        type: 'GET',
        url: urlUSA,
        success: function(data){
    
            $('#newsContainer').empty().append(
                ''
            );

            $('#world').empty().append(
                `
                <h3 class="countrySelection--h3">World</h3>
                `
            )
            $('#europe').empty().append(
                `
                <h3 class="countrySelection--h3">Europe</h3>
                `
            )
            $('#asia').empty().append(
                `
                <h3 class="countrySelection--h3">Asia</h3>
                `
            )
            $('#usa').empty().append(
                `
                <h3 class="active">USA</h3>
                `
            )
            $('#aus').empty().append(
                `
                <h3 class="countrySelection--h3">Australia</h3>
                `
            )

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })
    
            let i;
            for (i = 0; i < data.articles.length; i++){
    
                $('#newsContainer').append(
                            
                    `
                    <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
    
                    <div id="newsIMG" class="newsContainer--news__newsIMG">
                    <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                    </div>
    
                    <div id="newsTitle" class="newsContainer--news__newsTitle">
                    <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                    </div>
    
                    </div>
                    `
                );
            }
            modalUSA();
        }
    });
};


// Filter USA Finished

// Modal USA


function modalUSA(){

    $.ajax({
        type: 'GET',
        url: urlUSA,
        success: function(data){

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            $(".newsContainer--news").click(function(){

                let i = 0;
                for (i = 0; i < data.articles.length; i++){

                    let individualArticle = data.articles[i];

                    if(parseInt(this.id) === individualArticle.id){
            
                        $("#newsModalInfo").empty().append(
                            `
                            <h2 class="modalTitle">${individualArticle.title}</h2>
                            <h6 class="modalDate">${individualArticle.publishedAt}</h6>
                            
                            <div class="modalIMGcontainer">
                            <img class="modalIMGcontainer--img" src="${individualArticle.image}" alt="Article Image">
                            </div>

                            <h4 class="modalContent">${individualArticle.content}</h4>
                            `
                        );
                    }
                }
            });
        }
    }
)};


// Modal USA Finished




// Filter Aus

function filterAus(){

    $.ajax({
        type: 'GET',
        url: urlAus,
        success: function(data){
    
            $('#newsContainer').empty().append(
                ''
            );

            $('#world').empty().append(
                `
                <h3 class="countrySelection--h3">World</h3>
                `
            )
            $('#europe').empty().append(
                `
                <h3 class="countrySelection--h3">Europe</h3>
                `
            )
            $('#asia').empty().append(
                `
                <h3 class="countrySelection--h3">Asia</h3>
                `
            )
            $('#usa').empty().append(
                `
                <h3 class="countrySelection--h3">USA</h3>
                `
            )
            $('#aus').empty().append(
                `
                <h3 class="active">Australia</h3>
                `
            )

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            let i;
            for (i = 0; i < data.articles.length; i++){
    
                $('#newsContainer').append(
                            
                    `
                    <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
    
                    <div id="newsIMG" class="newsContainer--news__newsIMG">
                    <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                    </div>
    
                    <div id="newsTitle" class="newsContainer--news__newsTitle">
                    <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                    </div>
    
                    </div>
                    `
                );
            }
            modalAus();
        }
    });
};

// Filter Aus Finished

// Modal Aus

function modalAus(){

    $.ajax({
        type: 'GET',
        url: urlAus,
        success: function(data){

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            $(".newsContainer--news").click(function(){

                let i = 0;
                for (i = 0; i < data.articles.length; i++){

                    let individualArticle = data.articles[i];

                    if(parseInt(this.id) === individualArticle.id){
            
                        $("#newsModalInfo").empty().append(
                            `
                            <h2 class="modalTitle">${individualArticle.title}</h2>
                            <h6 class="modalDate">${individualArticle.publishedAt}</h6>
                            
                            <div class="modalIMGcontainer">
                            <img class="modalIMGcontainer--img" src="${individualArticle.image}" alt="Article Image">
                            </div>

                            <h4 class="modalContent">${individualArticle.content}</h4>
                            `
                        );
                    }
                }
            });
        }
    }
)};

// Modal Aus finished







// Filter Search

function filterSearch(){

    let urlSearch = "https://gnews.io/api/v4/search?q=" + searchVariable.value + "&token=" + yourKey;

    $.ajax({
        type: 'GET',
        url: urlSearch,
        success: function(data){

            console.log(searchVariable.value);
    
            $('#newsContainer').empty().append(
                ''
            );

            $('#world').empty().append(
                `
                <h3 class="countrySelection--h3">World</h3>
                `
            )
            $('#europe').empty().append(
                `
                <h3 class="countrySelection--h3">Europe</h3>
                `
            )
            $('#asia').empty().append(
                `
                <h3 class="countrySelection--h3">Asia</h3>
                `
            )
            $('#usa').empty().append(
                `
                <h3 class="countrySelection--h3">Asia</h3>
                `
            )
            $('#aus').empty().append(
                `
                <h3 class="countrySelection--h3">Austalia</h3>
                `
            )

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })
    
            let i = 0;
            for (i < 0; i < data.articles.length; i++){
    
                $('#newsContainer').append(
                            
                    `
                    <div id="${data.articles[i].id}" class="newsContainer--news" data-toggle="modal" data-target="#modal">
    
                    <div id="newsIMG" class="newsContainer--news__newsIMG">
                    <img class="newsContainer--news__newsIMG--img" src="${data.articles[i].image}" alt="Article Image">
                    </div>
    
                    <div id="newsTitle" class="newsContainer--news__newsTitle">
                    <h2 class="newsContainer--news__newsTitle--h2">${data.articles[i].title}</h2>
                    </div>
    
                    </div>
                    `
                );
            }
            modalSearch();
        }
    });
};

// Filter Search Finished



function modalSearch(){

    let urlSearch = "https://gnews.io/api/v4/search?q=" + searchVariable.value + "&token=" + yourKey;

    $.ajax({
        type: 'GET',
        url: urlSearch,
        success: function(data){

            data.articles.forEach((item, f) => {
                item.id = f + 1;
            })

            $(".newsContainer--news").click(function(){

                let i = 0;
                for (i = 0; i < data.articles.length; i++){

                    let individualArticle = data.articles[i];

                    if(parseInt(this.id) === individualArticle.id){
            
                        $("#newsModalInfo").empty().append(
                            `
                            <h2 class="modalTitle">${individualArticle.title}</h2>
                            <h6 class="modalDate">${individualArticle.publishedAt}</h6>
                            
                            <div class="modalIMGcontainer">
                            <img class="modalIMGcontainer--img" src="${individualArticle.image}" alt="Article Image">
                            </div>

                            <h4 class="modalContent">${individualArticle.content}</h4>
                            `
                        );
                    }
                }
            });
        }
    }
)};





world.addEventListener("click", filterWorld);
euro.addEventListener("click", filterEurope);
asia.addEventListener("click", filterAsia);
usa.addEventListener("click", filterUSA);
aus.addEventListener("click", filterAus);
search.addEventListener("click", filterSearch);





