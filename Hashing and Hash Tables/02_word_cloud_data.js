class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {

        // Count the frequency of each word
        const array = inputString.split(" ")
        var that = this;
        for (let i = 0; i < array.length; i++) {
            if (that.wordsToCounts.get(array[i].toLowerCase())) {
                that.wordsToCounts[array[i].toLowerCase()] = that.wordsToCounts[array[i].toLowerCase()] + 1
            }
            else if (that.wordsToCounts.get(array[i])) {
                that.wordsToCounts[array[i]] = that.wordsToCounts[array[i]] + 1
            }
            else {
                that.wordsToCounts.set(array[i], 1);
            }
        }

        console.log(this.wordsToCounts)
    }

}
