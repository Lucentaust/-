function RandomQuote() {
    let quote = ['ฉันไม่ต้องการไปสวรรค์ เพราะบนนั้นไม่มีเพื่อนฉันสักคน',
                'Google ที่ว่าแน่ ยัง Search หาคู่แท้ไม่เจอเลย', 
                'พร้อมจะหยุดเสมอ ถ้าเจอไฟแดง',
                'อย่าทำวันนี้ให้ดีที่สุด เดี๋ยวพรุ่งนี้ไม่มีอะไรทำ',
                'ที่เจอบ่อยๆ นี่ โลกกลมหรือเวรกรรม',
                'ยามใดที่เราทุกข์... ชาไข่มุกคือพลัง',
                'คนที่ทำให้เราหลง คือคนที่ส่งโลเคชั่นผิด',
                'ไม่ไหวอย่าฝืน ยืนนานก็ปวดขา',
                'มีแต่ภูมิต้านทาน ไม่มีภูมิต้านเธอ'];

    let randomQuote = quote[Math.floor(Math.random() * quote.length)];
    document.getElementById('quote').innerHTML = randomQuote;
}

document.querySelector('button').addEventListener('click', RandomQuote)

