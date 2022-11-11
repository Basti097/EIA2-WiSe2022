/*
Aufgabe: L04 Shopping List - Data
Name: Bastian Aberle
Matrikel: 271166
Datum: 05.11.2022
Quellen: EIA2 - Videos, W3Schools
*/

namespace shoppinglistA04 {

    
    export interface Input {
        savedItem: string;
        savedAmount: number;
        savedComment: string;
        savedDate: string;
        savedPurchase: boolean;
    }



    export let savedInputs: Input[] = [

        {
            savedItem: "noodles",
            savedAmount: 4,
            savedComment: "packages",
            savedDate: "03.11.2022",
            savedPurchase: false
          
        },
        {
            savedItem: "banana(s)",
            savedAmount: 4,
            savedComment: "bio & regio",
            savedDate: "01.11.2022",
            savedPurchase: true
        },
        {
            savedItem: "water",
            savedAmount: 10,
            savedComment: "bottles",
            savedDate: "15.10.2022",
            savedPurchase: false
        }
    ];

    export let savedItem: string = "";

}