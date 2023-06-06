
const SideItem = ({ item }) => {

    return (
        <div className='side-item'>

          
            <div className="price-container">
                <span className="price">{item.price}</span>
                <sm className="currency">LE</sm>
            </div>

            <div className="border"></div>
            
            <div className='title-container'>
                <span className='main-title'>{item.arabic}</span>
                <span className='secondary-title'>{item.english}</span>
            </div>

      </div>
  
    )
  }
  
  export default SideItem