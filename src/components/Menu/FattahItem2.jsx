
const FattahItem2 = ({ item }) => {

    return (
        <div className='fattah-item-2'>
            
            <div className="info-container">
                    
                <div className='title-container'>
                    <span className='main-title'>{item.arabic}</span>
                    <span className='secondary-title'>{item.english}</span>
                </div>

                <div className='prices-container'>
                    {item.prices.map((price, index) => (
                        <div key={index} className='price-item'>

                            <span className='size'>
                                {price.size}
                            </span>
                            
                            <span className='price'>
                                {price.price}  {" "}
                                
                                <span className="currency">
                                    LE
                                </span>
                            </span>
                        </div>
                    ))}
                </div>

                
                <div className='image-container'>
                    <img src={item.image} />
                </div>

            </div>
  
      </div>
  
    )
  }
  
  export default FattahItem2