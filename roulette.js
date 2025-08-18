const symbols = ["෴","⚐","⚑","⚜","★","☆","✦","✧","✩","✪","✫","✬","✭","✮","✯","✰","✱","✲","✳","✴","✵","✶","✷","✸","✹","✺","✻","✼","✽","☀︎","☁︎","☂︎","☃︎","☄︎","☼","☽","☾","✺","✹","⚒","⚔","⚖","⚗","⚙","⛏","⛓","⚕","✈︎","⛵︎","⛴︎","⛺︎","✂︎","✉︎","✍︎","✏︎","✒︎","✎","☎︎","☏","⌂","⌘","⌥","⌫","⌦","⎋","♪","♫","♩","♬","♭","♮","♯","♔","♕","♖","♗","♘","♙","♚","♛","♜","♝","♞","♟","♠","♣","♥","♦","♤","♧","♡","♢","✝","✚","✛","✜","✠","☥","☮","☯","⚘","✿","❀","❁","☘︎","⚡︎","⚠︎","♻︎","☣","☢","✇","✆",];



(function InitSymbolBox() {
    const canvas = document.getElementById('unicodeBox');
    const ctx = canvas.getContext('2d');


    function drawSymbol(glyph) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.font = "bold 75px Nunito";
        
        ctx.fillStyle = '#F88379';
        ctx.shadowColor = '#9a5852';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = -2;
        ctx.shadowOffsetY = -2;

        ctx.fillText(glyph, canvas.width / 2, canvas.height / 2);
    }

    let currentSymbol = 0;

    drawSymbol(symbols[currentSymbol]);

    setInterval(() => {
        currentSymbol = (currentSymbol + 1) % symbols.length;
        drawSymbol(symbols[currentSymbol]);
    }, 2000);
    console.log('test');
})();