export default function iterator(array) {
    let index = 0;
    return {
        next: () => {
            let value;
            if (index < array.length) {
                value = {
                    data: array[index],
                    done: false
                }
                index++;
            } else {
                value = {
                    data: array[index],
                    done: true
                }
            }
            return value;
        }
    }
}