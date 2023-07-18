export const products = [
    { ID: 1, Name: 'Tissue Box',ProductCode: "p1" , UnitPrice: 105},
    { ID: 2, Name: 'Potato',ProductCode: "p2" , UnitPrice: 40},
    { ID: 3, Name: 'Headphone',ProductCode: "p3" , UnitPrice: 2600},
    { ID: 4, Name: 'Face Musk',ProductCode: "p4" , UnitPrice: 250},
    { ID: 5, Name: 'Water Bottle',ProductCode: "p5" , UnitPrice: 20},
    { ID: 6, Name: 'Yogurt',ProductCode: "p6" , UnitPrice: 65},

  ];
  
  export function GetProductList(){
    
        console.log(products);
        let productListDom =""
        products.forEach((product)=>{
            productListDom += (
                `
                    <tr class='row'>
                        <th scope="row">${product.ID}</th>
                        <td>${product.Name}</td>
                        <td>${product.ProductCode}</td>
                        <td>${product.UnitPrice}</td>
                        <td><button class="btn btn-primary add-to-cart">Add To Cart</button></td>
                        
                    </tr>
                `
            )
        })
        return productListDom;
}