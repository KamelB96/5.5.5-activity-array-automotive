//this includes the vehicle class as a module
//import VehicleModule, { Vehicle } from "vehicle.js";
const VehicleModule = require ("./vehicle.js");
//this shows how to call from this module...


// //this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")

// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)




//My code 
//extending car class to vehicle class

class car extends VehicleModule.Vehicle {
    super(make, model, year, color, mileage) {
        //super(make, model, year, color, mileage);
        this.maximunPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximunSpeed = 160;
        this.fuel = 10;
        this.scheduleService = fale;

    }

//Method LoadPassenger

    loadPassenger(num) {
        if (this.passenger < this.maximunPassengers){
            console.log("There is available room in the car")
        }

        else {
            console.log ("There is no room avaiable in the car")
        }
        
    }


//Method Start
    start() {
        if (this.fuel > 0) {
            console.log ("The car can be started")
            return this.started = true;
        }
        
        else {
            console.log ("The car can not be started")
            return this.started = fale;
        }

    }

//Method Service 
    service() {
        if (this.mileage > 30000){
            console.log ("It is time for maintenance")
            return this. scheduleService == true;
        }
        else {
            console.log ("Maintenance is not required yet")
            return this.scheduleService == false;
        }


    }


}

let v = new car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
