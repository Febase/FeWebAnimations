// https://codepen.io/aaroniker/pen/ZEpEvdz

import {styled, globalCss} from "@stitches/react";
import {animate, motion, useCycle} from "framer-motion";

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
            '--tick-offset': '20.5px',
            '--tick-array': '16.5px',
            '--tick-s': 1,
            '.tick': {
                fill: 'none',
                strokeWidth: '3px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                stroke: 'var(--c-active-inner)',
                strokeDasharray: '33px',
                transformOrigin: '10.5px 16px',
                transform: 'scale(var(--tick-s)) translateZ(0)'
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

const variants = {
    check: {},
    notCheck: {}
};

function Checkbox({}: Props) {
    const [isCheck, toggleCheck] = useCycle(false, true);

    globalStyles();

    return (

        <CheckboxLabel>
            <motion.input
                className="input"
                type="checkbox"
                animate={isCheck ? "check" : "notCheck"}
                onChange={() => toggleCheck()}
                variants={variants}
                initial={true}
            />
            <motion.svg className="svg" viewBox={"0 0 24 24"}
                        animate={isCheck ? "check" : "notCheck"}
                        variants={{
                            check: {
                                strokeDashoffset: 76.5,
                                strokeDasharray: 16.5,
                                transition : {
                                    type : "spring"
                                }
                            },
                            notCheck: {
                                strokeDashoffset: 36,
                                strokeDasharray: 16.5
                            }
                        }}>
                <motion.path className="tick" d="M4.5 10L10.5 16L24.5 1"/>
            </motion.svg>
        </CheckboxLabel>
    )
};

export default Checkbox;
