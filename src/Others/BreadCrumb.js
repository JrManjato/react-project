export function BreadCrumb (props){
    const {children} = props;
    return(
  <ol class="breadcrumb mb-4">
      {children}        
  </ol>
    );
  }