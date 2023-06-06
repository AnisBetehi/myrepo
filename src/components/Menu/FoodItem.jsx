
const FoodItem = ({ item }) => {

  return (
      <div className='food-item'>

        <div className='prices-container'>
            {item.prices.sort((a, b) => {
                if (a.isCombo) return -1
                return 1
            }).map((price, index) => (
            <div key={index} className={`price-item ${price.isCombo ? 'is-combo' : ''}`}>
        
                <span className='combo-title'>
                    Combo
                </span>
                
                <span className='price'>
                    {price.price}  
                    
                    <span className="currency">
                        LE
                    </span>
                </span>
            </div>
            ))}
        </div>

        <div className='title-container'>
            <span className='main-title'>{item.arabic}</span>
            <span className='secondary-title'>{item.english}</span>
        </div>

        <div className='image-container'>
            <img src={item.image} />
        </div>

    </div>

  )
}

export default FoodItem