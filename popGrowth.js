// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)


const nbYear = (p0, percent, aug, p) => {
    let realPercent = percent/100;
    let population = p0
    let years = 0

    while (population < p) {
        population += population*realPercent
        population += aug
        population = Math.floor(population)
        years ++
    }

    return years
};


console.log(nbYear(1500, 5, 100, 5000)) //15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) //10
console.log(nbYear(1000, 2, 50, 1200)) //3