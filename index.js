const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection made!!");
    })
    .catch(err => {
        console.log("Error: ");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number, 
    score: Number, 
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
//const idiots3 = new Movie({title: "3 Idiots", year: 2007, score: 9.4, rating: "G"});

/*Movie.insertMany([
    {title: "War", year: 2019, score: 6.5, rating: "B+"},
    {title: "Kabir Singh", year: 2019, score: 8.4, rating: "A+"},
    {title: "Bala", year: 2019, score: 7.3, rating: "A"},
    {title: "pK", year: 2014, score: 8.1, rating: "A+"},
    {title: "Fukrey", year: 2013, score: 6.9, rating: "B+"},
    {title: "Jolly LLB 2", year: 2017, score: 7.2, rating: "A"}
])
    .then(data => {
        console.log("It worked!");
        console.log(data);
    })
*/