# react-components
In this repo, I am adding the components which I am learning in ReactJS and putting some extra informations related to fundamentals and basic level of React framework including setup and ES6 features.
hooks to add and work on it.
Engin demirog kurslar: </br>
java & react: https://www.youtube.com/playlist?list=PLqG356ExoxZUuVYKLuiQLnref7Y4ims87 
</br>
react, redux, hooks: https://www.youtube.com/playlist?list=PLqG356ExoxZXEW9h1uTWCwqLLTJ_bO5Be 
</br>
</br>
</br>


# Setting Up

React Native App kurmak için; bu komutu VSCode’da terminal açıp yazıyoruz.

```jsx

npm install -g create react app
```

Gerekli indirmeler yapılıyor.
React projesi oluşturmak için ise çalışmak istediğimiz dizine gelip terminale

```jsx

npx create-react-app dosyaadi
```

Yazıyoruz ve app o lokasyonda oluşturulmaya başlanıyor. Ben bu dosyaadi kısmına intro
diyerek başladım.
Ardından işlem tamamlanınca oluşan dosyanın adı “intro” oluyor. En son Happy Hacking!
Diyor.

Outputta da gösterildiği gibi sırasıyla,

```jsx
cd intro
```

```jsx
npm start
```

yazdığımızda terminale dosyamıza giriyoruz ve npm start ile bu intro klasöründeki projeyi
node üzerinde çalıştır demek.
Npm start ile birlikte localhost:3000 de proje başlıyor.
Diyelimki projeyi kapatık, tekrar VSCode u açtık, projeyi başlatmak için terminale yine npm
start yazmamız gerekiyor.

## Component Yapısı:

Yeni component oluşturmak için, öncelikle source kısmında yeni bir dosya yaratıyoruz
manuel olarak, .js uzantısıyla. Sonra o dosyayı açıp rcc yazıp enter a basınca otomatik olarak
bir oop yapısı oluşuyor. Bu yapıyı ana dosyamız olan App.js dosyamıza eklememiz gerekiyor.

```jsx
import Navi from './Navi';
```

şeklinde.

Eğer

```jsx
<Navi/>
```

Yazarsak JSX formatında otomatik olarak ekleyebiliyor da ama sen yine de kontrol et.

```jsx

npm install reactstrap
```

Bu kısımda component yapısı için CSS bilmek gerekiyor ama biz hakim olmadığımız için

reactstrap kuruyoruz sistemimize.

Package.json kısmında dependincies kısmına manuel olarak yazıp da eklenebiliyor, ama bu
kodu yazarak otomatik olarak son version iniyor.

Bu paketler de node_modules altına kuruluyor.

import "bootstrap/dist/css/bootstrap.min.css"

kodunu index.js e ekledim, eğer ekleyeceğimizin karşılığı reactstrapte yokssa bootsrapten
bakalım diye.

Ayrıca

```jsx
npm install boostrap
```

yazarak boostrap i de yükleyelim. Sıkıştığımız yerde onu kullanırız.

## Projeyi durdurup tekrar başlatmak:

> Node terminaline gelip, **ctrl C** yaparak durdurdum yayını ve
> 

```jsx
npm start
```

yazarak tekrar başlattım.

Yeni bir JS componenti yazdığında function sonuna eklemezsen App.js de import ederken hata verebilir.

```jsx
*function Timer() {
  return <div>Timer</div>;
}
export default Timer;*
```

```jsx
import "./App.css";
import Timer from "./Timer";
function App() {
  return (
    <main>
      <Timer />
    </main>
  );
}
export default App;
```
