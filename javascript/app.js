const api_url = "https://api.readingtime/v1/getall"

async function get_all() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {text, body} = data;
 
    document.getElementById("title").textContent = text;
    document.getElementById("body").textContent = body;
}

get_all()