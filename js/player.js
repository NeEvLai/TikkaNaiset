class Player {
    // contructors
    constructor(number,name,goals,passes, penalties,games) {
        this.number = number;
        this.name = name;
        this.goals = goals;
        this.passes = passes;
        this.penalties = penalties;
        this.games = games;
    }
    // methods
    totalPoints() {
        const goal = this.goals;
        const pass = this.passes;
        return goal + pass;
    }
    totalMinutes() {
        const penalty = this.penalties;
        return penalty * 2;
    }
}

export default Player;