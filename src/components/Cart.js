import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achat`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer le panier</button>
            <h2>Panier</h2>
            {cart.map(({name, price, amount}, index) =>
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            )}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])} >Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart


useEffect = (() => {
    console.log(`Bonjour, j'ai ${montant}€ dans mon porte-feuilles.`)
}, [montant])