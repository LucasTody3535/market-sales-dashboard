export function formatNumToReadableString(num) {
    let arr = [];
    let formattedString = [];
    let counter = 1;
    let index = 0;

    for( let item of String(num) ) {
        arr.push(item)
    }

    arr = arr.reverse();

    for( let item of arr ) {
        formattedString.push(item);

        if( index === ( arr.length - 1 ) ) break;
 
        if( counter === 3 ) {
            formattedString.push(".")
            counter = 0;
        }

        counter++;
        index++;
    }

    return formattedString.reverse().join("");
}
