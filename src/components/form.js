import React, {useState} from "react";
import ReactDOM from "react-dom";
import textfile  from '../constants/foo.json';
import {CSSTransition} from 'react-transition-group';



  function Form(){ 
        var increase = 0;
        const [price, setValue] = useState('');
        const [inputWidth, setWidth] = useState("");
        const [inputLength, setLength] = useState("");
        const [inputHeight, setHeight] = useState("");
        const [outputOne, setoutput] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "mid": 0
            }
        );
        const [outPutTwo, setoutputTwo] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "mid": 0
            });
        const [outPutThree, setoutputThree] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "mid": 0
            });
        const [outPutfour, setoutputfour] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "mid": 0
            });
        var results = [];
        switch(price) {
            case 'custom': increase= 4;break;
            case 'fragile': increase = 2;break;
            case 'standard': increase = 1.5;break;
            case 'basic': increase = 1;break;
            default : increase = 0;break;}
        const [show, setShow] = useState(false);
        const handleSubmit = (event) => {
             event.preventDefault();
             const newData = textfile.sort((a,b)=>(a.width > b.width || a.length > b.length || a.height > b.height) ? 1:-1);  
             const element = newData;
             var boxSize = [];
             var x = 0; 
             var inputArray = [parseInt(inputWidth)-increase,parseInt(inputLength)-increase,parseInt(inputHeight)-increase];
             var sortedInput =  inputArray.sort((a, b) => b-a);
             for (let index = 0; index < element.length; index++) {
                 boxSize = [element[index].width,element[index].length,element[index].height];
                 let highestToLowest = boxSize.sort((a, b) => b-a);
                 if( highestToLowest[0] >= sortedInput[0] && highestToLowest[1] >= sortedInput[1] && highestToLowest[2] >= sortedInput[2] ){
                     if(x < 4){results.push(element[index]);x++;}
                 }
             }
             if(results.length == 0){
                 return setoutput('No Box was found');
             }else{
                setoutput(results[0]);
                setoutputTwo(results[1]);
                setoutputThree(results[2]);
                setoutputfour(results[3]);
             }
          }
       return(
    <div>
        <form onSubmit={handleSubmit} className="flex col-span-2 justify-center flex-wrap">
            <div className="SizeInputs flex justify-center">
                <label>Largest:
                    <input value={inputWidth} type="number" onChange={(e) => setWidth(e.target.value)} />
                </label>
                <label>Meduium:
                    <input value={inputLength} type="number" onChange={(e) => setLength(e.target.value)} />
                </label>
                <label>Smallest:
                    <input  value={inputHeight} type="number" onChange={(e) => setHeight(e.target.value)}/>
                </label>
            </div>
            <div className="pricing flex justify-center">
                <h2>Please Pick One To Calculate the Price:</h2>
                <label>Box Price: 
                    <input type="radio" name="pricing" value="price" checked={price === 'price'} onChange={(e)=>{setValue(e.target.value)}} />
                </label>
                <label>Basic:
                    <input type="radio" name="pricing" value="basic" checked={price === 'basic'} onChange={(e)=>{setValue(e.target.value)}} />
                </label>
                <label>Standard: 
                    <input type="radio" name="pricing" value="standard" checked={price === 'standard'} onChange={(e)=>{setValue(e.target.value)}} />
                </label>
                <label>Fragile: 
                    <input type="radio" name="pricing" value="fragile" checked={price === 'fragile'} onChange={(e)=>{setValue(e.target.value)}} />
                </label>
                <label>Custom: 
                    <input type="radio" name="pricing" value="custom" checked={price === 'custom'} onChange={(e)=>{setValue(e.target.value)}}/>
                </label>
            </div>    
            <input type="submit" className="btn" />
        </form>
        <div className="best-fit column-1  md:columns-1">
            <div>
                <h2>Best Fit</h2>
                <span><b className='lable'>W: </b>{outputOne.width}</span>
                <span><b className='lable'>L: </b>{outputOne.length}</span>
                <span><b className='lable'>H: </b>{outputOne.height}</span>
                <span><b className='lable'>Price: $ { price === 'custom' ? outputOne.price+outputOne.custom : price === 'fragile' ? outputOne.price+outputOne.fragile : price === 'standard' ? outputOne.price+outputOne.standard : price === 'basic' ? outputOne.price+outputOne.basic : outputOne.price ? outputOne.price : "0.00"}</b></span>
            </div>
        </div>
        <div className="other-options flex justify-center flex-col">
            <button className="btn toggle-more" onClick={() => setShow(currentShow => !currentShow)}>
            Click Here for More Options<span className="fa-solid fa-truck-ramp-box fa-flip-horizontal fa-bounce"></span>
            </button>

            {show ?  <CSSTransition in={show} timeout={350} classNames="test" onEnter={() => setShow(true)} onExited={() => setShow(false)}>
                <div className="test">
                    <div className="options flex flex-col justify-center">
                        <div className="option-2">
                            <span><b className='lable'>W: </b>{outPutTwo.width}</span>
                            <span><b className='lable'>L: </b>{outPutTwo.length}</span>
                            <span><b className='lable'>H: </b>{outPutTwo.height}</span>
                            <span><b className='lable'>Price: ${outPutTwo.price.toFixed(2)}</b></span>
                        </div>
                        <div className="option-3">
                            <span><b className='lable'>W: </b>{outPutThree.width}</span>
                            <span><b className='lable'>L: </b>{outPutThree.length}</span>
                            <span><b className='lable'>H: </b>{outPutThree.height}</span>
                            <span><b className='lable'>Price: ${outPutThree.price.toFixed(2)}</b></span>
                        </div>
                        <div className="option-4">
                            <span><b className='lable'>W: </b>{outPutfour.width}</span>
                            <span><b className='lable'>L: </b>{outPutfour.length}</span>
                            <span><b className='lable'>H: </b>{outPutfour.height}</span>
                            <span><b className='lable'>Price: ${outPutfour.price.toFixed(2)}</b></span>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            :<CSSTransition in={show} timeout={350} classNames="test" onEnter={() => setShow(true)} onExited={() => setShow(false)}><div className="test"></div></CSSTransition> }
        </div>
    </div>
    )
  }


  
export default Form
