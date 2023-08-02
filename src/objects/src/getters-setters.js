export const bankAccount = {
    _balance: 1000,

    /**
     * Formatted balance.
     *
     * @returns {string} Formatted balance
     */
    get formattedBalance() {
        return `$${this._balance}`;
    },

    /**
     * Balance.
     *
     * @returns {number} Balance
     */
    get balance() {
        return this._balance;
    },

    /**
     * Set balance.
     *
     * @param value Value
     */
    set balance(value) {
        if (typeof value != 'number') {
            throw new TypeError("Balance should be a number!")
        }
        this._balance = value;
    }
}

export const transfer = (source, target, amount) => {
    if (typeof amount != 'number') {
        throw new TypeError("Amount should be a number!")
    }
    if (source.balance < amount) {
        throw new Error(`Unable to transfer $${amount}!`)
    }
    source.balance -= amount;
    target.balance += amount;
}