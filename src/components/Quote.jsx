
export default function Quote (content, author, generateQuote) {

    return(
        <>
        <div className="logo">Quotes <span>Generator</span></div>
        <div className="quote">
            <p className="content">The will of man is his happiness.</p>
            <div className="author"># Friedrich Schiller</div>
            <button  onClick={generateQuote} className="quote-btn">New Quote</button>
        </div>
        </>
    )
}


