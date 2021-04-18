var city = "Beograd";
switch (city) {
    case "Beograd":
    case "Pozarevac":
    case "Vrsac":
    case "Zajecar":
    case "Vranje":
        console.log("Srbija");
        break;
    case "Madrid":
    case "Barselona":
    case "Sevilja":
    case "Majorka":
    case "Saragosa":
        console.log("Španija");
        break;
    case "Pariz":
    case "Marsej":
    case "Nica":
    case "Monako":
    case "Lil":
        console.log("Francuska");
        break;
    default:
        console.log("Please choose a different city");
        break;

}
/* Write a program that takes as input a city name and outputs the country where the city is.
 You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities.
 Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".
 */