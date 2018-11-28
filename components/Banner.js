import Link from 'next/link'
import { withRouter } from 'next/router'
import Carousel from 'nuka-carousel'

const Banner = ({ router: { pathname }, editions }) => (
  <article>
    <Carousel
      autoplay={true}
      renderBottomRightControls={({ currentSlide, goToSlide }) => {
        return (
          <div className="slideControls">
            {editions.map((e, key) => (
              <div
                onClick={() => goToSlide(key)}
                key={e.id}
                className={(key === currentSlide) ? 'slideControl selected' : 'slideControl'}
              />
            ))}
          </div>
        )
      }}
      renderCenterLeftControls={({ previousSlide }) => null}
      renderCenterRightControls={({ nextSlide }) => null}
      renderBottomCenterControls={({ currentSlide }) => null}
    >
      {editions.map(e => <div key={e.id}><Link href={`/edition?key=${e.key}`}>
        <div className="slide">
          <h1>{e.title}</h1>
        </div>
      </Link></div>)}
    </Carousel>
    <style jsx>{`
      articles {
        margin-botom: 80px;
      }
      .slideControls {
        display: flex;
        flex-flow: row no-wrap;
      }
      .slideControl {
        position: relative;
        bottom: -20px;
        width: 15px;
        height: 15px;
        border: 1px solid green;
        margin: 0 2.5px;
        cursor: pointer;
      }
      .selected {
        background: green;
      }
      .slide {
        width: 100%;
        height: 350px;
        background: rgba(0,0,0,0.1);
      }
      .slide h1 {
        padding: 25px 35px;
      }
    `}</style>
  </article>
)

export default withRouter(Banner)
