import { Button } from '@mui/material';
import { Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react';


function App() {
  const[principle,setPrinciple]=useState(0)
  const[interest,setInterest]=useState(0)
  const[year,setYear]=useState(0)

  const[simpleInterest,setSimpleInterest]=useState(0)

  const[isInvalidPrinciple,setInvalidPrinciple]=useState(false)
  const[isInvalidInterest,setInvalidInterest]=useState(false)
  const[isInvalidYear,setInvalidYear]=useState(false)

  console.log(principle);


  const validateUserInput=(tag)=>{
    const{name,value}=tag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='principle'){
        setPrinciple(value)
        setInvalidPrinciple(false)
      }
      else if(name=='interest'){
        setInterest(value)
        setInvalidInterest(false)
      }
      else{
        setYear(value)
        setInvalidYear(false)
      }

    }
    else{
      if(name=='principle'){
        setInvalidPrinciple(true)
      }
      else if(name=='interest'){
        setInvalidInterest(true)
      }
      else{
        setInvalidYear(true)
      }
    }
    

  }
  const handleCalculate = (e) => {

    e.preventDefault()
    console.log("clicked");
    if(principle && interest && year){
      setSimpleInterest(principle*interest*year/100)
    }

  }
  const reset=()=>{
    setPrinciple(0)
    setInvalidPrinciple(false)
    setInterest(0)
    setInvalidInterest(false)
    setYear(0)
    setInvalidYear(false)
    setSimpleInterest(0)
    
    
  }


  return (
    <>
      <div className=' shadow bg-light rounded shadow ' style={{ minHeight:"94vh", width: "450px", marginLeft: "400px", marginTop: "30px" }}>
        <h2 className='text-center' style={{ paddingTop: "30px" }}>Simple Interest Calculator</h2>
        <h5 className='text-center'>Calculate your Simple Interest Easily</h5>
        <div className='text-center rounded text-light bg-warning p-5' style={{ width: "400px", height: "130px", marginLeft: "25px", marginTop: "30px" }} >
          <h1 style={{ marginTop: "-20px" }}> ₹&nbsp;{simpleInterest}</h1>
          <h6>Total Simple Interest</h6>

        </div>
        <div className="text-center " style={{ width: "400px", marginLeft: "25px" }}>
          <form className='mt-5'>
            <div className='mb-3'>
              <TextField name='principle' value={principle || ""} onChange={e=>validateUserInput(e.target)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
            </div>
            {
              isInvalidPrinciple &&
              <p className='text-danger'>Invalid principle amount</p>
            }
            <div className='mb-3'>
              <TextField name='interest' value={interest || ""} onChange={e=>validateUserInput(e.target)} className='w-100' id="outlined-basic" label="Rate of Interest(p.a)%" variant="outlined" />
            </div>
            {
              isInvalidInterest &&
              <p className='text-danger'>Invalid Interest</p>
            }
            <div className='mb-3'>
              <TextField name='year' value={year || ""} onChange={e=>validateUserInput(e.target)} className='w-100' id="outlined-basic" label="Time Period(Yr)" variant="outlined" />
            </div>
            {
              isInvalidYear &&
              <p className='text-danger'>Invalid Year</p>
            }
          </form>
        </div>
        <div className="text-center " style={{ width: "400px", marginLeft: "25px" }}>
          <Stack direction="row" spacing={2}>
            <Button  onClick={handleCalculate} variant="contained" type='submit' disabled={isInvalidPrinciple||isInvalidInterest||isInvalidYear} style={{ backgroundColor: "black", width: "50%", height: "50px" }}>Calculate</Button>
            <Button onClick={reset} variant="outlined" style={{ width: "50%", height: "50px" }}>RESET</Button>

          </Stack>

        </div>
      </div>
    </>
  )
}

export default App
