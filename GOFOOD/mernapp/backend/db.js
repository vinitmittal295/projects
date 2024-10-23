// const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://gofood:1234@cluster0.8xyuw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

// async function mongoDB() {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected to MongoDB');

//         // Fetching data from the collection
//         const fetch_data = await mongoose.connection.db.collection("food_items");
//         const data = await fetch_data.find({}).toArray();

//         const foodCategory= await mongoose.connection.db.collection("foodCategory");
//         foodCategory.find({}).toArray(function (err, catData) {
//             if (err) console.log(err);
//             else {
//                 global.food_items=data
//                 global.foodCategory = catData;
//                 // console.log(global.foodCategory
//             }
//         })
//         global.food_items = data;
//         // console.log(global.food_items);
        
        
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// }

// // Call the mongoDB function to connect and fetch data
// mongoDB();

// module.exports = mongoDB;



const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://gofood:1234@cluster0.8xyuw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

async function mongoDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // Fetching data from the "food_items" collection
        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

        // Use Promise.all to fetch data concurrently
        const [foodItems, foodCategories] = await Promise.all([
            foodItemsCollection.find({}).toArray(),
            foodCategoryCollection.find({}).toArray()
        ]);

        // Set global variables
        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log('Food items:', global.food_items);
        console.log('Food categories:', global.foodCategory);
        
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Call the mongoDB function to connect and fetch data
mongoDB();

module.exports = mongoDB;
