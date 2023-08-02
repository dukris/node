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

/**
 * Transfer amount from the current account to the target account.
 *
 * @param current Current account
 * @param target Target account
 * @param amount Amount
 */
export const transfer = (current, target, amount) => {
    if (typeof amount != 'number') {
        throw new TypeError("Amount should be a number!")
    }
    if (current.balance < amount) {
        throw new Error(`Unable to transfer $${amount}!`)
    }
    current.balance -= amount;
    target.balance += amount;
}