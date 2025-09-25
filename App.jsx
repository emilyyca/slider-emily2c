import { useState } from 'react'
import './App.css'
import Carmy from './assets/calca.webp'
import Cjoa from './assets/top.webp'
import Curs from './assets/verde.webp'
import Slider1 from './assets/slider1.png'
import Slider2 from './assets/slider2.png'
import Slider3 from './assets/slider3.png'
import Slider4 from './assets/slider4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Top Selene</h2>
              <p className="desc">Eleve seu desempenho e estilo com Top Selene nadador e sem costura.</p>
              <p className="preco">R$ 44,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (712)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Calça Legging Rise</h2>
              <p className="desc">Versatilidade e essencial é a Calça Legging Rise para combinar com qualquer look.</p>
              <p className="preco">R$ 59,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (305)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Conjunto Lisa</h2>
              <p className="desc">O Conjunto Lisa é composto por uma Calça Legging e um Top de alça sendo a combinação perfeita.</p>
              <p className="preco">R$ 119,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (273)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/GVljFVClyws?autoplay=1&mute=1&controls=0&loop=1&playlist=GVljFVClyws&modestbranding=1&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>
        <footer>

          <img src="" alt="" className='logo-footer' />
          
          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id='instagram'/>
            </div>
            <div className="icon">
            <img src="" alt="" id='google'/>
            </div>
            <div className="icon">
            <img src="" alt="" id='facebook'/>
            </div>
            <div className="icon">
            <img src="" alt="" id='discord'/>
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
