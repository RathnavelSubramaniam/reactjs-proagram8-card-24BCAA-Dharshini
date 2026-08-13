import logo from './logo.svg';
import './App.css';

function App() {
  const items1=[{name:"Computer", price:9000 },
                 {name:"Moblie", price:10000},
                 {name:"Iphone", price:80000}
             ];
  return (
    <div className="App">
      {items1.map((item)=>{
        return <Card item={item}/>
      })
      }
    </div>
  );
}

export default App;
