
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const displayContent = (value) => {
    setInput(input + value)
  }

  const clearScreen = () => {
    setInput('')
  }

  const calculateResult = () => {
  
      const result = eval(input) 
      setInput(result.toString())
    
  }

  const removeLastDigit = () => {
    setInput(input.slice(0, -1))
  };


  return (
    <div style={{ width: '100%', height: '100vh' }} className='bg-dark d-flex justify-content-center align-items-center'>
      <div style={{width:'500px',backgroundColor:'orange'}} className=' rounded p-5'>
        <div style={{}}className=' bg-light rounded p-5' >
        <button className='form-control p-5 bg-dark mb-3 text-white'>{input || '0'}</button>
        <div className='ms-3 p-2'>
         <div class="cal-button-row">
          <button onClick={()=>displayContent('7')} id="seven">7</button>
          <button onClick={()=>displayContent('8')}id="eight">8</button>
          <button onClick={()=>displayContent('9')} id="nine">9</button>
          <button onClick={()=>displayContent('*')} id="mul">*</button>
          </div>
          <div class="cal-button-row">
          <button onClick={()=>displayContent('4')} id="four">4</button>
          <button onClick={()=>displayContent('5')} id="five">5</button>
          <button onClick={()=>displayContent('6')}id="six">6</button>
          <button onClick={()=>displayContent('-')}id="sub">-</button>
          </div>
          <div class="cal-button-row">
          <button onClick={()=>displayContent('1')} id="one">1</button>
          <button onClick={()=>displayContent('2')} id="two">2</button>
          <button onClick={()=>displayContent('3')}id="three">3</button>
          <button onClick={()=>displayContent('+')} id="add">+</button>
          </div>
          <div class="cal-button-row">
          <button  onClick={()=>displayContent('.')} >.</button>
          <button onClick={()=>displayContent('0')} >0</button>
          <button onClick= {()=>displayContent('/')} >/</button>
          <button onClick={calculateResult}  >=</button>
          </div>
          <div class="row">
    <div class="col">
      <button onClick={clearScreen} style={{width:'90px'}} >AC</button>
    </div>
    <div class="col">
      <button onClick={removeLastDigit} style={{width:'90px'}}>DEL</button>
    </div>
  </div>
         </div>
          </div>
         
          
        </div>
      </div>
   
  )

}
export default App
