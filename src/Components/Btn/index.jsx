import styled from "styled-components";
import Colors from "../../Assets/Colors";


export default function Btn(props) {
    const Btn = styled.div`
        width: 200px;
        height: min-content;
        padding: 10px 0;
        border-radius: 20px;
        background:linear-gradient(to right,${Colors.primary},${Colors.secondary});
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        transition: all .5s;
        font-size: ${props.fs};
        margin: ${props.margin} 0;
        :hover{
            cursor: pointer;
      
            border-radius: 10px;
            background:linear-gradient(to right,${Colors.secondary},${Colors.primary});

        }
    
    
    `

    return(
        <Btn>

        <div className="text">{props.name}</div>
            
        </Btn>
    )
}