/* 1. Write a function sumAsync that takes two numbers as arguments 
and uses a callback to return their sum after a delay of 1 second.*/


function sumAsync(num1, num2, callback) {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    }, 1000);
}

// Usage
sumAsync(5, 10, (result) => {
    console.log("Sum:", result); // Output after 1 second: Sum: 15
});

/* 2. Create a function getData that returns a Promise. The Promise should 
resolve after 2 seconds with a message "Data fetched successfully."*/


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });
}

// Usage
getData().then((message) => {
    console.log(message); // Output after 2 seconds: Data fetched successfully.
});

 /* 3.Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns the parsed JSON response.
API: https://jsonplaceholder.typicode.com/todos/1 */

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Usage
fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

/* 4. Write an asynchronous function fetchData that uses the Fetch API to retrieve 
data from a given URL and returns the parsed JSON response.*/


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

/* 5. Implement a function multiplyWithCallback that takes an array of numbers 
and a callback function. The function should multiply each element of the
 array by 2 and pass the result to the callback.*/


function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(num => num * 2);
    callback(result);
}

// Usage
const numbers = [1, 2, 3, 4, 5];
multiplyWithCallback(numbers, (result) => {
    console.log("Multiplied array:", result);
    // Output: Multiplied array: [2, 4, 6, 8, 10]
});

/* 6.Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are fetched. Return an object with user details and posts.
APIs:

User: https://jsonplaceholder.typicode.com/users/${userId}
Posts: https://jsonplaceholder.typicode.com/posts?userId=${userId} */


async function fetchUserDataAndPosts(userId) {
    try {
        // Fetch user details
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userResponse.json();
        
        // Fetch user posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();
        
        return {
            user: user,
            posts: posts
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Alternative using promise chaining
function fetchUserDataAndPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then(response => response.json())
                .then(posts => {
                    return {
                        user: user,
                        posts: posts
                    };
                });
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
}

// Usage
fetchUserDataAndPosts(1).then(data => {
    console.log("User:", data.user);
    console.log("Posts:", data.posts);
});

/*  7. Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the URLs concurrently. Return an array of responses.
API: https://jsonplaceholder.typicode.com/todos/{id} (Change todo id for each API 
call)*/


async function fetchMultipleData(urls) {
    try {
        const promises = urls.map(url => 
            fetch(url).then(response => response.json())
        );
        
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("Error fetching multiple data:", error);
        throw error;
    }
}

// Usage
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchMultipleData(urls).then(data => {
    console.log("All data fetched:", data);
}).catch(error => {
    console.error("Error:", error);
});

/* 8.Create a function racePromises that takes an array of promises and returns 
the result of the first promise that resolves or rejects. Use Promise.race() to
 implement this.*/

function racePromises(promises) {
    return Promise.race(promises);
}

// Usage example
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 resolved"), 3000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 resolved"), 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 resolved"), 2000);
});

racePromises([promise1, promise2, promise3])
    .then(result => {
        console.log("First resolved:", result);
    
    });

// Example with fetch URLs
const fetchUrls = [
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/3').then(r => r.json())
];

racePromises(fetchUrls)
    .then(data => {
        console.log("First API response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });