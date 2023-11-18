const Header = (props) => {
  return (
    <header>
      <h1>HEADER</h1>
      <button onClick={() => { props.navigate('/'); }}>Home으로 이동</button>
      <button onClick={() => { props.navigate('/content/1'); }}>content1로 이동</button>
    </header>
  );
};

export default Header;
