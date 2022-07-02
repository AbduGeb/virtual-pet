const Pet = require("../src/pet");

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });

    it("sets the name property", () => {
        const pet = new Pet("Fido");
        const pet2 = new Pet("Rex");
        
        expect(pet.name).toEqual("Fido");
        expect(pet2.name).toEqual("Rex");
    });

    it("has an initial age of 0", () => {
        const pet = new Pet("Fido");

        expect(pet.age).toEqual(0);
    });

    it("has an initial hunger of 0", () => {
        const pet = new Pet("Fido");

        expect(pet.hunger).toEqual(0);
    });

    it("has an initial fitness of 10", () => {
        const pet = new Pet("Fido");

        expect(pet.fitness).toEqual(10);
    });



});

describe("growUp", () => {
    it("has a method called growUp", () => {
        const pet = new Pet("Fido");

        expect(pet.growUp).toBeInstanceOf(Function);
    });

    it("increments the age by 1", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it("increases the hunger by 5", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it("decreases fitness by 3", () => {
        const pet = new Pet("Fido");

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    

});