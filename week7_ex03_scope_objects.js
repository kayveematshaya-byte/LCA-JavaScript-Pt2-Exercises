//TODO: Create a global variable called globalCount.
var globalCount = 0;

//TODO: Create a function that demonstrates local scope.
function demonstrateLocalScope() {
    var localCount = 0;
    console.log("Local count:", localCount);
}

//TODO: Create a function that tries to modify both variables.
function modifyCounts() {
    globalCount++;
    // This will cause an error because localCount is not defined in this scope.
    // localCount++;
}

//TODO: Create a Student constructor function.
function Student(name, age) {
    this.name = name;
    this.age = age;
}

//TODO: Create several student instances.
var student1 = new Student("Alice", 20);
var student2 = new Student("Bob", 22);
var student3 = new Student("Charlie", 19);

//TODO: Create an object literal with nested properties.
var school = {
    name: "Greenwood High",
    address: "123 Main St",
    students: [student1, student2, student3]
};Alice, Bob, Charlie

