import styled from "styled-components";
import Colors from "../../Assets/Colors";



export default function Card(props) {
    const Card = styled.div`
    
    
    
    .img{
                width: 200px;
                height: 200px;
                margin: 10px;
                transition: all .2s;
                :hover{
                    padding: 0;
                    width: 220px;
                    height: 220px;
                    cursor: pointer;
                    border: solid 1px ${Colors.secondary};
                    border-radius: 10px;

                }
                img{
                    width: 100%;
                    height: 100%;
                    transition: all .2s;
                    
                    :hover{
                        border-radius: 10px;

                    }
                }
    }

                .info{
                    display: flex;
                    text-align: center;
                    align-items: center;
                    justify-content: space-evenly;
                    .text{
                        color: ${Colors.secondary};
                        font-size:13pt;
                        transition:all .2s;
                        :hover{
                            font-size:14pt;
                        }
                    }
                    .price{
                        color: ${Colors.primary};
                        font-size:13pt;
                        transition:all .2s;
                        :hover{
                            font-size:14pt;
                        }
                    }
                }

                    
                
                
    `
        
    

    return(
        <Card>
         
        <div className="img">
           <img src= {props.img} alt="" />
        </div>
        <div className="info">
            <div className="text">
                {props.name}
            </div> 
            <div className="price">
                {props.price}
            </div>
        </div>
        </Card>

    )
}
