import './Transfer.css';

import React, {useState} from "react";

import Clock from "./Clock";

import { Progress, Button, InputNumber } from 'antd';

export function Transfer() {
  // const walletConnectButton = () => {
  //   return(
  //     <Button type="primary" className='connect-wallet-button'>Wallet Connect</Button>
  //     // <button onClick={mintNFTHandler} className='cta-button connect-wallet-button'>
  //     //   Wallet Connect
  //     // </button>
  //   )
  // }

  const depositButton = () => {
    return(
      <Button type='primary' className='deposit-button'>
        Deposit
      </Button>
    )
  }

  const startTime = () => {
    return(
      <p className='start-time'>5/8/2023 0 AM GMT</p>
    )
  }

  const endTime = () => {
    return(
      <p className='end-time'>5/9/2023 0 AM GMT</p>
    )
  }

  const [userAmount, setUserAmount] = useState("");

  return (
    <div className='main-app'>
      <h1 className='main-title'>Smart Contract</h1>
      
      {/* <div className='clock'> */}
        <Clock/>
        {/* {walletConnectButton()} */}
      {/* </div> */}

      <div className='cap-line1'>
        <InputNumber className='deposit-amount-input' defaultValue={0.01} min={0.01} max={0.05} step={0.001}/>
        {depositButton()}
      </div>

      <div className='cap-line2'>
        <h4 className='softcap'>Softcap</h4>
        <h4 className='hardcap'>Hardcap</h4>
        <Progress className='progress' percent={10} />
      </div>

      <div className='cap-line3'>
        {startTime()}      
        {endTime()}
      </div>

    </div>
      
  );
}