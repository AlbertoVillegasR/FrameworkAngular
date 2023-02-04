 import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({ 
     name: 'numberFormat'
  })
 export class NumberFormatPipe implements PipeTransform {
     
     transform(value: number | string ): string {      
         if(value==null) return '';
         value = value.toString().replace(/[',]+/g, '');   
         return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
     }
 
   /* 
 
     localeString(nStr) {

        console.log('nStr',nStr);
        nStr = nStr.replace(/[',]+/g, '');
        console.log('nStr 2',nStr);
        var str = nStr.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
         
     } */
 }