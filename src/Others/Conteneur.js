export function ConteuneurFluid(props){
    const {children} = props;
    return(
      <div class="container-fluid px-4">
        {children}
      </div>
      )
  }