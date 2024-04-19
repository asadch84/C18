// Day 18 Challenge: Start Coding!
// Question 52: Make a Smartphone Object
var smartphone = {
    brand: "iPhone",
    model: "14",
    specs: {
        storage: "256GB",
        screen_size: "6.2 Inches",
        battery_life: "10 Hours"
    }
};
console.log(smartphone);
// Question 53: Pulling Apart a Nested Object
// Nested object representing a programmer's skills
var programmerSkills = {
    languages: ["Python", "Java", "C++", "JavaScript"],
    frameworks: ["Django", "Spring", "React", "Angular"],
    tools: ["Git", "Docker", "VS Code", "PyCharm"]
};
// Extracting three specific skills
var languages = programmerSkills.languages, frameworks = programmerSkills.frameworks, tools = programmerSkills.tools;
// Displaying the extracted skills
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tools: ").concat(tools[0]));
// Question 54: Making Flexible Object Keys
// Creating a function to create an object with dynamic keys
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
// Users can change or update keys as needed
var userPreference = createObjectWithDynamicKey("theme", "dark");
// Displaying the flexible object
console.log(userPreference);
