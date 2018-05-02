export class Till{
  constructor(public start: number, public end:number, public netProfit: number){
    netProfit = start - end;
  }
}
