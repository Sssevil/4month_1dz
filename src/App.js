
import './App.css';

function Header() {
  return (
      <div className='frame'>
          <h2>Header</h2>
          <Title/>
      </div>
  )
}

function Content() {
  return (
      <div className='frame'>
          <h2>Content</h2>
          <Title/>
      </div>
  )
}

function Footer() {
    return (
        <div className='frame'>
            <h2>Footer</h2>
            <Title/>
        </div>
    )
}

function Title() {
    return (
        <h3>Title</h3>
    )
}
function App() {
  return (
      <div className='app'>
          <Header/>
          <Content/>
          <Footer/>
      </div>
  );
}

export default App;
