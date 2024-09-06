import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
 
 

  return (
      <div style={{ display: "grid", placeItems:"center"}}>
          <h1>Table</h1>
          <br/><br/>
          <TextField 
          required
          id="outlined-required"
          label="Name"
        //   defaultValue
          /><br /><br />
        <TextField
              required
          id="outlined-disabled"
          label="Age"
          
          /><br /><br />
        <TextField
          id="outlined-password-input"
          label="Department"
        //   type="password"
          autoComplete="current-password"
          /><br /><br />
        <TextField
          id="outlined-read-only-input"
          label="Salary"
        //   defaultValue="Hello World"
        //   slotProps={{
        //     input: {
        //       readOnly: true,
        //     },
        //   }}
          /><br/><br/>
          <Button type='submit' variant='contained' value='submit'>SUBMIT</Button>
       
    </div>
  )
}

export default Add