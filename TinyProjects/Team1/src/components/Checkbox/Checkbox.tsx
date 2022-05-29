// https://codepen.io/aaroniker/pen/ZEpEvdz

import {styled, globalCss} from "@stitches/react";
import {motion} from "framer-motion";

const Grid = styled(motion.div, {
    display: "grid",
    gridGap: "24px 32px",
    gridTemplateColumns: "repeat(3, auto)",
    gridTemplateRows: "repeat(3, auto)",
    gridAutoFlow: "column",
    '.last': {
        gridColumn: "1 / 4",
        gridRow: "3",
    }
})

const CheckboxLabel = styled(motion.label, {
    display: 'table',
    borderRadius: 'var(--border-radius, 12px) var(--border-radius-corner, 12px) var(--border-radius, 12px) var(--border-radius, 12px)',
    position: 'relative',
    'input': {
        appearance: 'none',
        outline: 'none',
        border: 'none',
        background: 'var(--input-background, none)',
        display: 'block',
        cursor: 'pointer',
        margin: 0,
        padding: 0,
        borderRadius: 'inherit',
        width: 'var(--input-width, 24px)',
        height: 'var(--input-height, 24px)',

        '--border-color': 'var(--c-default)',
        '--border-width': '2px',
        boxShadow: 'inset 0 0 0 var(--border-width) var(--border-color)',
        '&:checked': {
            '--border-color': 'var(--c-active)',
            '--border-width': '12px',
            '& + svg': {
                '--tick-offset': '46.5px'
            }
        },
        '&:not(:checked)': {
            transition: 'box-shadow .25s',
            '&:hover': {
                '--border-width': '3px',
                '--border-color': 'var(--c-active)'
            }
        },
        '& + svg': {
            '--dot-x': '14px',
            '--dot-y': '-14px',
            '--dot-s': 1,
            '--tick-offset': '20.5px',
            '--tick-array': '16.5px',
            '--tick-s': 1,
            '--drop-s': 1,
            '.tick': {
                fill: 'none',
                strokeWidth: '3px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                stroke: 'var(--c-active-inner)',
                strokeDasharray: 'var(--tick-array) 33px',
                strokeDashoffset: 'var(--tick-offset)',
                transformOrigin: '10.5px 16px',
                transform: 'scale(var(--tick-s)) translateZ(0)'
            },
            '.dot': {
                transformOrigin: '10.5px 15.5px',
                transform: 'translate(var(--dot-x), var(--dot-y)) scale(var(--dot-s)) translateZ(0)',
            },
            '.drop': {
                transformOrigin: '25px -1px',
                transform: 'scale(var(--drop-s)) translateZ(0)'
            }
        }
    },
    'svg': {
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        pointerEvents: 'none',
        fill: 'var(--c-active-inner)',
        transform: 'scale(1.01) translateZ(0)'
    },
    '--border-radius': '5px',
    '--border-radius-corner': '5px'
})

type Props = {
    size: number
}

const globalStyles = globalCss({
    ':root': {
        '--c-active': '#275EFE',
        '--c-active-inner': '#FFFFFF',
        '--c-default': '#D2D6E9',
        '--c-default-dark': '#C7CBDF',
        '--c-black': '#1B1B22'
    }
});

function Checkbox({size = 9}: Props) {
    const theta = 360 / size;
    const cellSize = 190;
    const radius = Math.round((cellSize / 2) / Math.tan(Math.PI / size));

    const arrToSize = new Array(size).fill(0).map((arr, i) => i);
    const getTransformsArr = (i: number) => {
        const ratateNum = new Array(size + 1).fill(0).map((arr, i) => i);
        return ratateNum.map(rotate => `rotateY(${theta * (i + rotate)}deg) translateZ(${radius}px)`)
    }

    globalStyles();

    return (
        <Grid>
            <CheckboxLabel>
                <input type="checkbox"/>
                <svg width={24} height={24} >
                    <path className="tick" d="M4.5 10L10.5 16L24.5 1"/>
                    <circle className="dot" cx="10.5" cy="15.5" r="1.5"/>
                </svg>
            </CheckboxLabel>
        </Grid>
    )
};

export default Checkbox;
