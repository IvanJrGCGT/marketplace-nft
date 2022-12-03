import styled from "styled-components";
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
            .imgNft{
                width: 65%;
                height: 55%;
                margin-top: -30px;
                transition: all .2s;
                border-radius: 10px 10px 0px 0px;
                border: solid 1px ${Colors.secondary};
                

            }
            .name{
                font-size: 16pt;
                color: ${Colors.white};
                font-family: 'Urbanist', sans-serif;
            }
            .stamp{
                margin-top: 10px;
                width: 50px;
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
        <img className="stamp" src={img.stamp} alt="" />
        <div className="info">
            <div className="items">5755</div>
            <div className="views">15996</div>
            <div className="price">$   15.28</div>
            <div className="7D">$   4.09   m</div>
        </div>

    </Card2>


)
}