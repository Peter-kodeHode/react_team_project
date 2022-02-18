import React, { useState } from 'react';
import "./AmountSection.css"

export default function AmountSection() {

    const [guests, setGuests] = useState("")
    const [days, setDays] = useState("")
    const [price, setPrice] = useState("")

    function add(a, b) {
        if(a === ""){
            b(1)
            return
        }
        b(preValue => parseInt(preValue) + 1)
    }

    function sub(a, b) {
        if(a <= 1){
            b("")
            return
        }
        b(preValue => parseInt(preValue) - 1)
    }

    return (
        <div className="amount-section">
            <p>Guests</p>
            <p>Days</p>
            <p>Price</p>
            <div className="guests-btn amount-btn">
                <button onClick={() => sub(guests, setGuests)}>-</button>
                <button onClick={() => add(guests, setGuests)}>+</button>
                <input value={guests} placeholder="0" onChange={(e) => setGuests(e.target.value)} className="guests-counter" type="number"/>
            </div>
            <div className="days-btn amount-btn">
                <button onClick={() => sub(days, setDays)}>-</button>
                <button onClick={() => add(days, setDays)}>+</button>
                <input value={days} placeholder="0" onChange={(e) => setDays(e.target.value)} className="guests-counter" type="number"/>
            </div>
            <div className="price-btn amount-btn">
                <button onClick={() => sub(price, setPrice)}>-</button>
                <button onClick={() => add(price, setPrice)}>+</button>
                <input value={price} placeholder="0" onChange={(e) => setPrice(e.target.value)} className="guests-counter" type="number"/>
            </div>
            <button className='search-red'>search</button>
        </div>
    )
}