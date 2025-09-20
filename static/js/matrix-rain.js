// Matrix Rain Effect
(function() {
    const matrixContainer = document.getElementById('matrix-rain');
    if (!matrixContainer) return;
    
    // Track occupied positions to prevent overlapping
    const occupiedPositions = new Set();
    const columnWidth = 20; // Approximate width of each column in pixels
    
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
        column.style.zIndex = '1000';
        column.style.position = 'fixed';
        
        // Find a non-overlapping position
        const screenWidth = window.innerWidth;
        const leftMargin = 50;
        const rightMargin = 50;
        const availableWidth = screenWidth - leftMargin - rightMargin;
        const maxColumns = Math.floor(availableWidth / columnWidth);
        
        let position;
        let attempts = 0;
        const maxAttempts = 50; // Prevent infinite loop
        
        do {
            const columnIndex = Math.floor(Math.random() * maxColumns);
            position = leftMargin + (columnIndex * columnWidth);
            attempts++;
        } while (occupiedPositions.has(position) && attempts < maxAttempts);
        
        // If we couldn't find a free position, use a random one
        if (attempts >= maxAttempts) {
            position = leftMargin + Math.random() * availableWidth;
        }
        
        // Mark this position as occupied
        occupiedPositions.add(position);
        column.style.left = position + 'px';
        
        // Faster animation duration - more dynamic
        const duration = 8 + Math.random() * 12; // 8-20 seconds
        column.style.animationDuration = duration + 's';
        column.style.animationTimingFunction = 'linear';
        column.style.animationIterationCount = '1';
        column.style.animationFillMode = 'forwards';
        
        // Minimal delay for immediate appearance
        column.style.animationDelay = Math.random() * 0.5 + 's';
        
        // Fewer characters for better performance
        const charCount = Math.floor(Math.random() * 15) + 10; // 10-25 characters
        let text = '';
        for (let i = 0; i < charCount; i++) {
            text += matrixChars[Math.floor(Math.random() * matrixChars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
        
        // Remove column after animation completes and free up position
        setTimeout(() => {
            if (column.parentNode) {
                column.parentNode.removeChild(column);
                // Free up the position for new columns
                occupiedPositions.delete(position);
            }
        }, (duration + 5) * 1000);
    }
    
    // Create one column immediately, then create the rest with delays
    createMatrixColumn(); // First column starts immediately
    
    for (let i = 1; i < 12; i++) {
        setTimeout(createMatrixColumn, i * 100);
    }
    
    // Continuously create new columns (gentler rate)
    setInterval(createMatrixColumn, 2500);
})();
