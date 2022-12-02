import styled from "styled-components";
import Colors from '../../Assets/Colors'
import img from "../../Assets/img";
export default function Header(props) {
    
    const Header = styled.div`
        width: 100vw;
        height: 10vh;
        display: flex;
        flex-direction: row;
            .menu{
                margin-top: 10px;
                width: 100vw;
                height: 10vh;
                display: flex;
                flex-direction: row;
                text-align: center;
                align-items: center;
                justify-content: space-evenly;

                    .logo{
                        width: 7vw;
                        img{
                            width: 100%;
                            cursor: pointer;

                        }
                    }
                    nav{
                        ul{
                            display: flex;
                            li{
                                width: 10vw;
                                list-style: none;
                                font-size: 12pt;
                                color: ${Colors.white};
                                transition: all .2s;
                                :hover{
                                    cursor: pointer;
                                    color: ${Colors.secondary};
                                    font-size: 120%;
                                }

                                

                            }
                        }
                    }
                    input{
                        width: 30vw;
                        height: 50%;
                        border-radius: 20px;
                        border: solid .1mm ${Colors.primary} ;
                        background: none;
                        color: ${Colors.white};
                        text-align: center;
                        font-size: 8pt;
                        :hover, :active{
                            border: solid .1mm ${Colors.secondary} ;

                        }

                        
                    }
                    .btn{
                        background: -webkit-linear-gradient(${Colors.primary},${Colors.secondary});
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        transition: all .2s;
                        :hover{
                            font-size: 120%;
                            cursor: pointer;
                            background: -webkit-linear-gradient(${Colors.secondary},${Colors.primary});
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;

                        }
                    }
            }
    
    `

    return(
        <Header>
            
            <div className="menu">
                <div className="logo">
                    <img src={img.logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li className="item text">
                            Explore
                        </li>
                        <li className="item text">
                            Resources
                        </li>
                        <li className="item text">
                            Magazine
                        </li>
                        <li className="item text">
                            Shopping
                        </li>   
                    </ul>
                </nav>
                <input type="text" name="src" id="src" placeholder="Search NFT's, artists, categories ..." />
                <div className="btn text">
                    Sign in
                </div>
            </div>


        </Header>
    )
}