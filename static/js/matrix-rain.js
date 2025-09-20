// Matrix Rain Effect
(function() {
    const matrixContainer = document.getElementById('matrix-rain');
    if (!matrixContainer) return;
    
    // Matrix characters (mix of Japanese katakana, numbers, and symbols)
    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Create matrix columns
    function createMatrixColumn() {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        
        // Gentler font sizes - smaller range for better performance
        const sizes = [
            { size: '16px', name: 'medium' },
            { size: '20px', name: 'large' },
            { size: '24px', name: 'xlarge' }
        ];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        
        // Force the font size with inline styles
        column.style.fontSize = randomSize.size;
        column.style.lineHeight = randomSize.size;
        column.style.fontFamily = "'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace";
        column.style.color = '#00ff00';
        column.style.textShadow = '0 0 5px #00ff00';
        column.style.opacity = '0.8';
        column.style.zIndex = '5';
        column.style.position = 'fixed';
        
        // Random position - avoid left 200px and right 200px areas
        const screenWidth = window.innerWidth;
        const leftMargin = 50;
        const rightMargin = 50;
        const availableWidth = screenWidth - leftMargin - rightMargin;
        const randomPosition = leftMargin + Math.random() * availableWidth;
        column.style.left = randomPosition + 'px';
        
        // Faster animation duration - more dynamic
        const duration = 8 + Math.random() * 12; // 8-20 seconds
        column.style.animationDuration = duration + 's';
        column.style.animationTimingFunction = 'linear';
        column.style.animationIterationCount = '2';
        column.style.animationFillMode = 'forwards';
        
        // Random delay
        column.style.animationDelay = Math.random() * 2 + 's';
        
        // Fewer characters for better performance
        const charCount = Math.floor(Math.random() * 15) + 10; // 10-25 characters
        let text = '';
        for (let i = 0; i < charCount; i++) {
            text += matrixChars[Math.floor(Math.random() * matrixChars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
        
        // Remove column after animation completes
        setTimeout(() => {
            if (column.parentNode) {
                column.parentNode.removeChild(column);
            }
        }, (duration + 5) * 1000);
    }
    
    // Create initial columns - fewer for better performance
    for (let i = 0; i < 12; i++) {
        setTimeout(createMatrixColumn, i * 800);
    }
    
    // Continuously create new columns (gentler rate)
    setInterval(createMatrixColumn, 2500);
})();
