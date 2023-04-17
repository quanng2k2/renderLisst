import React from 'react'

export default function FooterProduct() {
  return (
    <div>
      <footer>
        <div className='footerProduct'>
          <h2>Cart</h2>
          <div className='cartMoney'>
            <div className='textCart'><h5>Em mệt mỏi lắm rồi thầy ạ !!!</h5></div>
            <div className='priceCart'><h5> 3000 $</h5></div>
          </div>
          <div className='cartMoney'>
            <div className='textCart'><h5>Em mệt mỏi lắm rồi thầy ạ !!!</h5></div>
            <div className='priceCart'><h5> 3000 $</h5></div>
          </div>
          <div className='totalCart'>
            <div><h4 className='totalSum'>Total : $ 6000 </h4></div>
            <div><button className='buttonFooter'>Reset Cart</button></div> 
          </div>
        </div>
      </footer>
    </div>
  )
}
