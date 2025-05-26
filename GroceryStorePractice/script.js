'use strict';
const ProductCatalog = {
    Rice:{
        LalBaba:{
            Name:"Lal baba mini cut rice",
            QuantityInKg: [1, 2, 3, 4, 5, 10, 25, 100],
            PurchasingPrice: [25, 50, 75, 100, 125, 250, 625, 2500],
            SellingPrice: [30, 60, 90, 120, 150, 300, 750, 3000]  
        },

        Himalaya:{
            Name: "Himalaya Mini Cut Rice",
            QuantityInKg: [1, 2, 3, 4, 5, 10, 25, 100],
            PurchasingPrice: [30, 60, 90, 120, 150, 300, 750, 3000],
            SellingPrice: [40, 80, 120, 160, 200, 400, 1000, 4000]
        },

        RadhaBhog:{
            Name: "RadhaBhog Govind Bhog Rice",
            QuantityInKg: [1, 2, 3, 4, 5, 10, 25, 100],
            PurchasingPrice: [40, 80, 120, 160, 200, 400, 1000, 4000],
            SellingPrice: [50, 100, 150, 200, 250, 500, 1250, 5000]
        },

        IndiaGate:{
            Name: "India Gate Basmati Rice",
            QuantityInKg: [1, 2, 3, 4, 5, 10, 25, 100],
            PurchasingPrice: [80, 160, 240, 320, 400, 800, 2000, 8000],
            SellingPrice: [100, 200, 300, 400, 500, 1000, 2500, 10000]
        },

        Dawat:{
            Name: "Dawat Basmati Rice",
            QuantityInKg: [1, 2, 3, 4, 5, 10, 25, 100],
            PurchasingPrice: [120, 240, 360, 480, 600, 1200, 3000, 12000],
            SellingPrice: [150, 300, 450, 600, 750, 1500, 3600, 15000]
        }
    },
   
    Wheat: {
        Aashirwad:{
            Name: "Aashirwad aata",
            QuantityInKg: [1, 5, 10],
            PurchasingPrice: [120, 600, 1200],
            SellingPrice: [150, 750, 1500]
        },

        Ganesh:{
            Name: "Ganesh aata",
            QuantityInKg: [1, 5, 10],
            PurchasingPrice: [100, 500, 1000],
            SellingPrice: [120, 600, 1200]
        },

        Loose:{
            Name: "Loose aata",
            QuantityInKg: [1, 5, 10, 25],
            PurchasingPrice: [40, 200, 400, 1000],
            SellingPrice: [50, 250, 500, 1250]
        }
    },

    Oil:{

        Mustard: {

            Fortune:{
                Name: "Fortune mustard oil",
                QuantityInLitre: [1, 5],
                PurchasingPrice: [100, 500],
                SellingPrice: [150, 750]
            },

            Engine: {
                Name: "Engine mustard oil",
                QuantityInLitre: [1, 5],
                PurchasingPrice: [80, 400],
                SellingPrice: [120, 600]
            },

            Saffola:{
                Name: "Saffola mustard oil",
                QuantityInLitre: [1, 5],
                PurchasingPrice: [150, 750],
                SellingPrice: [200, 1000]
            }

        },

        Refine:{

            Fortune: {
                Name: "Fortune refine oil",
                QuantityInLitre: [1, 5],
                PurchasingPrice: [100, 500],
                SellingPrice: [150, 750]
            },

            Saffola: {
                Name: "Saffola Refine oil",
                QuantityInLitre: [1, 5],
                PurchasingPrice: [120, 600],
                SellingPrice: [200, 1000]
            }
        }
        
    },

    Pulses:{

        LalChola: {
            Name: "Lal chola", 
            QuantityInGramAndKg: [500, 750, 1, 1.5, 2],
            PurchasingPrice: [40, 60, 80, 120, 160],
            SellingPrice: [50, 75, 100, 150, 200]
        },

        KabaliChola: {
            Name: "Kabuli chola",
            QuantityInGramAndKg: [500, 750, 1, 1.5, 2],
            PurchasingPrice: [40, 60, 80, 120, 160],
            SellingPrice: [50, 75, 100, 150, 200]
        },

        MasoorDal: {
            Name: "Masoor dal",
            QuantityInGramAndKg: [500, 750, 1, 1.5, 2],
            PurchasingPrice: [40, 60, 80, 120, 160],
            SellingPrice: [50, 75, 100, 150, 200]
        },

        MoongDal: {
            Name: "Moong dal",
            QuantityInGramAndKg: [500, 750, 1, 1.5, 2],
            PurchasingPrice: [40, 60, 80, 120, 160],
            SellingPrice: [50, 75, 100, 150, 200]
        },

        ChaanaDal: {
            Name: "Chaana dal",
            QuantityInGramAndKg: [500, 750, 1, 1.5, 2],
            PurchasingPrice: [40, 60, 80, 120, 160],
            SellingPrice: [50, 75, 100, 150, 200]
        },

        MixTadkaDal: {
            Name: "Mix Tadka dal",
            QuantityInGramAndKg: [500, 750, 1, 1.5, 2],
            PurchasingPrice: [40, 60, 80, 120, 160],
            SellingPrice: [50, 75, 100, 150, 200]
        }
    },

    Spices: {
        SaltTata:{
            Name: "Salt Tata",
            QuantityInGramAndKg: [250, 500, 1],
            PurchasingPrice: [10, 20, 40],
            SellingPrice: [20, 40, 80]
        },

        EverestVegetableMasala:{
            Name: "Everest Vegetable Masala",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        MeatMasala: {
            Name: "Meat masala",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        ChickenMasala: {
            Name: "Chicken masala",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        GaramMasala: {
            Name: "Garam masala",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        EverestDhania: {
            Name: "Everest Dhania powder",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        EverestHaldi: {
            Name: "Everest Haldi powder",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        EverestKashmiriMirch: {
            Name: "Everest kashmiri mirch",
            QuantityInGram: [50, 100, 150, 200, 250],
            PurchasingPrice: [8, 16, 24, 32, 40],
            SellingPrice: [10, 20, 30, 40, 50]
        },

        Sugar: {
            Name: "Sugar",
            QuantityInGramAndKg: [250, 500, 750, 1, 1.5, 2],
            PurchasingPrice: [8, 16, 24, 32, 48, 64],
            SellingPrice: [10, 20, 30, 40, 60, 80]
        }
    },

    Dairy: {
        AmulMilk: {
            Name: "Amul milk",
            QuantityInMlAndLitre: [500, 1],
            PurchasingPrice: [30, 60],
            SellingPrice: [40, 80]
        },

        RedCowMilk: {
            Name: "Red cow milk",
            QuantityInMlAndLitre: [500, 1],
            PurchasingPrice: [30, 60],
            SellingPrice: [40, 80]
        },

        AmulDahi: {
            Name: "Amul tazza dahi",
            QuantityInGramAndKg: [200, 400, 1],
            PurchasingPrice: [15, 30, 75],
            SellingPrice: [20, 40, 100]
        },

        RedCowDahi: {
            Name: "Red cow dahi",
            QuantityInGramAndKg: [200, 400, 1],
            PurchasingPrice: [15, 30, 75],
            SellingPrice: [20, 40, 100]
        }

    },

    PersonalCare:{
        JasmineOil: {
            Name: "Jasmine coconut oil",
            QuantityInMl: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        PatanjaliOil: {
            Name: "Patanjali coconut oil",
            QuantityInMl: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        NiharOil: {
            Name: "Nihar coconut oil",
            QuantityInMl: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        LorealShampoo: {
            Name: "Loreal shampoo",
            QuantityInMl: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        SunsilkShampoo: {
            Name: "Sunsilk shampoo",
            QuantityInMl: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        PearsSoap: {
            Name: "pears soap",
            QuantityInGm: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        DettolSoap:{
            Name: "Dettol soap",
            QuantityInGm: [50, 100, 250],
            PurchasingPrice: [8, 16, 40],
            SellingPrice: [10, 20, 50]
        },

        PalmoliveBodyWash:{
            Name: "palmolive body wash",
            QuantityInMlAndLitre: [50, 100, 250, 500, 1],
            PurchasingPrice: [8, 16, 40, 80, 160],
            SellingPrice: [10, 20, 50, 100, 200]
        },

        LuxBodyWash: {
            Name: "Lux body wash",
            QuantityInMlAndLitre: [50, 100, 250, 500, 1],
            PurchasingPrice: [8, 16, 40, 80, 160],
            SellingPrice: [10, 20, 50, 100, 200]
        },

        DettolBodyWash: {
            Name: "Dettol body wash",
            QuantityInMlAndLitre: [50, 100, 250, 500, 1],
            PurchasingPrice: [8, 16, 40, 80, 160],
            SellingPrice: [10, 20, 50, 100, 200]
        },

        SavalonBodyWash: {
            Name: "Savalon body wash",
            QuantityInMlAndLitre: [50, 100, 250, 500, 1],
            PurchasingPrice: [8, 16, 40, 80, 160],
            SellingPrice: [10, 20, 50, 100, 200]
        }

    },

    CleaningItems: {
        LizolFloorCleaner: {
            Name: "Lizol floor cleaner",
            QuantityInMlAndLitre: [500, 1],
            PurchasingPrice: [30, 60],
            SellingPrice: [40, 80]
        },

        DettolHandwash: {
            Name: "Dettol Handwash",
            QuantityInMlAndLitre: [500, 1],
            PurchasingPrice: [30, 60],
            SellingPrice: [40, 80]
        },

        VimLiquid: {
            Name: "Vim liquid",
            QuantityInMlAndLitre: [500, 1],
            PurchasingPrice: [30, 60],
            SellingPrice: [40, 80]
        },

        VimSoapBar: {
            Name: "Vim soap bar",
            QuantityInGm: [100, 250, 500],
            PurchasingPrice: [8, 20, 40],
            SellingPrice: [10, 25, 50]
        },

        SurfExcel: {
            Name: "Surf excel",
            QuantityInGramAndKg: [250, 500, 1],
            PurchasingPrice: [8, 20, 40],
            SellingPrice: [10, 25, 50]
        }
    }

}

console.log(ProductCatalog);
console.log(ProductCatalog.Rice);
console.log(ProductCatalog.Rice.Himalaya);
console.log(ProductCatalog.Rice.Himalaya.QuantityInKg);

const ReturnIndexOfQuantityForHimalayaRice = (quantity) => {
   return ProductCatalog.Rice.Himalaya.QuantityInKg.findIndex(item => item === quantity)
}
console.log(" Name of Rice is "+ ProductCatalog.Rice.Himalaya.Name);
console.log(" Purchase Price of Himalaya Rice "+ ProductCatalog.Rice.Himalaya.PurchasingPrice[ReturnIndexOfQuantityForHimalayaRice(1)]);
console.log(" Selling Price of Himalaya Rice "+ ProductCatalog.Rice.Himalaya.SellingPrice[ReturnIndexOfQuantityForHimalayaRice(1)]);
console.log(ReturnIndexOfQuantityForHimalayaRice(1));
console.log('hi')