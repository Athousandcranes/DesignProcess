class TimerModel {
    constructor() {
        this.updateTimerCallback = () => {};

        this.remainingTime = 0;
        this.previousTimestamp = 0;
        this.timerActive = false;
    }

    getMinutes() {
        return new Date(this.remainingTime).getMinutes();
    }

    getSeconds() {
        return new Date(this.remainingTime).getSeconds();
    }

    startTimer() {
        if(this.timerActive) {
            return;
        }
        this.timerActive = true;
        this.previousTimestamp = 0;
        requestAnimationFrame((timestamp) => {this.nextFrame(timestamp);});
    }

    stopTimer() {
        this.timerActive = false;
        
        this.updateTimerCallback(this.getMinutes(), this.getSeconds());
    }

    setTimer(remainingTime) {
        this.remainingTime = remainingTime;
        
        this.updateTimerCallback(this.getMinutes(), this.getSeconds());
    }

    nextFrame(timestamp) {
        if(this.previousTimestamp == 0) {
            this.previousTimestamp = timestamp;
        }

        let delta = timestamp - this.previousTimestamp;
        this.previousTimestamp = timestamp;
        this.remainingTime = this.remainingTime - delta;

        if(this.remainingTime < 0) {
            this.remainingTime = 0;
            this.timerActive = false;
        }
        
        this.updateTimerCallback(this.getMinutes(), this.getSeconds());

        if(this.timerActive) {
            requestAnimationFrame((timestamp) => {this.nextFrame(timestamp);});
        } else {
            requestAnimationFrame(() => {});            
        }
    }
}

export { TimerModel };