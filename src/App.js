import logo from './logo.svg'; // logo alias
import './App.css'; // sayfaya css tanımlarken alias kullanmıyoruz
import Button from './components/button';
// style ile tanıtmış oluyoruz.

// const logo = require('./logo.svg'); // CommonJS module import standartı buda nodejs uygulamalırında tercih edilir.



// using yerine import var.

// jsx formatı

export default function App() {

  // componentler içerisinde return methodları var dinamik içerik döndürürler.
  // react jsxde class yerine className ismini kullanıyoruz

  const buttonClick = (message) => {
      alert(message);
  }

  return (

    

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
       
        </a>
           <Button clicked={buttonClick} text={'Button1'} className={'blue-button'} />
          <Button clicked={buttonClick} text={'Button2'} className={'green-button'} />

{/* props iki şekilde değer alabilir 1 event bir diğeri ise prop value */}
      </header>
    </div>
  );
}

// export function Test(){

// }

// export default function Test2(){

// }

// export default App; // Import ile bir js dosyasının başka bir js dosyası tarafından çağırılabilmesi için export keyword ile işaretlenmelidir. Biz buna js de EcmaScript Module sistem yapısı ismini veriyoruz. Import Export yazım standartı Ecmascript ile javascript diline kazandırılmıştır.

