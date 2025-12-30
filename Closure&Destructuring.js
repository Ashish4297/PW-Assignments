/* You are building a counter application that tracks the number of 
times a button is clicked. Implement the counter using closure.*/


function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); 
console.log(counter.increment());
console.log(counter.getCount());  
console.log(counter.decrement());


/*You have an object representing a customer order with properties orderId, productName, and quantity. 
Use destructuring to extract and print these properties.*/


const order = {
    orderId: 12345,
    productName: "Laptop",
    quantity: 2
};

const { orderId, productName, quantity } = order;

console.log("Order ID:", orderId);
console.log("Product Name:", productName);
console.log("Quantity:", quantity);


 /* Implement the cart feature using javascript closure. 
Using JS closures, create a cart array and return a function to getCartItems.*/



function createCart() {
    let cartItems = [];
    
    return {
        getCartItems: function() {
            return cartItems;
        }
    };
}

const cart = createCart();
console.log(cart.getCartItems()); // []


/*Implement the add to cart feature. On calling add to cart closure function, the object of productId, name, quantity and price should be added to the cartItem. If duplicate items 
with same productId are added, the product quantity must be incremented.*/


function createCart() {
    let cartItems = [];
    
    return {
        addToCart: function(productId, name, quantity, price) {
            const existingItem = cartItems.find(item => item.productId === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cartItems.push({
                    productId: productId,
                    name: name,
                    quantity: quantity,
                    price: price
                });
            }
        },
        getCartItems: function() {
            return cartItems;
        }
    };
}

const cart = createCart();
cart.addToCart(1, "Apple", 2, 50);
cart.addToCart(2, "Banana", 3, 30);
cart.addToCart(1, "Apple", 1, 50); 
console.log(cart.getCartItems());



/*Implement the remove item from cart feature. On calling the remove item 
closure function, the specified productId item must be removed from cartItems array.*/


function createCart() {
    let cartItems = [];
    
    return {
        addToCart: function(productId, name, quantity, price) {
            const existingItem = cartItems.find(item => item.productId === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cartItems.push({ productId, name, quantity, price });
            }
        },
        removeFromCart: function(productId) {
            cartItems = cartItems.filter(item => item.productId !== productId);
        },
        getCartItems: function() {
            return cartItems;
        }
    };
}

const cart = createCart();
cart.addToCart(1, "Apple", 2, 50);
cart.addToCart(2, "Banana", 3, 30);
console.log(cart.getCartItems());
cart.removeFromCart(1);
console.log(cart.getCartItems());


/*Implement functions that leverage closures and higher-order functions to 
perform playlist operations.*/


function createPlaylist(playlistName) {
    let songs = [];
    
    return {
        addSong: function(songName, artist) {
            songs.push({
                name: songName,
                artist: artist
            });
            console.log(`Added "${songName}" by ${artist} to ${playlistName}`);
        },
        listSongs: function() {
            console.log(`\nPlaylist: ${playlistName}`);
            if (songs.length === 0) {
                console.log("No songs in playlist");
            } else {
                songs.forEach((song, index) => {
                    console.log(`${index + 1}. ${song.name} - ${song.artist}`);
                });
            }
        }
    };
}

const myPlaylist = createPlaylist("My Favorites");
myPlaylist.addSong("Shape of You", "Ed Sheeran");
myPlaylist.addSong("Blinding Lights", "The Weeknd");
myPlaylist.listSongs();