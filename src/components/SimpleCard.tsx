interface ISimpleCard { 
    name:string,
    surname:string,
    age:number
    sayHello: (key: string) => void
}

const SimpleCard:React.FC<ISimpleCard> = ({name, surname, age, sayHello}) => {
    return(
        <div>
            <h1>{name}</h1>
            <h1>{surname}</h1>
            <h1>{age}</h1>
        </div>
    )
}
export default SimpleCard