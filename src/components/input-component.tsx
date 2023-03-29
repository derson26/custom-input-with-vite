import './input.css'
import { forwardRef } from 'react';

type TInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {};

interface Iinput {
    inputProps: TInputProps,
    src: string, 
}
const CustomInput = forwardRef<HTMLInputElement, Iinput>(( props: Iinput, ref) => {
    return (
        <div className="button-container">
            <input {...props.inputProps} ref={ref} />
            <img src={props.src} alt='react icon' />
        </div>  
        
    )
})

export default CustomInput;