export const capitalizeWord = (str: any) => {
    if (str.length) {
        let transformWord = str[0].toUpperCase() + str.substring(1);
        return transformWord;
    }

}