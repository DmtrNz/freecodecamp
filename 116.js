const user = {
    name: "Alex",
    address: {
        street: "Main St",
        city: "New York",
        country: {
            name: "USA",
            code: "US"
        }
    }
};

const userCountry = user.address?.country?.name || "Country not specified";
const userPostalCode = user.address?.postalCode || "Postal code not specified";

console.log(`User's country: ${userCountry}`);
console.log(`User's postal code: ${userPostalCode}`);
