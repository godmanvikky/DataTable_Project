import React from 'react'
import './table.css'
import { Link as RouterLink } from 'react-router-dom';
class DataTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selected:false
        }
    }
    onRowClick=(e)=>{
      if(e.target.tagName=="TD"){
           alert("Row Selcted:-"+e.target.id)
        }
    }
    selectAll=(e)=>{
        if(e.target.checked){
        this.setState({
            selected:true
        })
        }
        else{
            this.setState({
                selected:false
            })
        }
    }
    render(){
        const {data}=this.props
        const {selected}=this.state
        return(
            <table>
                <tr>
                    <th><input className="box" type="checkbox" onClick={this.selectAll}/></th>
                    <th>Product</th>
                    <th>Inventory</th>
                    <th>Type</th>
                    <th>Vendor</th>
                </tr>
                {
                    data.map((table,i)=>(
                        <tr onClick={this.onRowClick}>
                            <td id={i}><input type="checkbox" checked={selected?selected:null}></input></td>
                            <td className="container" id={i}>
                            <a href={table.url}>
                                <img src={table.thumbnailUrl} />
                            </a>
                            {table.title}
                            </td>
                            <td id={i}>In Stock</td>
                            <td id={i}>Gift Card</td>
                            <td id={i}>Full Test Store</td>
                        </tr>
                    ))
                        
                }
                    
              
                
            </table>)
    }

}
export default DataTable;