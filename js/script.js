const articles = {
    "javascript-project": {
        category: "JavaScript",
        title: "What I learned Building My First JavaScript Project",
        content: `<p>Building my first JavaScript Project helped me understand how HTML, CSS and JavaScript work together</p>
        <h2>Working with The DOM</h2>
        <p>I learned how JavaScript can select elements from a HTML document and change what the user see.</p>
        <h2>What I Learned</h2>
        <p>I learned about variables, functions, events and user interaction.</p>`
    },

    "typescript": {
        category: "TypeScript",
        title: "My First Experience With TypeScript",
        content: `<p>TypeScript was interesting because it adds types to JavaScript and helps catch certain errors while writing code.</p>
        <h2>TypeScript And JavaScript</h2>
        <p>TypeScript code is compiled into javaScript before the browser can execute it.</p>
        <h2>What I Learned</h2>
        <p>I learned about types, the TypeScript compiler, modules and the relationship between TypeScript and JavaScript.</p>`
    }

};

const articleElement = document.getElementById("article")
if (articleElement) {
    const parameters = new URLSearchParams(window.location.search);
    const post = parameters.get("post");
    const article = articles[post];

    if (article) {
        articleElement.innerHTML = `<p class="article-category">${article.category}</p>
        <h1 class="article-title">${article.title}</h1>
        <div class="article-content">${article.content}</div>`;
    }   else {
        articleElement.innerHTML = `<h1>Article Not Found</h1>
        <p>the article you are looking for does not exist.</p>`;
    }
};

const themeToggle = document.getElementById("themeToggle")
lucide.createIcons();
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("night");
    if
    (document.body.classList.contains("night")) {
        themeToggle.innerHTML = '<i data-lucide="sun"></i>';
    } else {
        themeToggle.innerHTML = '<i data-lucide="moon"></i>';
    }
    lucide.createIcons();
})