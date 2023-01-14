import { Component } from "@angular/core";

@Component({
    selector:'loding-spinner',
    standalone:true,
    styles:[`

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid red;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  .loding-spinner{
    position: fixed;
    width: 20vw;
    left: 40vw;
    top: 30%;
    z-index: 99;
    background-color: #fff;
    text-align: center;
    padding: 20px;
    border: 1px solid #aaa;
  }    
  .back-drop-black{
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 98;
  } 

      `],
      template:`
      <div class="back-drop-black"> 
      <div class="loding-spinner"> 
      <div class="lds-ripple"><div></div><div></div></div>
      <div>Loading Data .... </div>
      </div>
      </div>
      `
})

export class LodingSpinnerComponent{ }