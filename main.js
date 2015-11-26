module.exports = function () {
    Logger() {
        this.isLogging = false;
        this.currentStage = null;
        this.currentLog = null;
        this.dotCount = 0;
        this.stages = [
            'Reading settings file',
            'Parsing settings file',
            'Sending plan data to Stripe',
            'Plans updated successfully!'
        ];
    }

    Logger.prototype.log = function () {
        var self = this;

        this.currentLog = setInterval(function () {
            process.stdout.clearLine();  
            process.stdout.cursorTo(0);  
            
            self.dotCount = (self.dotCount + 1) % 4;   

            process.stdout.write(self.stages[self.currentStage] + new Array(self.dotCount + 1).join(".")); 
        }, 300);
    };

    Logger.prototype.startLogging = function (stageIdx) {
        this.isLogging = true;
        this.currentStage = stageIdx;
        this.log();
    };

    Logger.prototype.stopLogging = function () {
        clearInterval(this.currentLog);
    };

};
