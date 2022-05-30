import { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  threshold: number;
  width: number;
  height: number;
}

export function MouseTracking({ threshold, width, height }: Props): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const drawCircle = useCallback((x: number, y: number, t: number) => {
    requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext('2d')!;
      const { width, height } = canvasRef.current;
      ctx.clearRect(0, 0, width, height);

      const grd = ctx.createLinearGradient(width / 2, 0, width / 2, height);
      grd.addColorStop(0, 'hsla(0, 0%, 0.7843137254901961%, 0.95)');
      grd.addColorStop(0.6, 'hsla(0, 0%, 0.7843137254901961%, 0.7)');
      grd.addColorStop(1, 'hsla(0, 0%, 0.7843137254901961%, 0)');

      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, window.scrollY + y, Math.max(200, (width / 2) * t * 2), 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();
    });
  }, []);

  useEffect(() => {
    drawCircle(mousePos.x, mousePos.y, threshold);
  }, [threshold, mousePos]);

  useEffect(() => {
    const mouseMove = (ev: MouseEvent): void => {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    };
    canvasRef.current?.addEventListener('mousemove', mouseMove);
    return () => canvasRef.current?.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <Overlay width={width} height={height} ref={canvasRef} />
  );
}

const Overlay = styled.canvas`
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
`;
