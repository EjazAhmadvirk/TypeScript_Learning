// Function returning a Promise
function fetchData(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) resolve(`Data from ${url}`);
            else reject("URL not provided");
        }, 1000);
    });
}

// Async function using await
async function getData() {
    try {
        const data = await fetchData("https://api.example.com");
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();
