function calculateAverage(numbers) {
    if (!numbers || numbers.length === 0) {
        throw new Error('The array is empty or null');
    }

    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}
