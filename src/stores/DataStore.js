import data from '../data/data-1.json';

/**
 * Storage for handling data
 */
const DataStore = {

    /**
     * Get all data.
     * @return {array} data
     */
    getData() {
        return data;
    },

    /**
     * Delete item with data by input array of indices(numbers) from top to down
     * to locate position of item which should be deleted.
     *
     * @param  {array} inputIndices Array of indices
     * @return {void}
     */
    deleteItem(inputIndices) {
        // find array where value should be deleted
        let currArr = data;
        let currArrKidsPointer;
        for (let i = 0; i < inputIndices.length - 1; i++) {
            currArrKidsPointer = currArr[inputIndices[i]].kids;
            const kidsPropertyName = Object.keys(currArrKidsPointer)[0];
            currArr = currArrKidsPointer[kidsPropertyName].records;
        }

        // delete value
        currArr.splice(inputIndices[inputIndices.length - 1], 1);

        // clean after delete if it is the last item in array
        if (currArr.length === 0 && currArrKidsPointer) {
            delete currArrKidsPointer[Object.keys(currArrKidsPointer)[0]];
        }
    }
};

export default DataStore;
