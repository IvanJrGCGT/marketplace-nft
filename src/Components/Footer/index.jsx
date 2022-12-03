import styled from "styled-components";
import Colors from "../../Assets/Colors";
import img from "../../Assets/img";


export default function Footer(props) {

    const Footer = styled.div`
   
    width: 100vw;
    height: 50vh;
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
                .item:hover{
            cursor: pointer;
            color: ${Colors.primary};
        }
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15vw;
        .title{
            text-align: start;
        }
        nav{
            margin: 10px 0;
            text-align: start;
            justify-content: start;
            display: flex;
            flex-direction: column;
            .item{
                margin: 1px 0;
                color: ${Colors.white};
                list-style: none;
                font-family: 'Urbanist', sans-serif;
              
            }
        }
    }
    .help{
                .item:hover{
            cursor: pointer;
            color: ${Colors.primary};
        }
         width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15vw;
        .title{
            text-align: start;
        }
        nav{
            margin: 10px 0;
            text-align: start;
            justify-content: start;
            display: flex;
            flex-direction: column;
            .item{
                margin: 1px 0;
                color: ${Colors.white};
                list-style: none;
                font-family: 'Urbanist', sans-serif;
              
            }
        }
    }
    .account{
                .item:hover{
            cursor: pointer;
            color: ${Colors.primary};
        }

         width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15vw;
        .title{
            text-align: start;
        }
        nav{
            margin: 10px 0;
            text-align: start;
            justify-content: start;
            display: flex;
            flex-direction: column;
            .item{
                margin: 1px 0;
                color: ${Colors.white};
                list-style: none;
                font-family: 'Urbanist', sans-serif;
                
              
            }
        }
    }
    .like{
        width: 20vw;
        img{
            width: 40%;
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

                <nav>
                <li className="item">Twitter</li>
                <li className="item">Help and Support</li>
                <li className="item">FAQs</li>
                <li className="item">Chat with Us</li>
                <li className="item">Seller's University</li>
                <li className="item">Editorial</li>
                </nav>

            </div>
            <div className="account">
                <div className="title">My account</div>
                
                <nav>
                <li className="item">Create a Store</li>
                <li className="item">List an item for sale</li>
                <li className="item">Discord</li>
                <li className="item">My profile</li>
                <li className="item">Browse Digital Items</li>
                </nav>

            </div>
            <div className="like">
            <a href="https://www.behance.net/gallery/155664611/NFT-Marketplace-Design-Concept?tracking_source=project_owner_other_projects">
            <img src={img.like} alt="" />
            </a>
            </div>
        </Footer>
    )
}