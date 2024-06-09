import { useState } from "react";

import qrServices from './services/qr'

function App() {
  const [data, setData] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [margin, setMargin] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld');
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    qrServices.getQR(data, size, color, bgColor, margin).then(response => {
      setQrCodeUrl(response)
      setErrorMsg('')
    }).catch(error => {
      setErrorMsg(error)
      setTimeout(function () {
        setErrorMsg('')
      }, 5000)
    })
  }
  return (
    <div className="bg-black-700 min-h-screen flex items-center flex-col p-8">
      <div className="header">
        {errorMsg !== '' &&
          <div role="alert" className="alert alert-error mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error : {errorMsg}</span>
          </div>
        }
        <h1 className=" uppercase text-error text-4xl font-black tracking-wider mb-8">QR Code Generator</h1>
      </div>
      <div className="search-section container ">
        <form onSubmit={onSubmit} className="w-full flex flex-col justify-center items-center">
          <input
            type="text"
            placeholder="Data"
            className="input input-bordered w-full max-w-96 mb-4"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <input
            type="number"
            placeholder="Size ( in px )"
            className="input input-bordered w-full max-w-96 mb-4"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <input
            type="text"
            placeholder="Color code"
            className="input input-bordered w-full max-w-96 mb-4"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Background color code"
            className="input input-bordered w-full max-w-96 mb-4"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <input
            type="number"
            placeholder="Margin ( in px )"
            className="input input-bordered w-full max-w-96 mb-4"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
          />
          <button type="submit" className="btn w-full btn-error max-w-96">Generate QR Code</button>
        </form>
      </div>
      <div className="divider divider-error"></div>
      <div className="qr mt-8">
        <img src={qrCodeUrl} alt="Generated QR Code" title="Generated QR Code" className="" />
      </div>
    </div>
  )
}

export default App
