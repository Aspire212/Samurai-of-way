import React from 'react'


import './Dialogs.css'


const Dialogs = () => (
  <div className='dialogs'>
    <div className='dialogs-items'>
      <div className="dialog dialog-active">
        Stason
      </div>
      <div className="dialog">
        Dimych
      </div>
      <div className="dialog">
        Artyom
      </div>
      <div className="dialog">
        Alesya
      </div>

    </div>
    <div className='messages'>
      <div className="message">Hi</div>
      <div className="message">How is your it-kamsutra?</div>
      <div className="message">Yo</div>
    </div>
  </div>
)

export default Dialogs