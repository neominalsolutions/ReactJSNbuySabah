import React, { useState } from 'react';
import './button.css';
// rfce function component kısayol

function Button2(props) {
	const { text, className } = props;

	return <button className={className}>{text}</button>;
}
// Button ise c# da class olmuş oluyor.
// { text, className, clicked } ise contructora denk geliyor.
function Button({ text, className, clicked }) {
	const [counter, setCounter] = useState(0); // inital değeri başlangıç değeri
	// counter değişken ismimiz

	// setCounter counter değerini her seferinde değiştirmemizi sağlar.
	// butona basınca counter değerini değiştireceğiz.
	// useState react'deki en önemli hooklardan birisidir. hook componente bir davranış kazandırmamızı sağlayan yapılardır. component içerisinde bir değerin component ile etkileşimi sonuncunda değişmesini istersek kullanırız.

	// Not: Componentler dışarıdan değerleri props ile alır. Component içerisinde bir değer değiştirmek istiyorsak bu durumda state kavramını kullanmamız gerekiyor. state'leri c# da field gibi düşünebilirsiniz. props'ları ise c# da property gibi düşünebiliriz.

	// functionları da c# da method gibi düşünebiliriz.
	const click = () => {
		// window.alert('ckicked');
		//clicked ise tetiklenen event olarak karşımıza gelir.
		// butona tıklayınca bu eventi fırlatıyoruz.
		clicked(`${text} butonuna tıklandı`);
		setCounter(counter + 1);
	};

	// componente event bağlama yöntemi

	return (
		<div>
			<p>Tıklama Sayısı : {counter}</p>
			<button className={className} onClick={click}>
				{text}
			</button>
		</div>
	);
}

export default Button;
