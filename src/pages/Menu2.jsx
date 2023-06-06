import { drinks, sideItems } from '../data/foodList'
import background from '../assets/images/logos/background2.svg'
import DrinkItem from '../components/Menu/DrinkItem'
import SideItem from '../components/Menu/SideItem'
import shape from '../assets/images/logos/shape.svg'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'

const Menu2 = () => {

  return (
      <div className='information-page'>

        <img className='overlay-bg' src={background} />

        <img className='shape' src={shape} />
       
        <div className='company-info'>
            <div className='socials'>

                <div className='qr-code'>
                        <span>QR CODE HERE</span>
                </div>

                <div className='hotline'>
                    <h3>
                        HOTLINE
                    </h3>
                    <span>16<span className='text-accent'>6</span>47</span>
                </div>

                <div className='social-accounts'>

                    <div>
                        <BsFacebook />
                        shawermer_eg
                    </div>

                    <div>
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        shawermer_eg
                    </div>

                </div>
            </div>

            <div className='addresses'>

                    <div>
                        <TiLocation />
                        shawermer_eg
                    </div>

                    <div>
                        <TiLocation />
                        shawermer_eg
                    </div>

                    <div>
                        <TiLocation />
                        shawermer_eg
                    </div>

                    <div>
                        <TiLocation />
                        shawermer_eg
                    </div>

                    <div>
                        <TiLocation />
                        shawermer_eg
                    </div>

                </div>

        </div>

        <div>

            <div className='category-item'>

                    <h2 className='category-title'>Drinks</h2>

                    <div className='drinks-list'>

                        {drinks.map((item) => (
                            <DrinkItem 
                                key={item.id}
                                item={item}
                            />
                        ))}

                    </div>
            </div>

            <div className='category-item'>

                <h2 className='category-title'>Side Items</h2>

                <div className='side-items-list'>

                {sideItems.map((item) => (
                    <SideItem
                        key={item.id}
                        item={item}
                    />
                ))}

                </div>
            </div>
        </div>


      </div>
  )
}

export default Menu2