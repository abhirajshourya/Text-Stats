import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase Clicked");
        setText(text.toUpperCase());
      props.alertMaker("UpperCase'd!","Success");

    };
    const handleLowClick = () => {
        // console.log("LowerCase Clicked");
      props.alertMaker("LowerCase'd!","Success");
      setText(text.toLowerCase());
    };
    const handleClearClick = () => {
        // console.log("Clear Clicked");
      props.alertMaker("Clear'd!","Success");

        setText("");
    };
    const handleTitClick = () => {
        // console.log("TitleCase Clicked");
        setText(
            text
                .split(" ")
                .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
                .join(" ")
        );
      props.alertMaker("TitleCase'd!","Success");

    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis quia minus laboriosam quaerat debitis harum quibusdam, voluptas et, laudantium omnis. Ex cupiditate dolores quisquam ducimus officiis voluptatum quod adipisci, recusandae obcaecati totam saepe atque, est ullam ipsa minima. Odit ab praesentium maiores autem, iusto ducimus exercitationem incidunt aut cupiditate neque est iste placeat blanditiis odio, enim libero quae id quod dolorem? Omnis architecto, non eveniet quis earum itaque facere quaerat cupiditate quo iure rerum quasi? Esse quos quam, pariatur excepturi voluptates accusamus minima ut? Minus, earum. Provident libero exercitationem a ipsum laboriosam voluptates ratione aliquid obcaecati cupiditate adipisci ab laborum quos placeat voluptate numquam tempora magnam quod facere veritatis, nihil blanditiis voluptatum!"
    );

    let mystyle={color: props.mode==='light'?'black':'white'}

    return (
        <>
            <div className="container" style={mystyle}>
                <div className="mb-3">
                    <h2>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            {props.label}
                        </label>
                    </h2>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        value={text}
                        onChange={(event) => handleOnChange(event)}
                        style = {{backgroundColor: props.mode==='light'?'white':'#0a1424',color: props.mode==='light'?'black':'white'}}
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn-primary btn m-2" onClick={handleUpClick}>
                    UpperCase
                </button>
                <button disabled={text.length===0} className="btn-primary btn m-2" onClick={handleLowClick}>
                    LowerCase
                </button>
                <button disabled={text.length===0} className="btn-primary btn m-2" onClick={handleTitClick}>
                    TitleCase
                </button>
                <button disabled={text.length===0} className="btn-primary btn m-2" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>

            <div className="container m-2" style={mystyle}>
                <h2 >Text Summary</h2>
                <p >{text.split(" ").filter((element)=>{return element.length!==0}).length} Words</p>
                <p >{text.length} Characters</p>
                <p >{(text.split(" ").filter((element)=>{return element.length!==0}).length * 60) / 125} Seconds Read</p>
                <h3 >Preview</h3>
                <p style={{ border: "1px solid grey", padding: "20px",color: props.mode==='light'?'black':'white' }}>{text.length>0?text:"Enter to preview"}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    label: PropTypes.string.isRequired,
};
