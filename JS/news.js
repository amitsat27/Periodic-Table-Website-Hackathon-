const data = null;
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE && this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.value
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      console.log(element)
      let news = `<div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100" style="width:20rem" >
                <div class="card-body">
                  <h5 class="card-title">${element["name"]}</h5>
                  <p class="card-text">${element["description"]}<a href="${element["url"]}" target = "_blank" > Read more</a ></p>
                </div>
              </div>
            </div>
             
          </div>`;
      newsHtml += news;
    
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.log("Some error occured")
  }

});
xhr.open("GET", "https://bing-news-search1.p.rapidapi.com/news/search?q=PeriodicTable&count=8");
xhr.setRequestHeader("x-bingapis-sdk", "true");
xhr.setRequestHeader("x-rapidapi-key", "d4000169damsh088fcb998b637b8p1812cejsnda14d40ccf49");
xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");

xhr.send(data);