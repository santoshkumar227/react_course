import React from 'react';

export function DataBinding() {
    var uname = "Krishna";
    var age = 24;
    var msg = "Hello " + uname + ", you will be " + (age + 1 ) + " next year.";
    var msg2 = `Hello ${uname}, you will be ${age + 1} next year.`; // Template string
    var price = 30210.00;
    var x = "10";
    var n = 394857927385345n; // BigInt
    var m = 0b1010; // Binary
    var o = 2e4; // Scientific notation
    var octa = 0o764; // Octal
    var link = "<a href='https://www.google.com'>Google</a>";
    var path = "D:\\React\\web-apps\\shopping-react-app\\src\\components\\data-binding\\data-binding.jsx";

    // Data Binding in React
    var tv = "Samsung";
    var stock = true;

    var prices = parseInt(prompt("Enter price:"));
    var Id = Symbol();
    var product = { [Id]: 101, name: "Dell Laptop", price: 50200.24 };

    return (
        <>
        <div className='container-fluid p-4'>
            <h2 className='text-center'> Data binding with primitive types </h2>
            <hr/>
            Hello {uname}
            <input type="text" value={uname} className='form-control w-25' />
            price = {price.toLocaleString('en-in',{style:'currency', currency:'INR'})} <br />
            <p> { parseInt(x) } </p>

            <p>{ n.toString() } </p>

            <p> { m.toString() } </p>

            <p> { o.toString() } </p>
            
            <p> { "Octa:- " + octa.toString() } </p>

            <p> { link } </p>

            <p> {msg} </p>

            <p> {msg2} </p>

            <p> { path } </p>

            <p> { msg.toUpperCase().slice(0,17) } </p>

<h3>Primitive types in javascript are:- String, Number, BigInt, Boolean, Undefined, Null, Symbol </h3>
<p>Immutable, stored in memory stack, Have fixed range for value </p>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h3>Data Binding in React (Boolean)</h3>
                    <dl  className="row bg-light p-3 rounded shadow-sm">
                    <dt className="col-sm-3 fw-bold text-end">TV</dt>
                    <dd className="col-sm-9 text-start">{tv}</dd>
                    <dt className="col-sm-3 fw-bold text-end">Stock</dt>
                    <dd className="col-sm-9 text-start">{stock ? "In Stock" : "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h3>Data Binding in React (Undefined)</h3>
                    <dl  className="row bg-light p-3 rounded shadow-sm">
                    <dt className="col-sm-3 fw-bold text-end"> Undefined: </dt>
                    <dd className="col-sm-9 text-start">{(prices === null) ? "Please Enter a value" : prices }</dd>
                    </dl>
                </div>
            </div>

            <p>Follow only good practice code:- HEre are the tools:-  PMD, Sonar, ESLint </p>

            
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h3>Data Binding in React (Symbol)</h3>
                    <p>Symbol is a new Data Type of javascript available from ES5 and higher version. It is used to configure a hidden "key" for Object. </p>
                    <p>Hidden keys are not accessable over iterations. But they are available individually for manipulations</p>
                    <p> We can accesss keys using Object.keys() method of javascript</p>
                    <dl  className="row bg-light p-3 rounded shadow-sm">
                    <dt className="col-sm-3 fw-bold text-end"> Undefined: </dt>
                    <dd className="col-sm-9 text-start">{ product.name }</dd>
                    </dl>
                    {
                        Object.keys(product).map(key => <li > {key} </li>)
                    }
                    <h3> product Id = {product[Id]}</h3>
                </div>
            </div>
            
        </div>
        </>
    );
}
