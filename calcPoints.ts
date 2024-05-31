    function calcPoints(rank: number): number {
        return Math.max(1, Math.pow(200 - (rank - 1), 2) / 200);
    }
