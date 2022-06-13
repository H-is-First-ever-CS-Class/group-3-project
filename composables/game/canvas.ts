/**
 * Standard Width & Heigh of the canvas
 */
const standardWH = 1000;


// Diff of big cell to standard cell is 110
const mapping: Record<number, number> = {
    0: standardWH - 62.5,
    1: standardWH - 173,
    2: standardWH - 255,
    3: standardWH - 337,
    4: standardWH - 419,
    5: standardWH - 500,
    6: standardWH - 581,
    7: standardWH - 662,
    8: standardWH - 743,
    9: standardWH - 824,
}

let canvas: HTMLCanvasElement;
let canvasContext: CanvasRenderingContext2D;

export const useTargetCanvas = (targetCanvas: HTMLCanvasElement) => {
    canvas = targetCanvas;

    const renderingContext = targetCanvas.getContext("2d");
    if (renderingContext === null) throw new Error("Rendering Context is null");

    canvasContext = renderingContext;
};

export const useClearCanvas = () => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}

export const useDrawPlayers = (color: string, boardPos: 0|1|2|3|4|5|6|7|8|9) => {
    useClearCanvas();
    canvasContext.beginPath();
    canvasContext.fillStyle = color;
    canvasContext.arc(mapping[boardPos], canvas.height - 40, 20, 0, 2*Math.PI);
    canvasContext.closePath();
    canvasContext.fill();
}

// export const 