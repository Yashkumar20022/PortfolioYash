export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="status-bar">
      <div className="status-bar-inner">
        <span>
          <span className="dot" />
          Available for opportunities
        </span>
        <div className="status-bar-right">
          <span>UTF-8</span>
          <span>React</span>
          <span>© {year} Yashkumar Baghele</span>
        </div>
      </div>
    </footer>
  );
}
