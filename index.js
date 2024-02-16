//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes
class Product {
    static addItem (upc,name,type,purchasePrice,quantity){
        return new Product (upc,name,type,purchasePrice,quantity)
    }


    constructor(upc,name,type,purchasePrice,quantity=1){
        this.upc=upc;
        this.name=name;
        this.type=type;
        this.purchasePrice=purchasePrice;
        this.quantity=quantity;
    }
}
class Store {


    static createNewStore(name,city,state,balance){
        let getTax = salesTax.filter(salesTax => salesTax.state === state)
        this.sales_Tax = getTax[0].tax;
        return new Store (name,city,state,balance,this.sales_Tax)
    }

    constructor(name,city,state,salesTax,inventory,balance,expense,profit,tax_paid){
        this.name=name;
        this.city=city;
        this.state=state;
        this.salesTax=salesTax;
        this.inventory=inventory;
        this.balance=balance;
        this.expense=expense;
        this.profit=profit;
    }
};

addItemToInventory(product, markupPrice){
    const existingProduct=this.inventory.find(item => item.upc === newProduct.upc);

    if(existingProduct) {
        existingProduct.quantity += product.quantity
    } else {
            product.updateMarketPrice(markupPrice);
            this.inventory.push(product);
            this.balance-=product.purchasePrice * product.quantity;
        }
};

sellItem(upc,quantity,markupPrice){
    const product = this.inventory.find(item=> item.upc === upc);

    if (product && product.quantity >= quantity){
        product.updateMarketPrice(markupPrice)
        product.quantity -= quantity;
        const totalPrice = product.markupPrice * quantity;
        const purchaseValue = product.markupPrice * quantity;
        this.balance += totalPrice;
        this.profit += totalPrice-purchaseValue;
        this.expense += purchaseValue;
        this.paidTax += totalPrice * this.salesTax;
    } else {
        console.log(`Sorry! Your item with ${upc} is out of stock.`)
    }
}; 

//! CREATE STORES
const StoreOne = Store.createNewStore(`ABC Thrift`,`Long Beach`,`California`, 350);

const recordPlayer = new Product(1,`Record Player`,`Electronics`,25,4);
const dressShirt = new Product(2,`Dress Shirt`,`Clothing`,6,5);
const funkyPants = new Product (3,`Funky Pants`,`Clothing`,1,9);

//! Inventory
StoreOne.addItemToInventory(recordPlayer, 0.4);
StoreOne.addItemToInventory(dressShirt,0.25);
StoreOne.addItemToInventory(funkyPants,0.3);


const StoreTwo = Store.createNewStore(`DEF Thrift`, `Denver`, `Colorado`, 425);
const StoreThree = Store.createNewStore(`GHI Thrift`, `Moab`, `Utah`, 250);


//! Stocking