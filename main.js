
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify

    // I need to do a for loop so that I can access the properties of the objects in the flowers array. 
    //Inside the for loop i need to establish a if statment that checks if the price property is less than 2.00
    // if it is less than 2.00 then it needs to be pushed into the empty filteredFlowers array

    for(let flower of flowers){
        if(flower.price < 2.00)
        filteredFlowers.push(flower)
    }

    // Write your algorithm first, and then your code. Feel free to remove this comment
   


    return filteredFlowers  // Do not modify

}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // Write your algorithm first, and then your code. Feel free to remove this comment
// I need to to the same as above, except I will need to do the if statment to check for flowers that have a id of 3 OR 8
// then push it to filteredFlowers
for(let flower of flowers){
    if(flower.id > 3 && flower.id < 8)
    filteredFlowers.push(flower)
}


    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // Write your algorithm first, and then your code. Feel free to remove this comment

    // I need to fill the filteredFlowers array with only those objects that have their color property equal to "Orange"
    // so i need to establish for loop to access the properties of the objects in the flowers array, then an if statmenent that strictly checks if the
    // "colors" proprty is "Orange", then push it to the filteredFlowers array

    for(let flower of flowers){
        if(flower.colors.includes("Orange"))
        filteredFlowers.push(flower)
    }



    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
//-------------------------------------------------------------

// I need an <article> tag for each flower
// I need a <section> tag for each flowers color
// I need a <div> tag for each flowers USDA

// I'll need to establish a for of statmenet inside the function so I can access the flowers array properties

const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify

    for (flower of flowers){
        flowersHTMLString += `<article> \n\t<h1>${flower}</h1> \n\n\t<h2>Colors</h2>`
    }

    for (color of flower.colors){
        flowersHTMLString += `\n\t<section> ${color} </section>\n`
    }
    flowersHTMLString += `\n\t<h2>USDA Zones</h2>`
    for (zone of flower.usdaZones){
        flowersHTMLString += `\n\t <div> ${zone} </div>`
    }

    flowersHTMLString += `\n<article>`
    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */


    return flowersHTMLString  // Do not modify
}















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

