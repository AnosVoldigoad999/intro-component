import './App.css'
import { useState } from 'react' 
export default function App (){
  const [email, setEmail] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [pass, setPass] = useState('')
  /*classes*/
  const [inputclass, setClass] = useState('')
  const [redfirst, setRedFirst] = useState('')
  const [redlast, setRedLast] = useState('')
  const [redpass, setRedPass] = useState('')
  /*span*/
  const [firstSpan, setFirstSpan] = useState('')
  const [lastSpan, setLastSpan] = useState('')
  const [emailSpan, setEmailSpan] = useState('')
  const [passSpan, setPassSpan] = useState('')
  const pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(first.length===0){
      setRedFirst('red')
      setFirstSpan('First Name cannot be empty')
    } else{
      setRedFirst('')
      setFirstSpan('')
    }
    if(last.length===0){
      setRedLast('red')
      setLastSpan('Last Name cannot be empty')
    } else{
      setRedLast('')
      setLastSpan('')
    }


  if(email.length===0){
      /*console.log(true)*/
      setClass('red')
      setEmailSpan('Email cannot be empty')
    }else if(!email.match(pattern) ){
      setClass('red')
      setEmailSpan('Looks like this is not an email')
    } else{
      setClass('')
      setEmailSpan('Email cannot be empty')
    }
    
    if(pass.length===0){
      setRedPass('red')
      setPassSpan('Password cannot be empty')
    } else{
      setRedPass('')
      setPassSpan('')
    }

    
    /*else{
      console.log(false)
      setClass('red')
    } */
  }
  return<>
  <main>
    <div className='everything'>
      <h1>Learn to code by watching others</h1>
      <p className='evertop'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
    </div>
    <div className='container'>
      <p className='top'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      <form onSubmit={handleSubmit}>
        <input placeholder='First Name' className={redfirst} value={first} onChange={e=>setFirst(e.target.value)} />
        <span>{firstSpan}</span>
        <input placeholder='Last Name'  className={redlast} value={last}  onChange={e=>setLast(e.target.value)}/>
        <span>{lastSpan}</span>
        <input className={inputclass} placeholder='Email Address' value={email} type='text'  onChange={e=>setEmail(e.target.value)} />
        <span>{emailSpan}</span>
        <input placeholder='Password' type='password'  className={redpass} value={pass} onChange={e=>setPass(e.target.value)} />
        <span>{passSpan}</span>
        <button>CLAIM YOUR FREE TRIAL</button>
        <p className='bottom'>By clicking the button, you are agreeing to our <a href='#'>Terms and services</a></p>
      </form>
    </div>
  </main>
  </>
}