import React, {useState} from 'react'


export const TextForms = (props) => {
  
  const [text , setText] = useState("");
  
  const handelOnChange = (event) =>{
    setText(event.target.value)
    }

    const handelUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }
    
    const handelLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")

    }
    
    const handelCewClick =()=>{
       let textArr =  text.split(" ")
       let newText = "";
       for(let value of textArr){
           newText += value.charAt(0).toUpperCase() + value.substring(1) + " "
       }
       setText(newText)
       props.showAlert("Each Word Capitalize!", "success")
    }

    const speak = () => {
        if('speechSynthesis' in window){
            const msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            props.showAlert("Speaking!", "success")
            const toogle = document.getElementById('toggle')
            if (toogle.innerHTML === "Speak") {
                toogle.innerHTML = "Stop"
            }
            else {
                toogle.innerHTML = "Speak"
                if (toogle.innerHTML === "Speak"){
                    window.speechSynthesis.cancel()
                    props.showAlert("Speaking Stoped!", "success")
                }
            }
            if(document.getElementById("myBox").value === ""){
                toogle.innerHTML = "Speak"
            }
        }
        else{
            alert("Speech Synthesis is not supported in your browser")
        }
        }

      const copyText = async () => {
        document.getElementById("myBox").select()
        navigator.clipboard.writeText(text);

        // TO PASTE
        // let copied = await navigator.clipboard.readText()
        // setText(copied)
        props.showAlert("Text Copied!", "success")

     }
     

     const clearText = () =>{
        setText("")
        props.showAlert("Text Cleared!", "success")
     }

     const wordCount =(words)=>{
        let trimmed= words.trim()
        trimmed = words.trim().split(/[\s]+/g)
        return trimmed[0] === '' ? 0 : trimmed.length
     }

     const charCount = (charactor)=>{
        let chartrim = charactor.split(" ")
        return chartrim.join("").length        
     }

  return (
    <>
        <div className={`container my-3 text-${props.mode === 'light'? 'dark':'light'}`}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'light'? 'white':'gray', color : props.mode === 'dark'? 'white':'black' }} placeholder='Enter Text Here..'  id="myBox" rows="6"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>UPPERCASE</button>
            <button type="submit" className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>lowerCase</button>
            <button type="submit" onClick={handelCewClick} className="btn btn-primary mx-1 my-1">Capitalize Each Word</button>
            <button type="submit" onClick={clearText} className="btn btn-primary mx-1 my-1">Clear Text</button>
            <button type="submit" onClick={copyText} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1" id="toggle">Speak</button>
        </div>
        <div className={`container my-3 text-${props.mode === 'light'? 'dark':'light'}`}>
            <h3>Your Text Summary</h3>
            <p><strong>{wordCount(text)}</strong> Words <strong>{charCount(text)}</strong> Charactors</p>
            <p><strong>{(0.008 * wordCount(text)).toFixed(2)}</strong> Minutes Read</p>
            <h4>Preview</h4>   
            <p>{text.trim().length>0? text : "Enter Your Text To Preview Here.."}</p>

        </div>
    </>
  )
}
