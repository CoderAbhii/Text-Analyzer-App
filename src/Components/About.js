import React from 'react'

export default function Dark() {
  return (
    <>
      <div className="container-fluid">
        <div className="card border-light text-light text-center mb-3" style={{ "fontFamily": "monospace", "backgroundColor": "black" }}>
          <div className="card-header">Feature 1</div>
          <div className="card-body">
            <h5 className="card-title">Convert Text To UpperCase</h5>
            <p className="card-text">This app convert your text into uppercase. This app is aslo work for all languages. And it handles lots of texts, paragrapghs.</p>
          </div>
        </div>

        <div className="card  border-light text-light text-center mb-3" style={{ "fontFamily": "monospace", "backgroundColor": "black" }}>
          <div className="card-header">Feature 2</div>
          <div className="card-body">
            <h5 className="card-title">Convert Text To LowerCase</h5>
            <p className="card-text">This app also convert your text into lowercase.</p>
          </div>
        </div>

        <div className="card  border-light text-light text-center mb-3" style={{ "fontFamily": "monospace", "backgroundColor": "black" }}>
          <div className="card-header">Feature 3</div>
          <div className="card-body">
            <h5 className="card-title">Copy Your Text</h5>
            <p className="card-text">This app can able to copy your complete text on your clipboard.</p>
          </div>
        </div>

        <div className="card  border-light text-light text-center mb-3" style={{ "fontFamily": "monospace", "backgroundColor": "black" }}>
          <div className="card-header">Feature 4</div>
          <div className="card-body">
            <h5 className="card-title">Remove Extra Spaces</h5>
            <p className="card-text">This app can removes extra spacess in your text. And gives a well format for your text & paragrapghs</p>
          </div>
        </div>

        <div className="card  border-light text-light text-center mb-3" style={{ "fontFamily": "monospace", "backgroundColor": "black" }}>
          <div className="card-header">Feature 5</div>
          <div className="card-body">
            <h5 className="card-title">Clear All Text</h5>
            <p className="card-text">This app also can delete or clear your all text by in click of clear all button.</p>
          </div>
        </div>

        <div className="card  border-light text-light text-center mb-3" style={{ "fontFamily": "monospace", "backgroundColor": "black" }}>
          <div className="card-header">Feature 6</div>
          <div className="card-body">
            <h5 className="card-title">Special Feature</h5>
            <p className="card-text">This app translate your text English To Hindi.</p>
          </div>
        </div>
      </div>
    </>
  )
}
