class Sensor {
  constructor(id,value,typeData){
    this.id = id;
    this.value = value;
    this.typeData = typeData;
  }
  getID(){
    return this.id;
  }
  getValue(){
    return this.value;
  }
  getTypeData(){
    return this.typeData;
  }
}

export default Sensor;