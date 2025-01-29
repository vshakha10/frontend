

export const Lable = () => {
    return(
        <label className="name">Name</label>
    )
}

export const Input = () => {
    return(
        <input className='input' type='' name='' id=''/>
    )
}

export const Button =  () => {
    return(
        <button type='submit'>Submit</button>
    )
}

const Form = () => {
    return(
        <>
        <div className='element'>
        <Lable/>
        <Input/>
        <Button/>
        </div>
        </>
    )
}

export default Form
