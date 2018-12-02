import Link from 'next/link'

const Calls = ({ issues }) => (
  <article>
    <h1>Chamadas</h1>
    {console.log(issues)}
    <style jsx>{`
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

export default Calls
