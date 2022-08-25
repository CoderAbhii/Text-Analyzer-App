import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");

  const upClick = ()=>{
    const upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Text Converted To Upper Case!", "success");
  }
  const lowClick = ()=>{
    const lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Text Converted To Lower Case!", "success");
  }
  const copyClick = ()=> {
    const copyText = document.getElementById("my-form");
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied!", "success");
  };
  const respaceClick = ()=>{
    const extraSpace = text.split(/[ ]+/);
    setText(extraSpace.join(" "));
    props.showAlert("Text ExtraSpace Removed!", "success");
  }
  const clearClick = ()=>{
    const clearText = "";
    setText(clearText);
    props.showAlert("Text Are Cleared!", "success");
  }
  const onChange = (control)=>{
      setText(control.target.value);
  }
  return (
      <>
      <div className="container text-white w-75 p-3" style={{"backgroundColor": "black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" onChange={onChange} value={text} id="my-form" rows="10" style={{"color": "white","backgroundColor": "black"}}></textarea>
      </div>
      <button disabled={text.length===0} type="button" onClick={upClick} className="btn btn-sm btn-light mx-2 my-2">UpperCase</button>
      <button disabled={text.length===0} type="button" onClick={lowClick} className="btn btn-sm btn-light mx-2 my-2">LowerCase</button>
      <button disabled={text.length===0} type="button" onClick={copyClick} className="btn btn-sm btn-light mx-2 my-2">Copy Text</button>
      <button disabled={text.length===0} type="button" onClick={respaceClick} className="btn btn-sm btn-light mx-2 my-2">Remove Extra Spaces</button>
      <button disabled={text.length===0} type="button" onClick={clearClick} className="btn btn-sm btn-light mx-2 my-2">Clear All</button>
      </div>
      <div className="container text-white my-3 w-75 p-3" style={{"backgroundColor": "black"}}>
        <h1>Your Text Summary: </h1>
        <h4>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters.</h4>
        <h3>Preview: </h3>
        <h4>{text.length>0?text:"Nothing To Preview..!! Please Enter Some Text To Preview"}</h4>
      </div>
    </>
  )
}
