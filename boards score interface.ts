    interface score {
        scoreData: {
            note: string | null;
            submission: number;
            changelogId: number;
            playerRank: number;
            scoreRank: number;
            score: number;
            date: string;
            hasDemo: number;
            youtubeID: string | null;
            pending: number;
            autorender_id: string | null;
        };
        userData: {
            boardname: string;
            avatar: string;
        };
    }
