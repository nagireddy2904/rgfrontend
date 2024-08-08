import Enquiry from "./Enquiry";

const House = (props) => {

        if(!props.houseInfo) {
                return <h3> ...Loading data</h3>
        }
        
        
            return (
                <>
                <div className="row">
                    <div className="col-sm-6">
                          <b> {props.houseInfo.address} </b>
                    </div>      
                    <div className="col-sm-6">
                        <b>  USD {props.houseInfo.price}</b>
                </div>
                </div>
        
        
                       <div className="row">
                    <div className="col-sm-6">
                            <img className="img-fluid img-thumbnail" src={`./imgs/${props.houseInfo.photo}`}  alt="house pic here" />
                    </div>      
                    <div className="col-sm-6">
                                {props.houseInfo.description}
                                { localStorage.getItem('name') && <Enquiry/> }
                    </div>
                </div>
                </>
             );
        }
        
        
        export default House;


// const House = (props) => {




//         if(!props) {
//                 return <h3> ...Loading data</h3>
//         }
//         else {
//             return (
//                 <>
//                 <div className="row">
//                     <div className="col-sm-6">
//                           <b> {props.houseInfo.address} </b>
//                     </div>      
//                     <div className="col-sm-6">
//                         <b>  USD {props.houseInfo.price}</b>
//                 </div>
//                 </div>
        
        
//                        <div className="row">
//                     <div className="col-sm-6">
//                             <img className="img-fluid img-thumbnail" src={`./imgs/${props.houseInfo.photo}`}  alt="house pic here" />
//                     </div>      
//                     <div className="col-sm-6">
//                                 {props.houseInfo.description}
//                     </div>
//                 </div>
//                 </>
//              );
//         }
//         }
//         export default House;

// // const House = () => {
// //     return (
// //         <>
// //         <div className="row">
// //             <div className="col-sm-6">
// //                     address here
// //             </div>      
// //             <div className="col-sm-6">
// //                     Price here
// //         </div>
// //         </div>
// //                <div className="row">
// //             <div className="col-sm-6">
// //                     <img className="img-fluid img-thumbnail" src="./imgs/1.jpg" alt="house pic here" />
// //             </div>      
// //             <div className="col-sm-6">
// //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
// //             Animi recusandae cumque voluptatibus similique ad. 
// //             Aut quas laboriosam animi ex suscipit nobis incidunt nulla,
// //             alias eveniet voluptatum excepturi, aliquid autem perspiciatis!      
// //           </div>
// //         </div>
// //         </>
// //      );
// // }
 
// // export default House;
