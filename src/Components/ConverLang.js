import React, { useState } from 'react'

export default function ConverLang() {

    const [convertText, setConvertText] = useState("")

    const countries = {
        "en-GB": "English",
        "hi-IN": "Hindi",
    }
    let fromText = document.querySelector(".from-text")
    let toText = document.querySelector(".to-text")
    let selectTag = document.querySelectorAll("select")

    selectTag.forEach((tag, id) => {
        for (let country_code in countries) {
            let selected = id === 0 ? country_code === "en-GB" ? "selected" : "" : country_code === "hi-IN" ? "selected" : "";
            let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
            tag.insertAdjacentHTML("beforeend", option);
        }
    });
    const textConvert = () => {
        let text = fromText.value.trim()
        let translateFrom = selectTag[0].value
        let translateTo = selectTag[1].value
        if (!text) return;
        toText.setAttribute("placeholder", "Translating...");
        let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
        fetch(apiUrl).then(res => res.json()).then(data => {
            toText.value = data.responseData.translatedText;
            data.matches.forEach(data => {
                if (data.id === 0) {
                    toText.value = data.translation;
                }
            });
            toText.setAttribute("placeholder", "Translation");
        });
    }

    const onChange = (control) => {
        setConvertText(control.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="text-input">
                        <textarea spellCheck="false" className="from-text" onChange={onChange} value={convertText} placeholder="Enter text"></textarea>
                        <textarea spellCheck="false" readOnly disabled className="to-text" placeholder="Translation"></textarea>
                    </div>
                    <ul className="controls">
                        <li className="row from">
                            <select></select>
                        </li>
                        <li className="row to">
                            <select></select>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-dark buttonText" disabled={convertText.length===0} onClick={textConvert}>Translate Text</button>
            </div>
        </>
    )
}



