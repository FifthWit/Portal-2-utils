    function calcScore(score: number): string {
        const ms = (score % 100) * 10;
        const seconds = Math.floor((score / 100) % 60);
        const minutes = Math.floor(score / 100 / 60);
        if (minutes === 0) {
            return `${seconds}.${ms}`;
        } else {
            return `${minutes}:${seconds}.${ms}`;
        }
    }
