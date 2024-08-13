export const capitalizeFirstLetter = (text: string): string => {
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
};