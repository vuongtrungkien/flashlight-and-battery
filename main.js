let Battery = function () {
    this.energy = 0;
    this.setEnergy = function (energy) {
        this.energy = energy;
    };

    this.getEnergy = function () {
        return this.energy;
    };

    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy -= 2;
        }
    };
};

let FlashLamp = function () {
    this.battery = Battery;
    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };

    this.light = function () {
        if (this.status) {
            alert("lighting");
        } else {
            alert("not lighting");
        }
    };
    this.turnOn  = function () {
        if (this.getBatteryInfo() > 1){
            this.status = true;
        } else {
            alert("low battery ");
            this.status = false;
        }

    };

    this.turnOff = function () {
         this.status = false;
    }

};
let battery = new Battery();
battery.setEnergy(1);
let flashlamp = new FlashLamp();
 flashlamp.setBattery(battery);
 console.log(flashlamp.getBatteryInfo());

 function lampOn() {

     flashlamp.turnOn();
     flashlamp.light();
     battery.decreaseEnergy();
     document.getElementById("batteryInfo").innerHTML = "battery information :  "
         + flashlamp.getBatteryInfo();

 }

 function lampOff() {
     flashlamp.turnOff();
     flashlamp.light();

 }

 function addEnergy() {
     battery.setEnergy(10);
     document.getElementById("batteryInfo").innerHTML = "battery information :  " +
         flashlamp.getBatteryInfo() ;

 }