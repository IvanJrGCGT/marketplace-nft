import styled from "styled-components";
import Components from "..";
import Colors from "../../Assets/Colors";
import img from "../../Assets/img";


export default function Card2(props) {
    
    const Card2 = styled.div`
    margin: 140px 10px 0 10px;

        width: 300px;
        height: 300px;
        border: solid 1px ${Colors.secondary};
        text-align: center;
        align-items: center;
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;
        
            .imgNft{
                width: 65%;
                height: 55%;
                margin-top: -100px;
                transition: all .2s;
                border-radius: 10px 10px 0px 0px;
                border: solid 1px ${Colors.secondary};
                

            }
            .name{
                margin-top: 20px;
                font-size: 16pt;
                color: ${Colors.white};
                font-family: 'Urbanist', sans-serif;
            }
            .stamp{
                width: 80px;
            }
            .info{
                 font-family: 'Urbanist', sans-serif;
                color: #fff;
                font-size: 12pt;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: space-evenly;

             
            }
    
    `


return(
    <Card2>
        <img className="imgNft"src={props.img} alt="" />
        <p className="name">
            {props.name}
        </p>
{/*         <img className="stamp" src={img.stamp} alt="" />
 */}        <div className="info">
            <div className="items">0</div>
            <div className="views">0</div>
            <div className="price">$   0</div>
            <div className="7D">$   0   m</div>
        </div>
        <Components.Btn name="See more" fs="12pt" />

    </Card2>


)
}