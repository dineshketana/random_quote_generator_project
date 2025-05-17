async function generateQuote() {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            method: 'GET',
            headers: {
                'X-Api-Key': '/COFlyd4GyHIzbcz0EbuHg==92izYOEhTGdzXJ9M' // Replace with your actual API key
            }
        });

        const data = await response.json();
        const quote = data[0]; // API returns an array of quote objects

        document.getElementById("quote").innerText = `"${quote.quote}"`;
        document.getElementById("author").innerText = `– ${quote.author}`;
    } catch (error) {
        document.getElementById("quote").innerText = "Failed to fetch quote. Try again.";
        document.getElementById("author").innerText = "";
        console.error("Error fetching quote:", error);
    }
}


// async function generateQuote() {
//     try {
//         const response = await fetch("https://api.quotable.io/random");
//         const data = await response.json();

//         document.getElementById("quote").innerText = `"${data.content}"`;
//         document.getElementById("author").innerText = `– ${data.author}`;
//     } catch (error) {
//         document.getElementById("quote").innerText = "Failed to fetch quote. Try again.";
//         document.getElementById("author").innerText = "";
//         console.error("Error fetching quote:", error);
//     }
// }