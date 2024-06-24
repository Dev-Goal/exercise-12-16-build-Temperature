class Temperature {
  constructor(temperatureC) {
    this.temperatureC = temperatureC;
  }
  getTemperatureC() {
    return this.temperatureC;
  }
  setTemperatureC(temperatureC) {
    if (temperatureC >= -273) {
      this.temperatureC = temperatureC;
    }
  }
  temperatureF() {
    return (this.temperatureC * 9) / 5 + 32;
  }
  temperatureK() {
    return this.temperatureC + 273.15;
  }
}
const temperature = new Temperature(25);
temperature.setTemperatureC(-300);
const tempC = temperature.getTemperatureC();
const tempF = temperature.temperatureF();
const tempK = temperature.temperatureK();
document.write(
  `Nhiệt độ C là ${tempC}<sup>o</sup>C <br> Nhiệt độ F là ${tempF}<sup>o</sup>F <br> Nhiệt độ K là ${tempK}<sup>o</sup>K`
);



// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fName() {
//       return `${this.name} ${this.surname}`;
//     },
//     set fName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
//   user.fullName = "Bill Gates"; // gọi hàm set fullName()
  
//   // trả về Bill Gates
//   console.log(user.fName); // gọi hàm get fullName()
  
//   // trả về { 
//   // name: "Bill", 
//   // surname: "Gates", 
//   // fullName: "Bill Gates"
//   // }
//   console.log(user);