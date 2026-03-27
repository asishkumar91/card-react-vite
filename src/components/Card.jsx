import { useEffect, useRef, useState } from 'react'
import './Card.css'

const Card = ({ count }) => {

  const [visible, setVisible] = useState([]);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);
  const lastCard = useRef(null);
  const [color, setColor] = useState(true);


  const RandomColor = ((element) => {  // One element at a time.

    let r = 255 * Math.random();
    let g = 255 * Math.random();
    let b = 255 * Math.random();

    element.style.boxShadow = `-5px 0px  rgb(${r},${b},${g})`;

  })

  const ShowMessage = ((text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  })

  useEffect(() => {

    async function getdata() {
      let x = await fetch('https://jsonplaceholder.typicode.com/posts');
      let val = await x.json();
      setData(val);
    }

    getdata();
  }, [])  //Runs only once during first Render


  useEffect(() => {
    if (data.length > 0 && count <= data.length) {  //Data already have been fetched.
      setVisible((previous) => [...previous, data[count]]);
      ShowMessage("New Card Added")
      setColor(true);
    }
  }
    , [count, data])

  useEffect(() => {
    if (lastCard.current)
      lastCard.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [visible]);


  return (


    <div className='Card-container'>

      <div style={{ textAlign: 'center', height: '2em' }}>
        <h3 style={{ opacity: message ? 1 : 0, transition: 'opacity 0.5s' }}>
          {message || ' '}
        </h3>
      </div>

      {
        visible.map((item, index) => (

          <div key={item.id} className='card'
            ref={(el) => {
              if (el && index === count && color) {
                lastCard.current = el;       // store in ref for scroll
                RandomColor(el);   // apply random color
                setColor(false);
              }
            }}>
            <div className='el' style={{ boxShadow: "-2px 2px 5px grey" }}>
              <div id='id'><h5>USER ID: {item.userId} </h5></div>
              <div id='id'><h5>ID: {item.id} </h5></div>
            </div>

            <div id='title'><h2>TITLE: {item.title}</h2></div>
            <div>{item.body}</div>
          </div>
        ))}
    </div>

  )
}

export default Card
