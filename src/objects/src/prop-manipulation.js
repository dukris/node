export const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",

    /**
     * Update person.
     *
     * @param info Info object
     * @returns {person} Updated person
     */
    updateInfo(info) {
        if (typeof info != 'object') {
            throw new TypeError("Input format is wrong!")
        }
        // const copied = JSON.parse(JSON.stringify(person));
        Object.getOwnPropertyNames(info)
            .forEach(key => {
                if (Object.getOwnPropertyDescriptor(this, key).writable) {
                    this[key] = info[key];
                }
            });
        return this;
    }
};

Object.defineProperties(person, {
    firstName: {
        writable: false
    },
    lastName: {
        writable: false
    },
    age: {
        writable: false
    },
    email: {
        writable: false
    }
});

Object.defineProperty(person, "address", {
    value: {},
    writable: true,
    enumerable: false,
    configurable: false
});