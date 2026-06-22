git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/perlov3301/canvas_abstract.git
git push -u origin main

Rotating Text 90 Degrees (Sideways Text)
function drawRotatedText(ctx, text, x, y, degrees) {
    ctx.save(); // Save current canvas state
    
    ctx.translate(x, y); // Move origin to text placement point
    ctx.rotate((degrees * Math.PI) / 180); // Rotate canvas context
    
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    ctx.fillText(text, 0, 0); // Draw at local origin
    
    ctx.restore(); // Restore original canvas state
}

// Example: Rotate 90 degrees clockwise for downward vertical text
drawRotatedText(ctx, "Vertical Title", 50, 100, 90);
// horizontal text
//  font
// ctx.font = '17px Arial';
// //solid text
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 80, 400  );
// // outlined text
// ctx.strokeStyle = 'purple';
// ctx.lineWidth = 1;
// ctx.strokeText('Hello World', 170, 400);
αA βB γΓ δΔ εE θΘ  λΛ μM πΠ σΣ φΦ ωΩ ∞ ≠ ≈ 
    Α α, Β β, Γ γ, Δ δ, Ε ε, Ζ ζ, Η η, Θ θ, Ι ι, 
    Κ κ, Λ λ, Μ μ, Ν ν, Ξ ξ, Ο ο, Π π, Ρ ρ, Σ σ ς, 
    Τ τ, Υ υ, Φ φ, Χ χ, Ψ ψ, Ω ω
