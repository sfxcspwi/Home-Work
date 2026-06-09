let form = document.querySelector(".search-form")
let list = document.querySelector(".list")
let loadMoreBtn = document.querySelector(".load-more")
let API_KEY = "3ca794a9920147ddaf4048e03e4c1d14"
let page = 1
let query = ""

async function fetchArticles(searchText, pageNumber = 1) 
{
    let response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchText}&pageSize=12&page=${pageNumber}&apiKey=${API_KEY}`
    )

    return response.json()
}

function createMarkup(articles) 
{
    return articles
        .map(
            article => `
            <li class="article-item">
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                    <article class="article-card">
                        <img
                            src="${article.urlToImage || 'https://via.placeholder.com/480x250'}"
                            alt="${article.title}"
                        >

                        <h2>${article.title}</h2>

                        <p>
                            Posted by:
                            ${article.author || "Unknown author"}
                        </p>

                        <p>
                            ${article.description || "No description"}
                        </p>
                    </article>
                </a>
            </li>
        `
        )
        .join("")
}

form.addEventListener("submit", async e => 
{
    e.preventDefault()

    query = e.target.searchQuery.value.trim()

    if (!query) return

    page = 1
    list.innerHTML = ""

    let data = await fetchArticles(query, page)

    list.innerHTML = createMarkup(data.articles)

    if (data.totalResults > 12) 
    {
        loadMoreBtn.classList.remove("hidden")
    } 
    else 
    {
        loadMoreBtn.classList.add("hidden")
    }
})

loadMoreBtn.addEventListener("click", async () => 
{
    page++

    let data = await fetchArticles(query, page)

    list.insertAdjacentHTML(
        "beforeend",
        createMarkup(data.articles)
    )

    if (page * 12 >= data.totalResults) {
        loadMoreBtn.classList.add("hidden")
    }
})