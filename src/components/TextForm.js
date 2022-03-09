import React, {useState} from 'react'
// import React from 'react'

export default function Texform(props){
    const [myText, mySetText] = useState("");
    // var myText = "Enter here bro";

    const handleUppercase = () => {
        mySetText(myText.toUpperCase());
        // myText = myText.toUpperCase();
        // {document.getElementById('myBox').value = myText}
        // console.log(myText)
        
        props.showAlert('Converted to Uppercase!', 'success');
    }
    const handleLowercase = () => {
        mySetText(myText.toLowerCase())
        // myText = myText.toLowerCase();
        // console.log(myText)
        props.showAlert('Converted to Lowercase!', 'success');
    }
    
    const handleCleartext = () => {
        mySetText("")
        // myText = ""
        props.showAlert('Text Cleared!', 'success');
    }
    let text = document.getElementById('myBox');
    const handleCopyText = () => {
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = myText.split(/[ ]+/);
        mySetText(newText.join(" "));
        // myText = newText.join(" ");
        props.showAlert('Extra Spaces Removed!', 'success');
    }
    
    const handleOnChange = (event) => {
        mySetText(event.target.value)
        // myText = event.target.value;
    }
    
    //text = "new text" //wrong way to change state
    //setText("new text") //right way to change state
    return(
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={myText} style={{backgroundColor: props.mode==='dark'?'#363333':'white', color: props.mode==='dark'?'white':'black'}}>f</textarea>
            </div>
            <button className="btn btn-primary me-3" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary me-3" onClick={handleLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary me-3" onClick={handleCleartext}>Clear Text</button>
            <button className="btn btn-primary me-3" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p><strong>Words: </strong>{myText.split(" ").length}<br/> <strong>Characters: </strong>{myText.length}<br/> <strong>Read Time (in Minutes): </strong>{0.008 * myText.split(" ").length}</p>
            <h2>Text Preview</h2>
            <p>{myText.length>0?myText:'Enter your text to see the preview'}</p>
        </div>
        </>
    )
}