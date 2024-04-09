class AntelopeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AntelopeError';
    }

}

export default AntelopeError