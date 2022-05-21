export function  THead(props){
    const {label1, label2, label3, label4, label5, label6} = props;
    return (
      <tr>
         <th>{label1}</th>
         <th>{label2}</th>
         <th>{label3}</th>
         <th>{label4}</th>
         <th>{label5}</th>
         <th>{label6}</th>
      </tr>
    );
  }