import React from 'react';

// Pure CSS background to eliminate JS thread lag
const BackgroundElements = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {/* Subtle Binary Noise Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50' y='50' fill='%23875041' opacity='0.03' font-family='monospace' font-size='14'%3E01%3C/text%3E%3Ctext x='150' y='120' fill='%23875041' opacity='0.03' font-family='monospace' font-size='14'%3E10%3C/text%3E%3Ctext x='80' y='180' fill='%23875041' opacity='0.03' font-family='monospace' font-size='14'%3E//%3C/text%3E%3C/svg%3E")`,
                opacity: 0.5
            }}></div>
        </div>
    );
};

export default BackgroundElements;


