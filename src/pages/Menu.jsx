import FoodItem from '../components/Menu/FoodItem'
import { fattahList, sandwichList } from '../data/foodList'
import background from '../assets/images/logos/background1.svg'
import FattahItem from '../components/Menu/FattahItem'
import FattahItem2 from '../components/Menu/FattahItem2'

const Menu = () => {

  return (
      <>
        <img className='overlay-bg' src={background} />
        <div className='categories-container'>

              <div className='category-item'>

                    <h2 className='category-title'>Sandwiches</h2>

                    <div className='food-list'>

                      {sandwichList.map(item => (
                          <FoodItem 
                            key={item.id}
                            item={item}
                          />
                      ))}

                    </div>
              </div>

              <div className='category-item'>

                  <h2 className='category-title'>FATTAH</h2>

                  <div className='fattah-list'>

                    {fattahList.map((item, index) => {
                        if (index % 2 === 0) return (
                          <FattahItem 
                            key={item.id}
                            item={item}
                          />
                        )
                        return (
                          <FattahItem2
                            key={item.id}
                            item={item}
                          />
                        )
                      })}

                  </div>
              </div>

        </div>
      </>
  )
}

export default Menu