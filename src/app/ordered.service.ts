import { Injectable } from '@angular/core';


interface FormData {
  fullName: string,
  address: string,
  totalPrice: number,
}

@Injectable({
  providedIn: 'root'
})
export class OrderedService {
  data: FormData = {
    fullName: '',
    address: '',
    totalPrice: 0,
  };


  constructor() { }

  setData(fullName: string, address: string, totalPrice:number){
    this.data.fullName = fullName;
    this.data.address = address;
    this.data.totalPrice = totalPrice;
  }

  getData() {
    return this.data;
  }

  clearData() {
    const data: FormData = {
      fullName: '',
      address: '',
      totalPrice: 0,
    };
    return data;
  }
}
