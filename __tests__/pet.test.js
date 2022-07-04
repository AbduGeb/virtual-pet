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

    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");

        pet.age = 30;

        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(")
    });


});

describe("walk", () => {
    it("increases fitness by 4", () => {
        const pet = new Pet("Fido");

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });

    it("increases fitness to a maximum of 10", () => {
        const pet = new Pet("Fido");

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");

        pet.age = 30;

        expect(() => pet.walk()).toThrow("Your pet is no longer alive :(")
    });


});

describe("feed", () => {
    it("decreases hunger by 3", () => {
        const pet = new Pet("Fido");

        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });

    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");

        pet.age = 30;

        expect(() => pet.feed()).toThrow("Your pet is no longer alive :(")
    });
});

describe("checkUp", () => {
    it("returns 'I need a walk' if fitness is 3 or less", () => {
        const pet = new Pet("Fido");

        pet.fitness = 3;

        expect(pet.checkUp()).toEqual("I need a walk");
    });

    it("returns 'I am hungry' if hunger is 5 or more", () => {
        const pet = new Pet("Fido");

        pet.hunger = 5;

        expect(pet.checkUp()).toEqual("I am hungry")
    });

    it("returns 'I am hungry AND I need a walk' if fitness is 3 or less and hunger is 5 or more", () => {
        const pet = new Pet("Fido");

        pet.fitness = 3;
        pet.hunger = 5;

        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
    });

    it("returns 'I feel great!' if fitness is more than 3 and hunger is less than 5", () => {
        const pet = new Pet("Fido");

        pet.fitness = 4;
        pet.hunger = 4;

        expect(pet.checkUp()).toEqual("I feel great!");
    });

    it("throws an error if the pet is not alive", () => {
        const pet = new Pet("Fido");

        pet.age = 30;

        expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(")
    });



})