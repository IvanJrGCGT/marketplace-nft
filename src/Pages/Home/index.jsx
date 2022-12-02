import styled from "styled-components";
import Colors from "../../Assets/Colors";
import NFT from "../../Assets/NFT";
import Components from "../../Components";


export default function Home(props) {
    const HomePage = styled.div`
        width: 100vw;
        height: 1000vh;
        background-color: ${Colors.black};
        align-items: center;
        justify-content: center;
        br{
            margin-top: 10px;
        }



        .content{
            display: flex;
            flex-direction: row;
            width: 100vw;
            height: 100vh;
            align-items: center;
            justify-content: space-around;
            
        }
        .content-one{

            margin-left: 100px;
            width: 50vw;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: start;
            
            .title{
                font-size: 50pt;
                margin: 15px 0;
           
            }
            .text{
            
                font-size: 16pt;
            }
            .btn{
                text-align: center;
                align-items: center;
            }

        }
        .content-two{
            width: 60vw;
            height: auto;
            display: flex;
            flex-wrap: wrap;
             .nft{

                width: 200px;
                height: 200px;
                padding: 10px;
                transition: all .2s;
                :hover{
                    padding: 0;
                    width: 220px;
                    height: 220px;
                    border-radius: 20px;
                    cursor: pointer;
                    border: solid 1px ${Colors.secondary};
                }
                img{
                    
                    width: 100%;
                }
            }
        }
        .card{
            margin: 0 auto;
            width: 80vw;
            height: 30vh;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            justify-content: space-around;
            border: 1px solid ${Colors.secondary};
            border-radius: 20px;
            .title{
                font-size: 28pt;
            }
            .text{
                margin-left: 10px;
                font-size: 15pt;
            }
            .one{
                display:flex;
                flex-direction: row;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            .two{
                display:flex;
                flex-direction: row;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            .three{
                display:flex;
                flex-direction: row;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
        }
        .newst{
            margin: 20px 0;
            width: 100vw;
            display: flex;
            flex-direction: column;
            .title{
                margin-left: 15px;
                font-size: 30pt;
            }
            .items{
                margin-top: 15px;
                text-align: center;
                align-items: center;
                justify-content: space-evenly;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .item{
                width: 200px;
                height: 200px;
                margin: 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            }
        }
    
    `

    return(
        <HomePage>
                <Components.Header />
                <div className="content">
                <div className="content-one">
                    <p className="title">
                    Collect <br/>
                    digital art</p>
                    <p className="text">
                    Buy and sell NFT's from the world's top artists</p>
                    <br />
                    <Components.Btn name="Explore" className="btn" />
                </div> 
                <div className="content-two">
                    <img src={NFT.NFT1} alt="" className="nft" />
                    <img src={NFT.NFT6} alt="" className="nft" />
                    <img src={NFT.NFT3} alt="" className="nft" />
                    <img src={NFT.NFT4} alt="" className="nft" />
                    <img src={NFT.NFT5} alt="" className="nft" />
                    <img src={NFT.NFT2} alt="" className="nft" />

                </div>
                              
                </div>
                <div className="card">
                <div className="one">
                    <div className="title">25K</div>
                    <div className="text">artworks</div>
                </div>
                <div className="two">
                    <div className="title">3.5k</div>
                    <div className="text">artists</div>
                </div>
                <div className="three">
                    <div className="title">55K</div>
                    <div className="text">auctions</div>
                    
                </div>
                </div> 
                <div className="newst">
                    <div className="title">
                       
                        Newst NFT
                        </div>
                        <div className="items">
                        <Components.Card name="NFT 01" price="299.5" img={NFT.NFT3} />
                        <Components.Card name="NFT 01" price="299.5" img={NFT.NFT4} />
                        <Components.Card name="NFT 01" price="299.5" img={NFT.NFT5} />
                        <Components.Card name="NFT 01" price="299.5" img={NFT.NFT6} />
                        


                        {/* <div className="item">
                            <img src={NFT.NFT1} alt="" />
                        </div>
                        <div className="item">
                            <img src={NFT.NFT2} alt="" />
                        </div>
                        <div className="item">
                            <img src={NFT.NFT3} alt="" />
                        </div>
                        <div className="item">
                            <img src={NFT.NFT4} alt="" />
                        </div>
                        <div className="item">
                            <img src={NFT.NFT5} alt="" />
                        </div>
                        <div className="item">
                            <img src={NFT.NFT6} alt="" />
                        </div>  */}
                        </div>
                    </div>
                
        </HomePage>
    )
}