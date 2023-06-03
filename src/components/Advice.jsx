export default function Advice({ content, generateAdvice }) {
    return (
      <>
        <div className="logo">Advice <span>Daily</span></div>
        <div className="quote">
          <p className="content">{content}</p>
          <button className="quote-btn" onClick={generateAdvice}>New Advice</button>
        </div>
      </>
    );
  }
  