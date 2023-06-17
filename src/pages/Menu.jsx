import FoodItem from '../components/Menu/FoodItem'
import { fattahList, sandwichList, sideItems } from '../data/foodList'
import background from '../assets/images/logos/background1.svg'
import FattahItem from '../components/Menu/FattahItem'
import SideItem from '../components/Menu/SideItem'
import FattahItem2 from '../components/Menu/FattahItem2'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import googlePlayBadge from '../assets/images/google-play-badge.png'
import appStoreBadge from '../assets/images/app-store-badge.svg'

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

                    
                    <div className='company-info'>

                        <div className='hotline'>
                            <h3>
                                HOTLINE
                            </h3>
                            <span>16<span className='text-accent'>6</span>47</span>
                        </div>

                        <div className='social-accounts'>

                              <div>
                                <AiFillTwitterCircle />
                                <BsFacebook />
                                <AiFillInstagram />
                              </div>

                              <span>www.shawermer.net</span>
                        </div>

                        <div className='apps'>

                            <div>
                                <img src={googlePlayBadge} alt="google-play-badge" />
                            </div>

                            <div>
                                <img className='apple-store-badge' src={appStoreBadge} alt="app-store-badge" />
                            </div>

                        </div>

                    </div>

              </div>

              <div>

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


                <div className='category-item' style={{marginTop: '.8rem'}}>

                    {/* <h2 className='category-title'>Side Items</h2> */}

                    <div className='side-items-list'>

                    {
                      sideItems.reduce((accum, item) => {
                    
                        const samePrice = accum.find(it => it.price === item.price);

                        if (samePrice) {

                          let newList = accum.map(it => {
                            if (it.id === samePrice.id) return {
                              ...it,
                              titles: [...it.titles, {
                                arabic: item.arabic,
                                english: item.english
                              }]
                            }
                            return it
                          })

                          return newList;
                        }

                        return [
                          ...accum, 
                          {
                            ...item,
                            titles: [{
                              arabic: item.arabic,
                              english: item.english
                            }]
                          }
                        ]
                      
                    }, [])
                    .map((item) => (
                        <SideItem
                            key={item.id}
                            item={item}
                        />
                    ))}

                    </div>
                </div>

              </div>

        </div>
      </>
  )
}

export default Menu