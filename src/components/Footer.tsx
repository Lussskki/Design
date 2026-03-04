export default function Footer({ content }: { content: any }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              Tbilisi <span>Scouts</span>
            </div>
            <div className="footer-desc">{content.about}</div>
          </div>

          <div className="footer-col">
            <h4>{content.quick}</h4>
            <ul>
              <li><a href="#programs">{content.programs}</a></li>
              <li><a href="#location">{content.contact}</a></li>
              <li><a href="#donate">{content.donate}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li><a href="#" onClick={(e)=>e.preventDefault()}>Facebook</a></li>
              <li><a href="#" onClick={(e)=>e.preventDefault()}>Instagram</a></li>
              <li><a href="#" onClick={(e)=>e.preventDefault()}>YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{content.rights}</p>
        </div>
      </div>
    </footer>
  );
}