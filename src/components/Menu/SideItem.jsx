import React from "react"

const SideItem = ({ item }) => {

    return (
        <div className='side-item'>
          
            <div className="price-container">
                <span className="price">{item.price}</span>
                <sm className="currency">LE</sm>
            </div>

            <div className="border"></div>
            
            <div className='title-container'>
                {item.titles.map((title, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <span className='main-title'>{title.arabic}</span>
                            <span className='secondary-title'>{title.english}</span>
                        </div>
                        {
                            index + 1 !== item.titles.length && 
                                <span className="seperator">
                                    -
                                </span>
                        }
                    </React.Fragment>
                ))}
            </div>

      </div>
  
    )
  }
  
  export default SideItem