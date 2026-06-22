
document.addEventListener("readystatechange",()=> {
    console.log("document.readyState:", document.readyState);

    const canvas = document.getElementById('structure');
    const ctx = canvas.getContext('2d');
    function drawStaticShapes() {
    // draw container (background)
        ctx.fillStyle= '#f8fafc';
        ctx.fillRect(0,0,800,600);
        // draw application header (top bar)
        ctx.fillStyle='#1e293b';
        ctx.fillRect(0,0,800,80);
        // draw sidebar area
        ctx.fillStyle = '#334155';
        ctx.fillRect(200, 80, 600, 520);
        // draw main content area
        ctx.fillStyle= '#e2e8f0';
        ctx.fillRect(200,80,600,520);
        // add explanatory labels
        ctx.fillStyle= '#999999';
        ctx.font= '16px sans-serif';
        ctx.fillText('Header Component', 20, 45);
        ctx.fillStyle= '#888888';
        ctx.font= '14px sans-serif';
        ctx.fillText('Navigation', 30, 120);
        ctx.fillStyle= '111111';
        ctx.font= '20px sans-serif';
        ctx.fillText('main application structure',240, 130);
    }
    //run static layout on load
    drawStaticShapes();

    const canvas1= document.getElementById("structure1");
    const ctx1= canvas1.getContext("2d");
    function drawComponent(x, y, width, height, title, bgColor) {
        ctx1.shadowColor= 'rgba(0,0,0,0.15)';
        ctx1.shadowBlur= 10;
        ctx1.ShadowOffsetX= 4;
        ctx1.ShadowOffsetY= 4;
        // box background
        ctx1.fillStyle= bgColor;
        ctx1.fillRect(x,y,width, height);
        //reset shadow for text
        ctx1.shadowColor= 'transparent';
        // box border
        ctx1.strokeStyle= '#2d3748';
        ctx1.lineWidth= 2;
        ctx1.strokeRect(x,y,width, height);
        // text styling
        ctx1.fillStyle= '#1a202c';
        ctx1.font= 'bold 16px sans-serif';
        ctx1.textAlign= 'center';
        ctx1.textBaseline= 'middle';
        ctx1.fillText(title, x+width/2, y+height/2);
    }
    // clear and draw the application structure
    function renderDiagram() {
        ctx1.clearRect(0,0, canvas.widht, canvas.height);
    //draw component 1
    // drawComponent(50, 250, 200, 100, 'frontend UI', '#e2e8f0');
        drawComponent(50,150, 200, 100, 'frontend UI', '#e2e8f0');
    // draw component 2
    // drawComponent(550, 150, 200, 100,'API service', '#c6f6d5');
        drawComponent(550,50, 200, 100, 'API service', '#c6f6d5');
    // draw component 3
        drawComponent(550,260,200,100, 'Database', '#fed7d7');
    // draw arrows (connenctions)
        drawArrow(250,200,550,100);//UI to API
        drawArrow(650,150,650,260);//API to DB
    }
    // basic arrow drawing utility
    function drawArrow(fromX, fromY, toX, toY) {
        ctx1.beginPath();
        ctx1.moveTo(fromX, fromY);
        ctx1.lineTo(toX, toY);
        ctx1.strokeStyle= '#718096';
        ctx1.lineWidth= 3;
        ctx1.stroke();
    //arrowhead logic can be added here
    }
    renderDiagram();
    //  outlined line
    fline(ctx1, 60, 420, 710, 420);
    fline(ctx1, 60, 420, 60, 485);
    z_vert(ctx1, 60, 485);
    fline(ctx1, 60, 515, 60, 575);
    base(60, 575);
    fline(ctx1, 710, 420, 710, 450);
    z_vert(ctx1, 710, 450);
    fline(ctx1, 710, 480, 710, 515);
    z_vert(ctx1, 710, 515);
    fline(ctx1, 710, 545, 710, 575);
    base(710, 575);
    function fline(vctx,xb, yb, xe, ye){
        vctx.beginPath();
        vctx.moveTo(xb,yb);
        vctx.lineTo(xe, ye);
        vctx.strokeStyle='black';
        vctx.lineWidth= 3;
        vctx.stroke();
    }
    function z_vert(vctx,x_0, y_0) {
        vctx.beginPath();
        vctx.moveTo(x_0, y_0); // from top
        vctx.lineTo(x_0+9, y_0);
        vctx.lineTo(x_0+9, y_0+30);
        vctx.lineTo(x_0-9, y_0+30);
        vctx.lineTo(x_0-9, y_0);
        vctx.lineTo(x_0, y_0);
        vctx.closePath();
        vctx.strokeStyle= 'black';
        vctx.lineWidth= 3;
        vctx.stroke();
    }
    function base(x_0, y_0) {
        ctx1.beginPath();
        ctx1.moveTo(x_0+12, y_0);
        ctx1.lineTo(x_0-12, y_0);
        ctx1.strokeStyle='black';
        ctx1.lineWidth= 5;
        ctx1.stroke();
    }
    function rotatedText (vctx,text, x, y, degrees, vfont) {
        let vspace= " ".repeat(1);
        vctx.save(); // save current canvas state
        vctx.translate(x, y); // move origin to text placement point
        vctx.rotate((degrees*Math.PI)/180); //rotate canvas context
        // vctx.font= 'bold 12px sans-serif';
        vctx.font= 'bold ' +vspace + vfont +vspace+ ' sans-serif';
        vctx.textAlign= "center";
        vctx.textBaseline= "middle";
        vctx.fillText(text,0, 0);//draw at local origin
        vctx.restore();// restore original canvas
    }
    rotatedText(ctx1, // context
        "generator R", // text
       40, // x local origin
       510, //y local origin
       -90,  // degrees
       "12px" // font
       );
    rotatedText(ctx1, // context
    "generator R", // text
    40, // x local origin
    510, //y local origin
    -90,  // degrees
    "12px" // font
    );
});