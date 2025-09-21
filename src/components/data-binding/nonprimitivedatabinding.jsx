import React from 'react'

export default function Nonprimitivedatabinding() {
   const arr1 = [10, 20, 30];
   const arr2 = [...arr1, 40, 50, 60];
   const arr3 = [100, 200, ...arr2, 300];
    const categories = ['Electronics', 'Books', 'Clothing', 'Home', 'Sports'];
    const sales = [12000, 23000, 45000, 67000, 89000];
    
    const one = [10,20,30];
    const two = [...one, 50,60,70];

    var product = {
        "Name": "Samsung TV",
        "Price": 46000.44,
        "Stock": true,
        "Cities": ["Delhi", "Hyd"],
        "Rating": {
            "Rate": 4.5,
            "Count": 5000
        }
    }
    var details = [201, "Krishna", "Hyd", 90000.44, true];
    var [id, name, city, sal, stock] = details; // Array destructuring

  return (
    <div className='container-fluid p-4'>
        <div className="card shadow p-4">
            <h3 className='text-center mb-3'>Binding Non primitive DataTypes</h3>
            <hr />
            <p>Mutable, stored in memory heep, Have according to the memory availablity.</p>
            <p>Non primitive data types are:- Object, Array, Function</p>
            <p>Non primitive data types are also called as Reference data types</p>
            <p>Non primitive data types are stored in memory heap and their reference is stored in memory stack</p>

            <div className="mb-3">
                <p>1 Array</p>
      <p>- Array configuration is same as javascript</p>
      <pre className="bg-light p-3 rounded">
{`var values = [];
var values = new Array();`}
      </pre>

      <p>- Array Manipulation is same as in javascript</p>
      <p>reading length and values</p>
      <hr />
      <ul className="list-group mb-3">
        <li className="list-group-item">length</li>
        <li className="list-group-item">toString()</li>
        <li className="list-group-item">join()</li>
        <li className="list-group-item">slice()</li>
        <li className="list-group-item">find()</li>
        <li className="list-group-item">filter()</li>
        <li className="list-group-item">forEach()</li>
        <li className="list-group-item">map()</li>
      </ul>

      <p>add elements</p>
      <ul className="list-group mb-3">
        <li className="list-group-item">push() - will add the item as last item</li>
        <li className="list-group-item">unshift() - will add the item as first item</li>
        <li className="list-group-item">splice() - specific index reference</li>
      </ul>

      <p>remove elements</p>
      <ul className="list-group mb-3">
        <li className="list-group-item">pop() - will remove the last item</li>
        <li className="list-group-item">shift() - will remove the first item</li>
        <li className="list-group-item">splice() - specific item</li>
      </ul>

      <p>sorting elements</p>
      <ul className="list-group mb-3">
        <li className="list-group-item">sort() - will sort the array in ascending order</li>
        <li className="list-group-item">reverse() - will reverse the array</li>
      </ul>

      <p>- Configuring array with spread operator is same as in javascript</p>
      <pre className="bg-light p-3 rounded">
        {`// Example:
        var arr1 = [10,20,30];
        var arr2 = [...arr1,40,50,60];
        var arr3 = [100,200,...arr2,300];`}
      </pre>

      <h6>Output:</h6>
      <ul className="list-group mb-3">
        {arr3.map((v, i) => (
          <li key={i} className="list-group-item">{v}</li>
        ))}
      </ul>

      <p>push(), pop(), shift(), unshift(), splice(), indexOf(), includes(), forEach(), map(), filter(), reduce() etc</p>
      <p>- Array Iteration is same as in javascript</p>
      <p>for loop, for..in, for..of, forEach(), map() etc</p>
            <ul>
                { categories.map((caterogy, index) => <li key = {index}> {caterogy} </li>)}
            </ul>

            <select className="form-select w-25">
                <option value="">--Select--</option>
                { categories.map((caterogy, index) => <option key = {index} value={caterogy}> {caterogy} </option>)}
            </select>

            <ul className='list-unstyled mt-4'>
                { categories.map((caterogy, index) => <li key = {index} value={caterogy} ><input type='checkbox' key = {index} value={caterogy} /><label> { caterogy } </label></li>)}
            </ul>

            <div className="mb-3">
                <h5>Sales Chart</h5>
                <table className="table table-bordered table-striped w-50">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        { categories.map((caterogy, index) => <tr key = {index}> <td> {caterogy} </td> <td> { sales[index] > 40000 ?  sales[index].toLocaleString('en-in', { style: 'currency', currency: 'INR' }) : "here" } </td> </tr>)}
                            <br/>
                            <br/>
                        { sales.filter(value => value > 40000).map((value, index) => <tr key = {index}> <td> {categories[index]} </td> <td> { value.toLocaleString('en-in', { style: 'currency', currency: 'INR' }) } </td> </tr>)}
                            <br/>    <br/> Foreach   <br/>
                        <ol className='list-unstyled'>
                            { sales.forEach((value, index) => <tr key = {index}> <td> [{index}] {sales[index]} </td> <td> { value.toLocaleString('en-in', { style: 'currency', currency: 'INR' }) } </td> </tr>)}
                        </ol>
                        <p>You have to filter data from array by using the "filter()" method and present by using a "map()".</p>

                        <p>forEach() method does not return any value, so we cannot use it for rendering the data.</p>
                        <p>forEach() is used to iterate the array for processing the data.</p>

                    </tbody>
                </table>

                { two.map((v,i) => <span key={i} className="badge bg-secondary me-2">{v}</span>) }

                <h2> Object Type </h2>
                <p>Object is a key/value collection.</p>
                <p>It comprises related data and logic.</p>
                <p>If only data is present then it is referred as "JSON" [JavaScript Object Notation].</p>
                <p>Key is always string type.</p>
                <p> Value can be any type. </p>
                <pre className="bg-light p-3 rounded">
{`var product = {
    "Name": "Samsung TV",
    "Price": 46000.44,
    "Stock": true,
    "Cities": ["Delhi", "Hyd"],
    "Rating": {
        "Rate": 4.5,
        "Count": 5000
    }
}`}
                </pre>

            <p> array destructuring</p>
            <pre>
                <p>var details = [201, "Krishna", "Hyd", 90000.44, true];</p>
    <p>var [id, name, city, sal, stock] = details; // Array destructuring</p>
            </pre>

            <div>
                id: {id} <br />
                name: {name} <br />
                city: {city} <br />
                sal: {sal} <br />
                stock: {stock ? "Active" : "Inactive"} <br />
            </div>

            <div className="mt-3">
                <h5>Product Details</h5>
                <p>Product Name: {product.Name} </p>
                <p>product name: {  }</p>
                <p>Product Price: {product.Price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })} </p>
                <p>Product Stock: {product.Stock ? "In Stock" : "Out of Stock"} </p>
                <p>Available in Cities:
                    {product.Cities.map((city, index) => <span key={index} className="badge bg-info text-dark me-2">{city}</span>)}
                </p>
                <p>Rating: {product.Rating.Rate} ({product.Rating.Count} reviews)</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
