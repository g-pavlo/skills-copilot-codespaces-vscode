function skillsMember(name, age, skillset, isCool) {
    this.name = name;
    this.age = age;
    this.skillset = skillset;
    this.isCool = isCool;
    this.calculateYearsToRetirement = function () {
        return 65 - this.age;
    }
}