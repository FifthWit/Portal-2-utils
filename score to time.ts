    function calcScore(score: number): string {
        let ms = score % 100;
        if (ms < 10) {
            ms = `0${ms}`;
        }

        const seconds = Math.floor((score / 100) % 60);
        const minutes = Math.floor(score / 100 / 60);
        if (minutes === 0) {
            return `${seconds}.${ms}`;
        } else {
            return `${minutes}:${seconds}.${ms}`;
        }
    }
