import styled from "styled-components";
import Colors from "../../Assets/Colors";
import img from "../../Assets/img";


export default function Footer(props) {

    const Footer = styled.div`
    width: 100vw;
    height: 30vh;
    background-color: ${Colors.black};
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    .title{
        font-size: 18pt;
    }
    .download{
        width: 15vw;
        img{
            width: 60%;
            margin-top: 10px;
        }        
    }
    .join{
        nav{
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            .item{
                color: ${Colors.white};
                list-style: none;
                font-family: 'Urbanist', sans-serif;
              
            }
        }
    }
    
    `

    return(
        <Footer>
            <div className="download">
                <div className="title">Download our app</div>
                <img src={img.qrcode} alt="" />
            </div>
            <div className="join">
                <div className="title">Join us</div>
                <nav>
                    <li className="item">Twitter</li>
                    <li className="item">Instagram</li>
                    <li className="item">Discord</li>
                </nav>
            </div>
            <div className="help">
                <div className="title">Help</div>
            </div>
            <div className="account">
                <div className="title">My account</div>
            </div>
            
        </Footer>
    )
}