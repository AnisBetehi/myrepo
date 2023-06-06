
const DrinkItem = ({ item }) => {

    return (
        <div className='drink-item'>

            <div className='title-container'>
                <span className='main-title'>{item.arabic}</span>
                <span className='secondary-title'>{item.english}</span>
            </div>

            <div className="price-container">
                <span className="price">{item.price}</span>
                <sm className="currency">LE</sm>
            </div>
      </div>
  
    )
  }
  
  export default DrinkItem