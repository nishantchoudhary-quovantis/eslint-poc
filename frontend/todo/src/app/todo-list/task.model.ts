export class Task{
  title:string;
  description:string;

  constructor(data:any){
    this.title = data && data.title ? data.title: null;
    this.description = data && data.description ? data.description:null;
  }


}

