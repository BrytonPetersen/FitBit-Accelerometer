import { Accelerometer } from "accelerometer";
import { display } from "display";
import * as document from "document";
import { outbox } from "file-transfer";
import * as fs from "fs";

const accelLabel = document.getElementById("accel-label");
const accelData = document.getElementById("accel-data");

const header = ["X","Y","Z"]
const delimiter = ', '

let newheader = header.join(delimiter)+'\n';

let csv = newheader;

const sensors = [];

function accelread(){
   accel.addEventListener("reading", () => {
    //put your reading into here //toFixed is the same as round(x,1) //? is like an if else
    let data = [accel.x, accel.y, accel.z]; //setTimeout()
    csv += data.join(delimiter)+"\n";
    console.log(csv);
    //accelData.text = csv;
   });
}; 

function stopRead(){
  accel.removeEventListener("reading", () => {
    //put your reading into here //toFixed is the same as round(x,1) //? is like an if else
    let data = [accel.x, accel.y, accel.z];
    csv += data.join(delimiter)+"\n";
   });
  fs.writeFileSync("ascii.txt", csv, "ascii");
};


if (Accelerometer){
  const accel = new Accelerometer({ frequency: 1 });
  accelread();
  setTimeout(stopRead(),3000);
  //const obj = {name: "John", age: 30, city: "New York"};
  sensors.push(accel);
  accel.start();
};

outbox
  .enqueueFile("/private/data/app.txt")
  .then(ft => {
    console.log(`Transfer of ${ft.name} successfully queued.`);
  })
  .catch(err => {
    console.log(`Failed to schedule transfer: ${err}`);
  })
