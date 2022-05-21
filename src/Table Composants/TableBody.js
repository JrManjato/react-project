export function  TableBody(props){
    const {label1, label2, label3, label4, label5, label6} = props;
    return (
      
        <tr>
         <td>{label1}</td>
         <td>{label2}</td>
         <td>{label3}</td>
         <td>{label4}</td>
         <td>{label5}</td>
         <td>{label6}</td>
        </tr>
      
    )
  }